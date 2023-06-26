<template>
    <div class="app">

      <!-- 游戏选择按钮 -->
      <div class="gameButtons">
        <button v-for="(game, index) in gameIds" :key="index" @click="selectGame(game.key)">
            <img :src="getButtonImage(game.key)" alt="Button Image" />
        </button>
      </div>

      <!-- 游戏介绍 -->
      <div class="gameIntroduction">
        <h2>{{ selectedGameIdx }}</h2>
        <img :src="getGameImage()" alt="Game Image" />
      </div>

  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            selectedGameIdx: 0
        }
    },
    methods: {
        ...mapActions(['setGameIds']),
        // 取得可選擇遊戲
        async getGameIds () {
            // 假如 有資料讀取就好
            if (this.gameIds.length > 0) {
                this.selectedGameIdx = this.gameIds[0].key
                return
            }

            const req = {
                token: this.user.token
            }

            await this.$axiosHandler.getGameIds(req).then((res) => {
                let ids = []

                if (res.isSuccess) {
                    const g = res.data.gameIds.sort((a, b) => {
                        return a - b
                    })

                    ids = this.$UTIL.gameIds2GameArrObj(g)
                }

                this.setGameIds(ids)
                this.selectedGameIdx = this.gameIds[0].key
            })
        },

        selectGame (gameId) {
            this.selectedGameIdx = gameId
        },
        getGameImage () {
            const imageName = `game${this.selectedGameIdx}_${this.currentLanguage}`
            try {
                return require(`@/assets/games/${imageName}.png`)
            } catch {

            }
        },
        getButtonImage (gameId) {
            const imageName = `game${gameId}_icon`
            try {
                return require(`@/assets/games/${imageName}.jpg`)
            } catch {

            }
        }
    },
    computed: {
        ...mapState(['user', 'currentLanguage', 'gameIds'])
    },
    created () {
        this.getGameIds()
    }
}
</script>

<style scoped>
.gameButtons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px; /* 设置左右留白 */
}

.gameButtons button {
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 60px;
  margin: 2px;
  background-color: #ff000000;
  border: 2px solid #000000;
  cursor: pointer;
  transform: skew(-20deg);
}

.gameButtons button img {
  position: absolute;
  top: 0;
  left: 5px;
  width: 100%;
  height: 100%;
  transform: skew(20deg);
}

.gameIntroduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  width: 95%;
}

.gameIntroduction img {
  width: 95%; /* 图片宽度为100% */
  height: auto; /* 自适应高度 */
}
</style>

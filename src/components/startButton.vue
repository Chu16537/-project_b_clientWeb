<template>
  <div class="startbutton">
    <button @mouseover="handleMouseOver" @mouseout="handleMouseOut" @click="startGame">
      <img :src="buttonImage" alt="Button Image">
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            isHovered: false
        }
    },
    computed: {
        ...mapState(['user', 'currentLanguage']),
        buttonImage () {
            const imageName = this.isHovered ? this.currentLanguage + '1' : this.currentLanguage + '2'
            return require(`@/assets/startButton/${imageName}.jpg`)
        }
    },
    methods: {
        handleMouseOver () {
            this.isHovered = true
        },
        handleMouseOut () {
            this.isHovered = false
        },
        async startGame () {
            const req = {
                token: this.user.token
            }
            await this.$axiosHandler.startGame(req).then((res) => {
                if (res.isSuccess) {
                    window.open(res.data.url, '_blank')
                }
            })
        }
    }
}
</script>

<style scoped>
.startbutton {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%); /* 将元素水平居中 */
  display: flex;
  justify-content: center;
  background-color: red;
  z-index: 2999;
}

.startbutton button {
  border: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}

.startbutton button img {
  width: 100px;
  height: 100px;
}
</style>

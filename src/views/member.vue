<template>
    <div class="app">
    <!-- 玩家資料 -->
    <!-- <div class="member-data">
        <div v-for="item in memberData" :value="item.value" :key="item.key" class="member-data-item" :style="getItemStyle">
            <span>{{ $t(item.key) }}</span>
            <br>
            <span>{{ item.value }}</span>
        </div>
    </div> -->

    <!-- 選取資料 -->
    <el-form ref="form" :model="form" label-width="80px" >

      <el-form-item :label="$t('select_date')">
        <datePicker ref="date"></datePicker>
      </el-form-item>

      <el-form-item :label="$t('select_game')">
        <checkboxGroup ref="gameIdsCheckboxGroup" :checkboxsDatas="gameIds"></checkboxGroup>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :disabled="isSubmit" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>

    <!-- 下注資料 table -->
    <div>
      <customTable :loading="isSubmit" :selectedTags="selectedTags" :data="tableData" :cell-style="cellStyle" :columns="columns">
            <template v-slot:date="{ row }">
              <span>{{ row.date }}</span>
            </template>
            <template v-slot:gameResult="{ row }">
                <button @click="showGameResult(row)">aa</button>
            </template>
        </customTable>
    </div>

    <gameResult v-if="isShowGameResult" :gameId="showGameId" :gameResult="showGameResultData" @close="closeGameResult"></gameResult>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import datePicker from '@/components/datePicker.vue'
import checkboxGroup from '@/components/checkboxGroup.vue'
import customTable from '@/components/table.vue'
import gameResult from '@/components/gameResult.vue'
export default {
    inject: ['updateLang'],
    components: {
        datePicker,
        checkboxGroup,
        customTable,
        gameResult
    },
    data () {
        return {

            form: {
                date: [],
                gameIds: []
            },

            // memberData: [
            //     { key: 'todayBet', value: 10 },
            //     { key: 'todayPay', value: 2 },
            //     { key: 'totalBet', value: 4 },
            //     { key: 'totalPay', value: 5 }
            // ],
            itemsPerRow: 5,

            selectedTags: [],
            // selectedTag: 'all',
            // selectedTagNum: 0,

            isSubmit: false,
            tableData: [],

            columns: [
                { label: this.$t('date'), prop: 'date' },
                { label: this.$t('gameName'), prop: 'gameName' },
                { label: this.$t('betAmount'), prop: 'betAmount' },
                { label: this.$t('effectiveBetAmount'), prop: 'effectiveBetAmount' },
                { label: this.$t('payoutAmount'), prop: 'payoutAmount' },
                { label: this.$t('winLossResult'), prop: 'winLossResult' },
                { label: this.$t('gameResul'), prop: 'gameResult' }
            ],

            isShowGameResult: false,
            showGameId: 0,
            showGameResultData: {}
        }
    },
    methods: {
        ...mapActions(['setMember', 'setGameIds']),

        // 取得可選擇遊戲
        async getGameIds () {
            // 假如 有資料讀取就好
            if (this.gameIds.length > 0) {
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
            })
        },
        // 傳送表單資料
        async submitForm () {
            this.form.date = this.$refs.date.selectedDate
            this.form.gameIds = this.$refs.gameIdsCheckboxGroup.selectedDatas

            if (!this.form.date || this.form.date.length < 2) {
                this.$message.error(this.$t('date_fail'))
                return
            }

            if (this.form.gameIds.length < 1) {
                this.$message.error(this.$t('choose_one_game'))
                return
            }

            this.isSubmit = true

            await this.getMemberBetData()

            this.isSubmit = false
        },
        // 取得下注資料
        async getMemberBetData () {
            const req = {
                token: this.user.token,
                dates: this.form.date,
                gameIds: this.form.gameIds
            }

            await this.$axiosHandler.getMemberBetData(req).then((res) => {
                if (res.isSuccess) {
                    // 排序
                    this.tableData = res.data.betHistory.sort((a, b) => {
                        return a.timestamp - b.timestamp
                    })

                    // 篩選標籤
                    const selectedTagsObj = {}
                    // 新增資料 table使用
                    this.tableData.map((v) => {
                        v.date = new Date(v.timestamp).toISOString().slice(0, 10)
                        v.gameName = this.$t('game_name_' + v.gameId)
                        v.winLossResult = v.payoutAmount - v.betAmount
                        // table 表單 filter 使用
                        v.filterKey = v.gameName
                        selectedTagsObj['game_name_' + v.gameId] = true
                        return v
                    })

                    this.selectedTags = Object.keys(selectedTagsObj).map((v) => {
                        return this.$t(v)
                    })
                    return
                }

                this.$message.error(this.$t('request_failed'))
            })
        },

        cellStyle ({ row, column }) {
            if (column.property === 'winLossResult') {
                return {
                    color: row[column.property] >= 0 ? 'green' : 'red'
                }
            }
        },
        // 顯示牌局結果
        showGameResult (row) {
            this.showGameId = row.gameId
            this.showGameResultData = row.gameResult
            this.isShowGameResult = true
        },
        // 關閉牌局結果
        closeGameResult () {
            this.isShowGameResult = false
        }

    },
    created () {
        this.getGameIds()
    },
    computed: {
        ...mapState(['user', 'gameIds', 'memberData']),
        getItemStyle () {
            return {
                width: `${70 / this.itemsPerRow}%`
            }
        },
        selectedTagAll () {
            let gameIds = this.tableData.map((item) => {
                return item.gameId
            })

            gameIds = gameIds.filter((x, i) => gameIds.indexOf(x) === i)

            const tags = gameIds.map((v) => {
                const gameName = this.$CONST.GAMEID[v]
                return { key: v, value: gameName }
            })

            tags.unshift({ key: 0, value: 'all' })
            return tags
        }
    }
}
</script>

<style scoped>
.member-data {
  display: flex;
  flex-wrap: wrap;
}

.member-data-item {
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.member-data-item:before {
  content: "";
  position: absolute;
  bottom: 50%;
  left: 10px;
  right: 10px;
  height: 1px;
  background-color: #000000; /* 设置水平线的颜色，可根据需要调整 */
}

.item-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.greenText {
  background: green;
}
.redText {
  background: red;
}
</style>

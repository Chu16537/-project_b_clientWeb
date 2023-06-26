<template>
    <div class="app">

        <!-- 排行榜 -->
        <customTable :title="$t('rank')" :data="datas.rank" :columns="columns" :isPagination="false">
            <template v-slot:date="{ row }">
                <span>{{ row.date }}</span>
            </template>
            <template v-slot:rank="{row}">
                <img class="rank" v-if=isShowRankImg(row.rank) :src=rankImage(row.rank) :alt="row.rank">
            </template>
        </customTable>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import customTable from '@/components/table.vue'

export default {
    inject: ['updateLang'],
    components: {
        customTable
    },
    data () {
        return {
            datas: {
                rank: []
            },

            columns: [
                { label: this.$t('rank'), prop: 'rank' },
                { label: this.$t('nickname'), prop: 'nickname' },
                { label: this.$t('total_pay'), prop: 'totalPay' }
            ]
        }
    },
    methods: {
        ...mapActions(['setHomeData']),
        async getHomeData () {
            // 假如 有資料讀取就好
            if (this.homeData) {
                this.datas = this.homeData
                return
            }

            const req = {
                token: this.user.token
            }

            await this.$axiosHandler.getHomeData(req).then((res) => {
                this.datas.rank = []
                if (res.isSuccess) {
                    this.datas.rank = res.data.rank.sort((a, b) => {
                        return b.totalPay - a.totalPay
                    })

                    this.datas.rank.map((v, i) => {
                        // 假如是第一組
                        if (i === 0) {
                            v.rank = 1
                            return v
                        }

                        // totalPay 跟前面一樣
                        if (v.totalPay === this.datas.rank[i - 1].totalPay) {
                            v.rank = this.datas.rank[i - 1].rank
                            return v
                        }

                        // 前面排名+1
                        v.rank = this.datas.rank[i - 1].rank + 1
                        return v
                    })
                    // 儲存資料
                    this.setHomeData(this.datas)
                }
            })
        },
        // 是否顯示rank圖片
        isShowRankImg (rank) {
            switch (rank) {
            case 1:
            case 2:
            case 3:
                return true
            default:
                return false
            }
        },
        // 指定rank圖片
        rankImage (rank) {
            const imageName = 'rank_' + rank
            switch (rank) {
            case 1:
                return this.$UTIL.getImage(imageName)
            case 2:
                return this.$UTIL.getImage(imageName)
            case 3:
                return this.$UTIL.getImage(imageName)
            }
        }
    },
    created () {
        this.getHomeData()
    },
    computed: {
        ...mapState(['user', 'homeData'])
    }
}
</script>

<style scoped>
.rank {
    width: 64px;
    height: 64px;
}
</style>

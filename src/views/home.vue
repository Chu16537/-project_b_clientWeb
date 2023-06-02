<template>
    <div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getHomeData } from '../script/axiosHandler'
export default {
    inject: ['updateLang'],
    data () {
        return {
            loginData: '', // 登入資料
            language: 'English' // 當前語言
        }
    },
    methods: {
        ...mapActions(['setHomeData']),
        async getHomeData () {
            // 假如有資料 就不用再打請求
            if (this.homeData) {
                return
            }

            const req = {
                channel: 1
            }
            await getHomeData(req).then((res) => {
                console.log('res', res)

                if (res.isSuccess) {
                    this.setHomeData(res.data)
                    return
                }

                console.log('fail')
            })
        }
    },
    created () {
        this.getHomeData()
    },
    computed: {
        ...mapState(['homeData'])
    }
}
</script>

<style>

</style>

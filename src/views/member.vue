<template>

    <br>
    <br>
    <br>
    <br>
    <div v-if="data" >
    <frameStr :items="data"
                     borderColor="#ff0000"
                     fontColor="#0000ff"
                     :itemsPerRow="5" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getMemberData } from '../script/axiosHandler'
import frameStr from '@/components/frameStr.vue'
export default {
    inject: ['updateLang'],
    components: {
        frameStr
    },
    data () {
        return {
            data: []
        }
    },
    methods: {
        ...mapActions(['setMember']),
        async getMemberData () {
            // if (!this.user) {
            //     console.log('not token')
            //     this.$router.push({ name: 'login' })
            //     return
            // }

            const req = {
                token: 'aaa'
            }

            await getMemberData(req).then((res) => {
                console.log(this.memberData, res)
                if (res.isSuccess) {
                    this.setMember(res.data)

                    this.data = Object.keys(res.data).map((v) => {
                        return { key: v, value: res.data[v] }
                    })

                    return
                }

                console.log('fail')
            })
        }
    },
    created () {
        this.getMemberData()
    },
    computed: {
        ...mapState(['user', 'memberData'])
    }
}
</script>

<style scoped>

</style>

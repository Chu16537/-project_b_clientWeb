<template>
    <div>

    <!-- <table :columns="columns1" :data="data1"></table> -->
    <table :columns="columns1" :data="data1"></table>
    <br>
    <br>
    <br>
    <br>
    {{ memberData }}
    <br>
    {{ data1 }}

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getMemberData } from '../script/axiosHandler'
export default {
    inject: ['updateLang'],
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]

            // columns1: [
            //     {
            //         title: this.$t('status'),
            //         key: 'status',
            //         render: (h, { row }) => {
            //             return h('span', row.member.status)
            //         }
            //     },
            //     {
            //         title: this.$t('totalBet'),
            //         key: 'totalBet',
            //         render: (h, { row }) => {
            //             return h('span', row.member.totalBet)
            //         }
            //     },
            //     {
            //         title: this.$t('totalPay'),
            //         key: 'totalPay',
            //         render: (h, { row }) => {
            //             return h('span', row.member.totalPay)
            //         }
            //     },
            //     {
            //         title: this.$t('todayBet'),
            //         key: 'todayBet',
            //         render: (h, { row }) => {
            //             return h('span', row.todayBet)
            //         }
            //     },
            //     {
            //         title: this.$t('todayPay'),
            //         key: 'todayPay',
            //         render: (h, { row }) => {
            //             return h('span', row.todayPay)
            //         }
            //     }
            // ],
            // data1: [{ todayBet: 1, todayPay: 2, member: { status: 3, totalBet: 4, totalPay: 5 } }]

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
                if (res.isSuccess) {
                    this.setMember([res.data])
                    this.data1 = [res.data]
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

<style>

</style>

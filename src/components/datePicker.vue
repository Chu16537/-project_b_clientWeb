<template>
    <div>
      <el-date-picker
        v-model="selectedDate"
        type="daterange"
        :shortcuts="shortcuts"
        :disabled-date="disabledDate"
      ></el-date-picker>
    </div>
</template>

<script>

export default {
    data () {
        return {
            selectedDate: null,

            // 禁用時間
            disabledDate (time) {
                const currentDate = new Date()
                const oneMonthAgo = new Date()
                oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
                // 禁用超出指定时间范围的日期
                return time.getTime() > currentDate.getTime() || time.getTime() < oneMonthAgo.getTime()
            },

            shortcuts: [
                {
                    text: this.$t('yesterday'),
                    onClick: () => {
                        const date = new Date()
                        this.selectedDate = [
                            this.subtractDays(date, 1),
                            this.subtractDays(date, 0)
                        ]
                    }
                },
                {
                    text: this.$t('last_week'),
                    onClick: () => {
                        const date = new Date()
                        this.selectedDate = [
                            this.subtractWeeks(date, 1),
                            this.subtractDays(date, 0)
                        ]
                    }
                },
                {
                    text: this.$t('last_month'),
                    onClick: () => {
                        const date = new Date()
                        this.selectedDate = [
                            this.subtractMonths(date, 1),
                            this.subtractDays(date, 0)
                        ]
                    }
                }
            ]
        }
    },
    methods: {
        // 減去指定天數
        subtractDays (date, days) {
            const result = new Date(date)
            result.setDate(result.getDate() - days)
            return result.getTime()
        },
        // 減去指定週數
        subtractWeeks (date, weeks) {
            const result = new Date(date)
            result.setDate(result.getDate() - weeks * 7)
            return result.getTime()
        },
        // 減去指定月數
        subtractMonths (date, months) {
            const result = new Date(date)
            result.setMonth(result.getMonth() - months)
            return result.getTime()
        }
    }
}
</script>

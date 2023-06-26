<template>

        <select @change="changeLanguage" v-model="selectedLanguage">
            <option v-for="item in langs" :value="item.key" :key="item.key">
                {{ item.value }}
            </option>
        </select>

</template>

<script>
import { SetValue, NowLang } from '../script/localStorage.js'

export default {
    data () {
        return {
            selectedLanguage: NowLang(),

            langs: [
                {
                    key: 'en',
                    value: 'English'
                },
                {
                    key: 'zh_tw',
                    value: '中文(繁體)'
                }
            ]
        }
    },
    methods: {
        changeLanguage () {
            SetValue('lang', this.selectedLanguage)
            this.$store.dispatch('setLanguage', this.selectedLanguage)
            this.$emit('event-changeLang', this.selectedLanguage)
        }
    }
}
</script>

<style scoped>

select {
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  border: none;
  border-radius: 20px;
}
</style>

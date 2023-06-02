<template>

    <!-- 使用 languageSwitch 組件 -->
    <language-switch @event-changeLang="changeLang"></language-switch>

    <topMenu v-if="isUpdateLang"></topMenu>

    <router-view v-if="isUpdateLang" />

</template>

<script>
import languageSwitch from '@/components/languageSwitch.vue'
import topMenu from '@/components/topMenu.vue'

export default {
    provide () {
        return {
            updateLang: this.updateLang
        }
    },
    components: {
        languageSwitch,
        topMenu
    },
    data () {
        return {
            isUpdateLang: true
        }
    },
    methods: {
        changeLang (lang) {
            this.$i18n.locale = lang
            this.updateLang()
        },
        updateLang () {
            this.isUpdateLang = false
            this.$nextTick(function () {
                this.isUpdateLang = true
            })
        }
    }
}
</script>

<style lang="scss">
</style>

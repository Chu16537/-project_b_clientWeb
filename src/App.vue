<template>
    <div class="app">

        <topMenu v-if="isUpdateLang && !hideTopMenu" :changeLang="changeLang"></topMenu>
        <div class="header"></div>

        <router-view v-if="isUpdateLang" ></router-view>

        <div v-if="!hidStartButton" class="startButton">
            <startButton></startButton>
        </div>

    </div>

</template>

<script>
import topMenu from '@/components/topMenu.vue'
import startButton from '@/components/startButton.vue'

export default {

    provide () {
        return {
            updateLang: this.updateLang
        }
    },
    components: {
        topMenu,
        startButton
    },
    data () {
        return {
            isUpdateLang: true,
            hideTopMenu: false,
            hidStartButton: false
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
    },
    created () {
        this.$router.beforeEach((to, from, next) => {
            this.hideTopMenu = to.meta.hideTopMenu === true
            this.hidStartButton = to.meta.hidStartButton === true
            next()
        })
    }
}

</script>

<style>
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
    background-image: url('@/assets/bg.jpeg');
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

.app {
    height: 100%;
}

.header {
    height: 200px;
}

.startButton {
    padding-bottom: 100px;
    background-color: transparent;
}
</style>

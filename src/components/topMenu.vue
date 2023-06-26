<template>
  <img src="../assets/logo.png" alt="Logo" class="logo" @click="handleHome">
  <div class="menu">
    <div class="menu-item">
    </div>
    <div class="menu-item" @click="handleMember">
      <span >
        {{ $t('member') }}
      </span>
    </div>
    <div class="menu-item" @click="handleGame">
      <span>
      {{ $t('game_introduction') }}
      </span>
    </div>
    <div class="menu-item" @click="handleSupport">
      <span>
      {{ $t('customer_support') }}
      </span>
    </div>
    <div class="menu-item">
      <language-switch @event-changeLang="changeLang"></language-switch>
    </div>
  </div>
</template>

<script>
import languageSwitch from '@/components/languageSwitch.vue'
export default {
    // inject: ['updateLang'],
    props: {
        changeLang: {
            type: Function,
            default: () => {}
        }
    },
    components: {
        languageSwitch
    },
    methods: {
        handleHome () {
            // 执行会员功能的操作
            console.log('handleHome')
            this.$router.push({ name: 'home' })
        },
        handleMember () {
            // 执行会员功能的操作
            console.log('handleMember')
            this.$router.push({ name: 'member' })
        },
        handleGame () {
            // 执行游戏介绍的操作
            console.log('handleGame')
            this.$router.push({ name: 'game' })
        },
        handleSupport () {
            // 执行客服的操作
            console.log('handleSupport')
        }
    }
}
</script>

<style>
.menu {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #000000;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
}

.menu-item {
  flex-grow: 1; /* 自动缩放 */
  font-size: 24px;
  color: #ffffff;
  margin-right: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.menu-item:last-child {
  margin-right: 0;
}

.menu-item span {
  min-width: 100px; /* 设置最小宽度 */
}

.logo {
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
}

</style>

<template>

  <div class="menu">
   <div class="menu-item" @click="handleMember">{{ $t('menu.member') }}</div>
    <div class="menu-item" @click="handleGame">{{ $t('menu.game') }}</div>
    <div class="menu-item" @click="handleDeposit">{{ $t('menu.deposit') }}</div>
    <div class="menu-item" @click="handleSupport">{{ $t('menu.support') }}</div>

  </div>
</template>

<script>
export default {
    inject: ['updateLang'],
    methods: {
        handleMember () {
            // 执行会员功能的操作
            console.log('handleMember')
            this.$router.push({ name: 'member' })
        },
        handleGame () {
            // 执行游戏介绍的操作
            console.log('handleGame')
            this.$router.push({ name: 'home' })
        },
        handleDeposit () {
            // 执行储值的操作
            console.log('handleDeposit')
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
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  background-color: #ff0000;
  padding: 10px;
  top: 50px;
  background-image: url("../assets/BG-brs.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

.menu-item {
  font-size: 16px;
  color: #000000;
  margin-right: 20px;
  cursor: pointer;
  background-image: url("../assets/BG-brs.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

.menu-item:last-child {
  margin-right: 0;
}
</style>

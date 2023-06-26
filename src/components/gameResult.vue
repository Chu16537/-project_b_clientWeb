<template>
    <div>
      <el-dialog
        v-model="isShow"
        :title="$t('gameResul')"
        width="30%"
        @close="close"
      >
      <div v-if="gameId===1">
            <p>{{$t('dragon')}}: {{ gameResult.dragon }}</p>
            <p>{{$t('tiger')}}: {{ gameResult.tiger }}</p>
            <p>{{$t('winZone')}}: {{ gameResult.winZone }}</p>
            <p>{{$t('betZone')}}: {{ gameResult.betZone }}</p>
            <p>{{$t('payZone')}}: {{ gameResult.payZone }}</p>
        </div>

      </el-dialog>
    </div>
  </template>

<script>
export default {
    props: {
        gameId: Number,
        gameResult: Object
    },
    data () {
        return {
            isShow: true
        }
    },
    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>

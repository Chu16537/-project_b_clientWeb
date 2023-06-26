<template>
    <div>
        <!-- 全選按鈕 -->
        <el-checkbox v-if="isShowAll" v-model="isSelectAll" @change="selectAllGames">{{$t('all')}}</el-checkbox>

        <el-checkbox-group v-model="selectedDatas" @change="change">
            <el-checkbox v-for="data in checkboxsDatas" :key="data.value" :label="data.key">{{ $t(data.value) }}</el-checkbox>
        </el-checkbox-group>
    </div>
  </template>

<script>

export default {
    props: {
        checkboxsDatas: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            selectedDatas: [],
            isSelectAll: false

        }
    },
    methods: {
        change (value) {
            // 判斷是否全選
            this.isSelectAll = value.length === this.checkboxsDatas.length
        },
        selectAllGames () {
            if (this.isSelectAll) {
                // 全選
                this.selectedDatas = this.checkboxsDatas.map(game => game.key)
            } else {
                // 全取消
                this.selectedDatas = []
            }
        }
    },
    computed: {
        isShowAll () {
            return this.checkboxsDatas.length > 1
        }
    }
}
</script>

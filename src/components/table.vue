<template>
<div class ="custom-table">

    <div class="title"> {{title}} </div>
    <br>

    <div v-if="isShowSelectedTags()" class="selectedTags-buttons">
        <button :class="getSelectedTagsButtonCss(tag)" v-for="tag in selectedTags" :key="tag" :value="tag" @click="changeSelectedTag(tag)">
        {{ tag }}
      </button>
    </div>

    <div class="table">
        <br>
  <el-table  v-loading="loading" :data="currentPageData" style="width: 100%" :cell-style="cellStyle">
    <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label">
      <template #default="{ row }">
        <!-- 使用插槽來客製化欄位元素 -->
        <slot :name="column.prop" :row="row">
          {{ row[column.prop] }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</div>
      <el-pagination v-if="isPagination"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          :total="currentPageData.length"
        ></el-pagination>

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        },
        selectedTags: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        cellStyle: {
            type: Function,
            default: () => {}
        },
        columns: {
            type: Array,
            default: () => []
        },
        isPagination: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            selectedTag: '',
            currentPage: 1,
            pageSize: 10
        }
    },
    computed: {
        currentPageData () {
            const startIndex = (this.currentPage - 1) * this.pageSize
            const endIndex = startIndex + this.pageSize
            const pageData = this.data.slice(startIndex, endIndex)

            if (!this.selectedTag) {
                return pageData
            }

            const resData = this.filterData(pageData)
            return resData
        }
    },
    methods: {
        handleCurrentChange (page) {
            this.currentPage = page
        },
        isShowSelectedTags () {
            return this.selectedTags.length > 0
        },
        getSelectedTagsButtonCss (tag) {
            return this.selectedTag === tag ? 'selectedTagsButtonChoose' : 'selectedTagsButtonNotChoose'
        },
        changeSelectedTag (tag) {
            if (this.selectedTag === tag) {
                this.selectedTag = ''
                return
            }

            this.selectedTag = tag
        },
        filterData (pageData) {
            const res = []

            for (let i = 0; i < pageData.length; i++) {
                if (pageData[i].filterKey === this.selectedTag) {
                    res.push(pageData[i])
                }
            }
            return res
        }
    }
}
</script>

<style scoped>
.custom-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin: 0 auto;
}
.title {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    color:#ffffff;
    border-bottom: 1px solid #ffffff; /* 设置文本元素的上边框 */
    font-size: 24px; /* 调整字体大小 */
    font-weight: bold; /* 设置字体粗细 */
}

.selectedTags-buttons {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

/* .selectedTags-buttons button {
  width: 100px;
  margin: 0 2px;
  background-color: #ffffff20;
  border: 1px solid #ffffff;
  color: #ffffff
} */

.selectedTagsButtonChoose{
    width: 100px;
  margin: 0 2px;
  background-color: #ffffff20;
  border: 1px solid #ffffff;
  color: #ffffff
}

.selectedTagsButtonNotChoose{
    width: 100px;
  margin: 0 2px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #000000
}

.table {
    width: 100%;
}

.table .el-table  {
    --el-table-bg-color: #0000007f; /* 背景 */
    --el-table-tr-bg-color: #ffffff26; /* 背景 */
    color: #ffffffff; /* 文字 */
    --el-table-border-color: #a6a6a6;  /* 線條 */
    --el-table-header-text-color: #ffffff; /* column 文字 */
    --el-table-header-bg-color: #ffffff26; /* column 背景 */
    --el-table-row-hover-bg-color: #ffffff26; /* column 滑鼠移動到rot 的顏色 */
}

</style>

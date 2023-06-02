<template>
  <div class="custom-component">
    <div v-for="(item, index) in items" :key="index" class="custom-component-item" :style="getItemStyle">
      <div class="item-row" v-for="(value, key) in item" :key="key">
        <span>{{ key }}:</span>
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CustomComponent',
    props: {
        items: {
            type: Array,
            required: true
        },
        borderColor: {
            type: String,
            default: '#000000'
        },
        fontColor: {
            type: String,
            default: '#000000'
        },
        itemsPerRow: {
            type: Number,
            default: 1
        }
    },
    computed: {
        componentStyle () {
            return {
                borderColor: this.borderColor,
                color: this.fontColor
            }
        },
        getItemStyle () {
            return {
                width: `${70 / this.itemsPerRow}%`
            }
        }
    }
}
</script>

<style scoped>
.custom-component {
  display: flex;
  flex-wrap: wrap;
}

.custom-component-item {
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 5px;
}

.item-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

</style>

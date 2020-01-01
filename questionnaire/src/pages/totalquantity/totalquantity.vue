<template>
  <div>
    <common-header>
        <common-back></common-back>
    </common-header>
    <common-sidecolumn></common-sidecolumn>
    <total-chart></total-chart>
  </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import CommonSidecolumn from '../common/sidecolumn.vue'
import CommonBack from '../common/back.vue'
import TotalChart from './component/chart'
export default {
    name:'TotalQuantity',
    components:{
      CommonHeader,
      CommonSidecolumn,
      CommonBack,
      TotalChart
    }
}
</script>

<style scoped>

</style>
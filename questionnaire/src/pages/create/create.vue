<template>
  <div>
      <common-header>
          <common-back></common-back>
      </common-header>
      <common-sidecolumn></common-sidecolumn>
  </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import CommonSidecolumn from '../common/sidecolumn.vue'
import CommonBack from '../common/back.vue'
export default {
    name:'Create',
    components:{
        CommonHeader,
        CommonSidecolumn,
        CommonBack
    },
}
</script>

<style>

</style>
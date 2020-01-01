<template>
  <div>
      <common-header>
          <common-back></common-back>
      </common-header>
      <common-sidecolumn></common-sidecolumn>
      <user-form></user-form>
  </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import CommonSidecolumn from '../common/sidecolumn.vue'
import CommonBack from '../common/back.vue'
import UserForm from './component/form'
export default {
    name:'User',
    components:{
      CommonHeader,
      CommonSidecolumn,
      CommonBack,
      UserForm
    }
}
</script>

<style scoped>

</style>
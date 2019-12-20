<template>
  <div>
      <common-header>
          <login></login>
      </common-header>
      <common-sidecolumn></common-sidecolumn>
      <home-list></home-list>
  </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import CommonSidecolumn from '../common/sidecolumn.vue'
import HomeList from './component/list'
import login from '../common/login.vue'

export default {
    name:'Home',
    components:{
        CommonHeader,
        CommonSidecolumn,
        HomeList,
        login
    },
   
}
</script>

<style scoped>

</style>
<template>
  <div>
      <home-header></home-header>
      <home-sidecolumn></home-sidecolumn>
  </div>
</template>

<script>
import HomeHeader from '../home/component/header.vue'
import HomeSidecolumn from '../home/component/sidecolumn.vue'
export default {
    name:'Create',
    components:{
        HomeHeader,
        HomeSidecolumn,
    },
}
</script>

<style>

</style>
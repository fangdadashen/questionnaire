<template>
  <div>
      <home-header></home-header>
      <home-sidecolumn @createnew='HandleCreatalist'></home-sidecolumn>
      <home-list :listshow='listshow'></home-list>
  </div>
</template>

<script>
import HomeHeader from './component/header'
import HomeSidecolumn from './component/sidecolumn'
import HomeList from './component/list'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSidecolumn,
        HomeList
    },
    data(){
        return{
            listshow:''
        }
    },
    methods:{
        HandleCreatalist(msg){
            this.listshow=msg;
        }
    }
}
</script>

<style scoped>

</style>
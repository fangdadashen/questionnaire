<template>
  <div class="home-list">
      <div class="list-wrapper" v-show="listshow2">
        <router-link :to="'/create/:'+this.$store.state.createid">
          <span class="iconfont list-icon">&#xe606;</span>
          <p class="icon-text">你还没有创建问卷</p>
        </router-link>
      </div>
      <home-myquestionnaire v-if="listshow" v-show="!listshow2" class="myquestionnaire"></home-myquestionnaire>
      <div class="list-wrapper" v-if="!listshow">
        <router-link :to="'/create/:'+this.$store.state.createid">
          <span class="iconfont list-icon">&#xe606;</span>
          <p class="icon-text">创建一个新问卷</p>
        </router-link>
      </div>
</div>
</template>

<script>
import HomeMyquestionnaire from './my-questionnaire'
export default {
    name:'HomeList',
    components:{
      HomeMyquestionnaire,
    },
    data(){
      return{
        toid:this.$store.state.createid,
        mylist:this.$store.state.listdata
      }
    },
    computed:{
      listshow(){
        return this.$store.state.SideChange
      },
      listshow2(){
        // if(this.mylist){
        //   return false;
       return this.mylist.length>0?false:true;
      }
    }
}
</script>

<style scoped>
.home-list{
    position: absolute;
    left:18%;
    bottom:0;
    top:60px;
    right:0;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    text-align: center;
}
.myquestionnaire{
    flex:1;
}
.list-wrapper{
    cursor: pointer;
    margin-top:20%;
}
.list-icon{
    font-size: 10em;
    color:#018fe5;
}
.icon-text{
    font-size: 2em;
    margin-top:.5em;
}
</style>
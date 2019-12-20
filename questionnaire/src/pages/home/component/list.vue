<template>
  <div class="home-list">
      <div class="list-wrapper" v-if="listshow">
        <router-link to='/create'>
          <span class="iconfont list-icon">&#xe606;</span>
          <p class="icon-text">你还没有创建问卷</p>
        </router-link>
      </div>
      <div class="list-wrapper" v-else>
        <router-link to='/create'>
          <span class="iconfont list-icon">&#xe604;</span>
          <p class="icon-text">创建一个新问卷</p>
        </router-link>
      </div>
     
  </div>
</template>

<script>
export default {
    name:'HomeList',
    computed:{
      listshow(){
        return this.$store.state.SideChange
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
    align-items: center;
    justify-content: center;
    text-align: center;
}
.list-wrapper{
    cursor: pointer;
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
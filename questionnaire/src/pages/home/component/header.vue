<template>
  <div class="home-header">
      <span class="header-logo header-lr">微型问卷管理平台</span>
      <span class="home-header-login header-lr" >登陆</span>
  </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style scoped>
.home-header{
    position: relative;
    overflow: hidden;
    height: 60px;
    width:100%;
    background: #165286;
    line-height: 60px;
}
.header-lr{
    color:#fff;
    font-size: 1.2em;
    position: absolute;
}
.home-header-login{
    right:1.5em;
}
.header-logo{
    padding-left:2em;
    left:2em;
    background: url('C:/Users/Administrator/Desktop/vue-wenjuan/questionnaire/src/assets/img/logo.png') no-repeat left;
    background-size:30px 30px; 
}
</style>
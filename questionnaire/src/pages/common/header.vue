<template>
  <div class="common-header">
      <span class="header-logo header-lr">微型问卷管理平台</span>
      <slot></slot>
  </div>
</template>

<script>

export default {
    name:'CommonHeader',
    
}
</script>

<style scoped>
.common-header{
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
.header-logo{
    padding-left:2em;
    left:2em;
    background: url('C:/Users/Administrator/Desktop/vue-wenjuan/questionnaire/src/assets/img/logo.png') no-repeat left;
    background-size:30px 30px; 
}
</style>
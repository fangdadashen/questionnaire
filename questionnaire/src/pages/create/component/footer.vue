<template>
  <div class="footer-wrapper">
      <div class="footer-date">
          <span>问卷截止日期:</span>
          <input type="date" class="footer-int">
      </div>
      <div class="f-button">
          <span class="footer-button">保存</span>
          <span class="footer-button">发布</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'CreateFooter'
}
</script>

<style scoped>
.footer-wrapper{
    padding:20xp 0;
    overflow: hidden;
}
.footer-date{
    margin:10px;
    display: inline-block;
    vertical-align: middle;
}
.footer-int{
    border:1px solid;
}
.footer-button{
    border:1px solid ;
    display: inline-block;
    width:70px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    margin:0 5px;
}
.footer-button:hover{
    background: #428bca;
    color: #fff;
    cursor: pointer;
}
.f-button{
    display: inline-block;
    vertical-align: middle;
    float:right;
    margin:10px;
}
</style>
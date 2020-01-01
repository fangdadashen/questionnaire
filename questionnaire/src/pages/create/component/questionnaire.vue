<template>
  <div class="q-wrapper">
      <div class="q-con">
        <question-title></question-title>
        <div>
          <create-add></create-add>
        </div>
        <create-footer></create-footer>
      </div>
  </div>
</template>

<script>
import QuestionTitle from './title'
import CreateAdd from './add'
import CreateFooter from './footer'
export default {
    name:'CreateQuestionnaire',
    components:{
      QuestionTitle,
      CreateAdd,
      CreateFooter
    }
}
</script>

<style>
.q-wrapper{
  position: absolute;
  top:60px;
  left:18%;
  right: 0;
  bottom:0;
  background: #f0f0f2;
  padding-top:3%;
  overflow:auto;
}
.q-con{
  margin:0 auto;
  box-sizing: border-box;
  width:90%;
  background:#fff;
  padding:0 10px;
  box-shadow: 0 0 8px 8px rgb(226, 225, 225);
}
</style>
<template>
  <div class="title-con">
      <input type="text" value="问卷题目" class="title-int">
  </div>
</template>

<script>
export default {
    name:'QuestionTitle'
}
</script>

<style scoped>
.title-con{
    text-align: center;
    padding:1em 0;
}
.title-int{
    text-align: center;
    margin:0 auto;
    width: 80%;
    padding: 5px 10px;
    font-size: 1.5em;
}
.title-int:focus{
    background: rgba(255, 68, 0, 0.158);
}
</style>
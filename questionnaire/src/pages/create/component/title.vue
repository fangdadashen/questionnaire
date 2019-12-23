<template>
  <div class="title-con">
      <input v-model="Qtitle" type="text" class="title-int">
  </div>
</template>

<script>
export default {
    name:'QuestionTitle',
    data(){
        return{
            Qtitle:'问卷题目'
        }
    },
    watch:{
        Qtitle:{
            handler(){
                localStorage.setItem('Qtitle',JSON.stringify(this.Qtitle))
            },
            //第一次初始化就监听
            immediate:true
        }
    },
    created(){
        this.Qtitle=JSON.parse(localStorage.getItem('Qtitle'));
    }
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
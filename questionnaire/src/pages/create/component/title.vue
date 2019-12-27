<template>
  <div class="title-con">
      <input v-model="Qtitle" placeholder="问卷题目" type="text" class="title-int">
  </div>
</template>

<script>
export default {
    name:'QuestionTitle',
    data(){
        return{
            Qtitle:''
        }
    },
    watch:{
        Qtitle:{
            handler(){
                let Qtitle='Qtitle'+this.$route.params.id;
                localStorage.setItem(Qtitle,JSON.stringify(this.Qtitle))
            },
            //第一次初始化就监听
            // immediate:true
        }
    },
    mounted(){
        let id='Qtitle'+this.$route.params.id;
        this.Qtitle=JSON.parse(localStorage.getItem(id));
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
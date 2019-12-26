<template>
  <div class="footer-wrapper">
      <div class="footer-date">
          <span>问卷截止日期:</span>
          <input type="date" class="footer-int" v-model="Qdate">
      </div>
      <div class="f-button">
          <span 
            class="footer-button" 
            @click.prevent="Save"
            :style="styleobject1"
          >
            保存</span>
          <span 
            class="footer-button" 
             @click.prevent="Public"
            :style="styleobject2"
          >发布</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'CreateFooter',
    data(){
        return{
            Qmessage:{//传到首页列表的数据
                id:1,
                title:'问卷题目',
                date:'',
                status:'未发布'
            },
            Qid:1,
            Qdate:'',
            Qstatus:'未发布',
            styleobject1:{},
            styleobject2:{}
        }
    },
    methods:{
        Save(e){//保存
          if(!e.target.style.background=='#346da0'){
              window.console.log(e)
              let id='Qtitle'+this.$route.params.id;
            this.Qmessage={
                id:this.Qid++,
                title:JSON.parse(localStorage.getItem(id)),
                date:this.Qdate,
                status:this.Qstatus
            };
            this.$store.commit('HomeBaseData',this.Qmessage);
            this.styleobject1={
                color:'#fff',
                background:'#346da0'
            }
            let Sstyle='Sstyle'+this.$route.params.id;
            localStorage.setItem(Sstyle,JSON.stringify(this.styleobject1))
            this.$router.push('/');
          }else{
            //   window.console.log(e);
            //   this.$router.push('/');
               return false;
          }
        },
        Public(){//发布
               let id='Qtitle'+this.$route.params.id;
            this.Qstatus='已发布'
            this.Qmessage={
                title:JSON.parse(localStorage.getItem(id)),
                date:this.Qdate,
                status:this.Qstatus
            };
            this.$store.commit('HomeBaseData',this.Qmessage);
            this.styleobject2={
                color:'#fff',
                background:'#346da0'
            }
            let Pstyle='Pstyle'+this.$route.params.id;
            localStorage.setItem(Pstyle,JSON.stringify(this.styleobject2))
        }
    },
    mounted(){
        let id1='Sstyle'+this.$route.params.id;
        let id2='Pstyle'+this.$route.params.id;
        this.styleobject1=JSON.parse(localStorage.getItem(id1))||{};
        this.styleobject2=JSON.parse(localStorage.getItem(id2))||{};
    }
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
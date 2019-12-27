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
          >
            保存</span>
          <span 
            class="footer-button" 
            @click.prevent="Public"
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
                // id:1,
                // title:JSON.parse(localStorage.getItem('Qtitle'+this.$route.params.id)),
                // date:this.Qdate,
                // status:this.Qstatus
            },
            Qid:1,
            Qdate:'',
            Qstatus:'未发布',
            saveorno:false//保存与否
        }
    },
    methods:{
        Save(){//保存
        //   if(!this.styleobject1.background){
            this.saveorno=true;
            this.Qmessage={
                id:this.Qid++,
                title:JSON.parse(localStorage.getItem('Qtitle'+this.$route.params.id)),
                date:this.Qdate,
                status:this.Qstatus
            };
            window.console.log('save?',this.saveorno);
            let obj={};//vuex只能传一个参数，因此打包成对象传过去
            obj.id=this.$route.params.id.split('').slice(1,2).join('')-1;
            obj.data=this.Qmessage;
            this.$store.commit('HomeBaseData',obj);
            this.$router.push('/');
        //   }else{
        //     this.$router.push('/');
        //     return false;
        //   }
        },
        Public(){//发布
            this.Qstatus='已发布'
            alert('已发布')
        }
    },
    created(){
        let id=this.$route.params.id.split('').slice(1,2).join('')-1;
        let obj=this.$store.state.listdata[id];
        this.Qdate=obj.date;
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
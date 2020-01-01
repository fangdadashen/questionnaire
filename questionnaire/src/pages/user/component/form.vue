<template>
  <div class="form-wrapper">
    <div class="form-con">
      <div class="form-title">
        <p class="form-title-info">{{title}}</p>
      </div>
      <div class="form-question-wrapper">
       <div class="form-question" v-for="item of userlist" :key="item.id">
        <div class="info-title">
              QT:
              <span>{{item.title}}</span>
        </div>
        <div class="form-options">
          <div v-for="list of item.changelist" :key="list.inid">
            <label for='list.inid' v-if="item.type==1">
                <input 
                    type="radio" 
                    :name="item.id" 
                    id='list.inid' 
                    :value="list.value"
                    @click="HandleClick"
                >
                <p class="option-text">{{list.value}}</p>
            </label>
            <label for='list.inid' v-else-if="item.type==2">
              <input 
                    type="checkbox" 
                    :name="item.id" 
                    id='list.inid' 
                    :value="list.value"
                    @click="HandleClick"
                >
                <p class="option-text">{{list.value}}</p>
            </label>
            <div v-else-if="item.type==3">
                <textarea 
                  class="textarea" 
                  v-model="list.textareavalue"
                >
                </textarea>
                <p ref="prompt" style="color:red" v-show="list.textprompt">{{list.necessary}}</p>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div class="submit-wrapper">
        <div class="submit" @click='submit'>提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'UserForm',
    data(){
      return{
        title:'',
        userlist:[//同步数据格式参考，本页缓存数据
          // {
          //   id:'1',
          //   title:'题目1',
          //   type:'1',
          //   changelist:[
          //     {inid:'1',value:'选1',check:false},
          //     {inid:'2',value:'选项2',check:false}
          //   ],
          // },
          // {
          //   id:'2',
          //   title:'题目2',
          //   type:'2',
          //   changelist:[
          //     {inid:'1',value:'选项1',check:false},
          //     {inid:'2',value:'选项2',check:false}
          //   ],
          // },
          // {
          //   id:'3',
          //   title:'题目3',
          //   type:'3',
          //   changelist:[
          //       {textareavalue:'',necessary:[],textprompt:false},
          //   ],
          // }
        ],
        textarea:'',
        save:false,
      }
    },
    methods:{
      HandleClick(e){
        window.console.log(e.target.value)
      },
      submit(){//提交
        this.userlist.forEach(val=>{//必填文本题判断以及是否填写
          val.changelist.forEach(val=>{
            if(val.necessary&&!val.textareavalue){
              val.necessary='这里还没有填哦',
              val.textprompt=true;
            }else if(val.necessary&&val.textareavalue){
              val.textprompt=false;
            }
          })
        })
        setTimeout(()=>{//不知什么原因save总是慢textprompt半拍，因此套个setTimeout
          this.save=this.$refs.prompt.every(val=>{//文本题是否全部合规
          return val.style.display=='none'
        })
          // window.console.log('save',this.save,'textprompt',this.textprompt);
          if(this.save===true){//提交数据
            let userlist='userlist'+this.$route.params.id;
            localStorage.setItem(userlist,JSON.stringify(this.userlist));
            let usertitle='usertitle'+this.$route.params.id;
            localStorage.setItem(usertitle,JSON.stringify(this.title))
          }
        },10)
      }
    },
    mounted(){//同步数据
      let idtitle='Qtitle'+this.$route.params.id;
      this.title=this.Qtitle=JSON.parse(localStorage.getItem(idtitle));
      let idlist='single'+this.$route.params.id;
      this.userlist=JSON.parse(localStorage.getItem(idlist))||[];
    },
}
</script>

<style scoped>
.form-wrapper{
  position: absolute;
  top:60px;
  left:18%;
  right: 0;
  bottom:0;
  background: #f0f0f2;
  padding-top:3%;
  overflow:auto;
}
.form-con{
  margin:0 auto;
  box-sizing: border-box;
  width:90%;
  background:#fff;
  padding:10px;
  box-shadow: 0 0 8px 8px rgb(226, 225, 225);
}
.form-title{
  text-align: center;
  padding:1em 0;
  margin-bottom: 2px;
}
.form-title-info{
  text-align: center;
  margin:0 auto;
  width: 80%;
  padding: 5px 10px;
  font-size: 1.5em;
}
.form-question-wrapper{
  box-sizing: border-box;
  padding:10px 0;
  border-top:1px solid #e1e1e1;
  border-bottom:1px solid #e1e1e1;
}
.form-question:hover{
  box-shadow: 1px 1px 2px 2px #eee;
}
.info-title{
  font-size: 1.2em;
  margin-bottom:5px;
  line-height: 30px;
  overflow: hidden;
}
.info-title>span{
  display: inline-block;
  padding:3px 5px;
}
.form-question .form-options{
  display: inline-block;
  width:85%;
  padding-left:2em;
}
.form-options .option-text{
  display: inline-block;
  box-sizing: border-box;
  padding:0 3px;
  margin-bottom:3px;
  height: 30px;
}
.textarea{
  border: 1px solid ;
  width:90%;
  height: 100px;
  border-radius: 3px;
}
.submit-wrapper{
  padding-top:10px;
  overflow: hidden;
}
.submit-wrapper .submit{
  border:1px solid ;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  margin:0 auto;
}
.submit:hover{
  background: #428bca;
  color: #fff;
  cursor: pointer;
}
</style>
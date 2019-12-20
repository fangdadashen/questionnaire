<template>
  <div class='add-con'>
      <div class="select-wrapper">
          <div class="add-explain">
           
            添加问题:
          </div>
          <div
            class="select-button" 
            v-for="item of addlist" 
            :key="item.id"
          >
              <span class="iconfont">{{item.icon}}</span>
              {{item.content}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'CreateAdd',
    data(){
        return{
            addlist:[
                {id:'001',content:'单选题',icon:'\ue607'},
                {id:'002',content:'多选题',icon:'\ue608'},
                {id:'003',content:'文本题',icon:'\ue679'}
            ],
        }
    },
}
</script>

<style scoped>
.add-con{
    box-sizing: border-box;
    padding:10px 0;
    border-top:1px solid #e1e1e1;
    border-bottom:1px solid #e1e1e1;
    
}
.add-explain{
    height: 20px;
    line-height: 20px;
    font-size: 1.2em;
    margin-right:2em;
}
.add-explain>span{
    vertical-align: middle;
    font-size: 1.2em;
}
.select-wrapper{
    background: #fff;
    text-align:center;
    display: flex;
    justify-content: center;
    padding:10px 0;
    border:1px solid rgba(109, 107, 107, 0.664);
}
.select-wrapper:hover{
    background: #e1e1e1;
}
.select-button{
    border:1px solid black;
    border-radius: 5px;
    width: 8%;
    height: 20px;
    line-height: 20px;
    margin-right:5px;
}
.select-button:hover{
    background:#31383e;
    color: #fff;
    cursor: pointer;
}

</style>
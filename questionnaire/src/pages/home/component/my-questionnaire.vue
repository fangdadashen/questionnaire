<template>
  <div class="my-contain">
      <table class="my-table">
          <tr class="my-tr">
              <td></td>
              <td>问卷名</td>
              <td>结束时间</td>
              <td>状态</td>
              <td>操作</td>
          </tr>
           <tr class="my-tr" v-for="item of mylist" :key="item.id">
              <td class="my-choose"><input type="checkbox"></td>
              <td class="my-name">{{item.title}}</td>
              <td class="my-date">{{item.date}}</td>
              <td class="my-publish">{{item.status}}</td>
              <td class="my-handle">
                  <span class="iconfont">&#xe8d0;</span>
                  <router-link tag='span' :to="'/create/:'+item.id" class="my-data">编辑</router-link>
                  <span class="my-data">查看数据</span>
              </td>
          </tr>
          <tr class="my-tr">
              <td class="my-footer">
                <span>全选</span>
                <span>删除</span>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name:'HomeMyquestionnaire',
    data(){
        return{
            // mylist:[
            //     {
            //         id:1,
            //         title:'问卷题目',
            //         date:'2019-12-25',
            //         status:'已发布'
            //     },
            // ],
            mylist:this.$store.state.listdata
        }
    },
    watch:{
        mylist:{
            handler(){//为新建问卷功能传值 
                this.$store.commit('ChangeCreateId',this.mylist.length)
            },
            immediate:true
        }
    },
    mounted(){
        window.console.log(this.list)
    }
}
</script>

<style scoped>
.my-contain{
    overflow: auto;
}
.my-table{
    width: 90%;
    /* background: teal; */
    text-align: center;
    margin-left:5%;
}
.my-table tr:last-child{
    border-bottom: none;
}
.my-tr{
    border-bottom: 1px solid #a9afb2;
}
.my-tr td{
    height: 50px;
}
.my-choose{
    width:15%;
}
.my-name{
    color:#018fe5;
}
.my-date{
    color: #99ba35;
}
.my-publish{
    color: #99ba35;
}
.my-handle{
    color:#018fe5;
}
.my-handle>span{
    cursor: pointer;
    padding:5px 10px;
    margin: 5px;
}
.my-handle>span:first-child:hover{
    color: #018ee5ab;
}
.my-data{
    border: 1px solid #018fe5;
    border-radius: 5px;
}
.my-data:hover{
    background: #018ee5ab;
    color: #fff;
}
.my-footer>span{
    cursor: pointer;
    padding:5px 10px;
    margin: 5px;
    border: 1px solid #018fe5;
    border-radius: 5px;
    color:#018fe5;
}
.my-footer>span:hover{
    background: #018ee5ab;
    color: #fff;
}
</style>;
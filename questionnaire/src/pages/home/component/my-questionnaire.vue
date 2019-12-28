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
          <template v-for="(item,index) of mylist" >
            <tr 
             class="my-tr" 
             :key="index"
             v-if="mylist[item.id]"
            >
              <td class="my-choose"><input type="checkbox" ></td>
              <td class="my-name">{{item.title}}</td>
              <td class="my-date" ref="date">{{item.date}}</td>
              <td class="my-publish" ref="status">{{item.status}}</td>
              <td class="my-handle">
                  <span class="iconfont" @click="HandleRemoveList(index)">&#xe8d0;</span>
                  <router-link tag='span' :to="'/create/:'+(item.id+1)" class="my-data">编辑</router-link>
                  <span class="my-data" ref="lookdata">查看数据</span>
              </td>
            </tr>
          </template>
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
            mylist:this.$store.state.listdata,
            // checklist:[]
        }
    },
    methods:{
        HandleRemoveList(index){
            this.mylist.splice(index,1);
            this.mylist.splice(index,0,false)
            this.$store.commit('HomeListChange',this.mylist)
            localStorage.removeItem(['single:'+(index+1)])
            localStorage.removeItem(['Qtitle:'+(index+1)])
        }
    },
    watch:{
        mylist:{
            handler(){
                this.mylist.forEach(val=>{//如果数组全部为false,则数组清空
                    if(val==false){
                        this.$store.commit('HomeListChange',[])
                    }
                })
                //为新建问卷功能传值
                this.$store.commit('ChangeCreateId',this.mylist.length)
            },
            immediate:true,
        }
    },
    mounted(){
        if(this.$refs.date){
            this.$refs.date.forEach((val,index)=>{//判断是否设置日期 
                if(val.innerText.indexOf('没有')>-1){
                    this.$refs.date[index].style.color='#f15b29';
                }
            })
        }
        if(this.$refs.status){
             this.$refs.status.forEach((val,index)=>{//判断是否发布
                if(val.innerText.indexOf('未')>-1){
                    this.$refs.status[index].style.color='#b4b4b6';
                }
            })
        }
        window.console.log(this.checklist)
    }
}
</script>

<style scoped>
.my-contain{
    overflow: auto;
}
.my-table{
    width: 90%;
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
    max-width:100px;
    color:#018fe5;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
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
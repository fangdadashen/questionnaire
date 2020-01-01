<template>
  <div class="chart-wrapper">
      <div class="chart-con" >
        <div class="chart-title">
          <p class="chart-title-info">{{title}}</p>
        </div>
        <div class="chart-content-wrapper">
          <div 
              v-for="(item,index) of chartdata" 
              :key="index" class="chartcon">
            <div class="chart" >
              <p v-show="item.type==3">{{item.id}}.{{item.title}}</p>
            </div>
          </div>
        </div>
        <div class="clear-wrapper">
            <div class="clear">以上仅做展示</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'TotalChart',
    data(){
        return{
            title:'',
            chartdata:[{
                id:'1',
                title:'你给楼主打多少分(单选)',
                type:'1',
                changelist:[
                    {value:3, name:'100'},
                    {value:4, name:'1000'},
                    {value:7, name:'10000'},
                    {value:10, name:'无穷大'},
                ],
            },{
                id:'2',
                title:'你觉得有人能比楼主帅吗(多选)',
                type:'2',
                name: ["你在开玩笑吗", "绝对不可能", "这还用问？"],
                number:[10, 5, 7]
            },{
                id:'3',
                title:'请用600字表达你对楼主的敬仰之情(文本题)',
                type:'3',
                value:['楼主好帅','楼主太帅了','楼主666']
            }],
        }
    },
    methods:{
        drawChart(index,data){
            if(data.type==1){
              let option={
                title:{
                    text:data.id+'.'+data.title
                },
                series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:data.changelist
                }
              ]
            }
            //这里利用了class获取dom的特性
            let myChart=this.$echarts.init(document.getElementsByClassName('chart')[index]);
            myChart.setOption(option);
          }else if(data.type==2){
            let option={
                title:{
                    text:data.id+'.'+data.title
                },
                tooltip:{},
                xAxis:{
                    data:data.name
                },
                yAxis:{},
                series:[
                     {
                        type: "bar",
                        data:data.number
                     }
                 ]
            };
            //这里利用了class获取dom的特性
            let myChart=this.$echarts.init(document.getElementsByClassName('chart')[index]);
            myChart.setOption(option);
          }else if(data.type==3){
            let myChart=document.getElementsByClassName('chart')[index];
            data.value.forEach((val,index)=>{
              let text=`<div class='text'>回答${index+1}:${val}</div>`
              myChart.innerHTML += text;
            })
          }
        },
    },
    mounted(){//同步数据
      let usertitle='usertitle'+this.$route.params.id;
      this.title=JSON.parse(localStorage.getItem(usertitle));
      setTimeout(()=>{
        this.chartdata.forEach((val,index)=>{//echart和v-for结合,似乎只有满足了第一个dom后面的才会出现
          this.drawChart(index,val)
        })
      })
    }
}
</script>

<style scoped>
.chart>>>.text{
  border:1px solid #eee;
  padding:5px;
  border-radius: 3px;
  margin-bottom:3px;
}
.chart-wrapper{
  position: absolute;
  top:60px;
  left:18%;
  right: 0;
  bottom:0;
  background: #f0f0f2;
  padding-top:3%;
  overflow:auto;
}
.chart-con{
  margin:0 auto;
  box-sizing: border-box;
  width:90%;
  background:#fff;
  padding:10px;
  box-shadow: 0 0 8px 8px rgb(226, 225, 225);
}
.chart-title{
  text-align: center;
  padding:1em 0;
  margin-bottom: 2px;
}
.chart-title .chart-title-info{
  text-align: center;
  margin:0 auto;
  width: 80%;
  padding: 5px 10px;
  font-size: 1.5em;
}
.chart-content-wrapper{
  box-sizing: border-box;
  padding:10px 0;
  border-top:1px solid #e1e1e1;
  border-bottom:1px solid #e1e1e1;
}
.chart{
  height: 200px;
  width: 100%;
  overflow: auto;
  margin:0 auto;
}
.chart>p{
  font-size: 1.3em;
  margin-bottom:5px;
  line-height: 30px;
  font-weight:700;
  overflow: hidden;
}
.chart:hover{
  box-shadow: 1px 1px 2px 2px #eee;
}
.clear-wrapper{
  padding-top:10px;
  overflow: hidden;
}
.clear-wrapper .clear{
  border:1px solid ;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  margin:0 auto;
}
.clear:hover{
  background: #428bca;
  color: #fff;
  cursor: pointer;
}
</style>
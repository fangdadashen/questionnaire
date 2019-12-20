<template>
  <div class="common-side">
      <div class="side-one" @click='HandleClickSideChanage'>
          <p>
              <span class="iconfont side-icon">&#xe606;</span>
              我的问卷
          </p>
      </div>
      <div class="side-one" @click='HandleClickSideChanage2'>
          <p>
              <span class="iconfont side-icon">&#xe631;</span>
              新建问卷
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name:'CommonSidecolumn',
    methods:{
        HandleClickSideChanage(){//点击'我的问卷'的图标显现
            this.$store.commit('ChangeSide',true)
        },
        HandleClickSideChanage2(){//点击'新建问卷'的图标显现
            this.$store.commit('ChangeSide',false)
        }
    }
}
</script>

<style scoped>
.common-side{
    /* min-width: 120px; */
    width:18%;
    position: absolute;
    top:60px;
    bottom: 0;
    left: 0;
    background: #31383ec4;
    color: #fff;
}
.side-one{
    box-sizing: border-box;
    font-size: 1em;
    width:100%;
    text-align: center;
    padding:1em;
    cursor: pointer;
    padding-right: 1em;
}
.side-one:hover{
    border-left:4px solid #018fe5;
    color:#018fe5;
}
.side-icon{
    font-size: 2em;
    vertical-align: middle;
}
</style>
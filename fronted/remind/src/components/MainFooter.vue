<template>
  <div class="footer">
    <el-tabs tab-position="bottom" @tab-click="selectMenu" stretch="true">
      <el-tab-pane v-for="(perItem,id) in tabList" :key="id" :label="perItem.tabName" style="width: 100vh" >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return{
      tabList : [{
        id : '1',
        tabName :'首页',
      },{
        id :'2',
        tabName: '提醒'
      },{
        id : '3',
        tabName: '我的'
      }],

    }
  },
  components:{

  },
  mounted() {
  },
  computed(){
  },
  created() {
  },
  methods:{
    selectMenu (tab) {
      if(tab.index === '1'){
        console.log()
      }else if (tab.index === '2'){
        console.log()
      }else {
        console.log()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width: 100%;
  bottom: 0;
  margin: auto;
  /*position: absolute;*/
  text-align: center;
}

>>> .el-tabs__nav .el-tabs__item {


}
</style>

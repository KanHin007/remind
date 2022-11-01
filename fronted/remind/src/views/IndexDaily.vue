<template>
  <div>
    <div class="block">
      <span class="demonstration">新闻</span>
      <el-carousel height="150px" type="card">
        <el-carousel-item v-for="item in newsList" :key="item">
          <span class="spanTitle">{{ item.title }}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-link type="primary" class="link">换一批</el-link>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "IndexDaily",
  data() {
    return{
      newsList : [{
        id: '1',
        img: 'xxxxx',
        title: 'yyyyyyy'
      },{
        id: '1',
        img: 'xxxxx',
        title: 'yyyyyyy'
      },{
        id: '1',
        img: 'xxxxx',
        title: 'yyyyyyy'
      },{
        id: '1',
        img: 'xxxxx',
        title: 'yyyyyyy'
      }]

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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.spanTitle{
  text-align: center;
  display:block;
}

.link{
  position: absolute;
  right: 50px;
}
</style>

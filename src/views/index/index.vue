<template>
  <div>
    <el-container>
      <el-aside width="530px"> <Aside></Aside></el-aside>
    </el-container>

    <el-container>
      <el-main>
        <Main></Main>
        <AsideRight></AsideRight>
        <!-- <div id="feature"> -->
        <!-- <img class="featureImg" v-for="(item, index) in res" :src="item" :key="index" /> -->
        <!-- </div> -->
      </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>
<script>
import Main from 'components/content/main';
import Aside from 'components/content/aside';
import AsideRight from 'components/content/asideRight';
import Footer from 'components/content/footer';

export default {
  name: 'Index',
  components: {
    Main,
    Aside,
    AsideRight,
    Footer,
  },
  data() {
    return {
      // res: [vis0, vis1, vis2, vis3, vis4, vis5, vis6, vis7, vis8, vis9],
      // vis0: vis0,
    };
  },
  created() {},
};
</script>
<style scoped>
#feature {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  margin-top: 35%;
  margin-left: 5%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 90vh;
}
.el-aside {
  position: absolute;
  /* background-color: red; */
  color: #333;
  text-align: center;
  height: 90vh;
  /* line-height: 200px; */
}
</style>

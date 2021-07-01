<template>
  <div class="nav">
    <el-container>
      <el-header>
        advGAN Visualization
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '/index',
    };
  },
  // watch: {
  //   $route(to, from) {
  //     this.init();
  //   },
  // },
  // methods: {
  //   handleSelect(key, keyPath) {
  //     this.$router.push(key);
  //   },
  //   init() {
  //     this.activeIndex = this.$route.path;
  //   },
  // },
};
</script>
<style scoped>
.el-header {
  background-color: #183d4e;
  color: #f5f5f5;
  font-size: 26px;
  padding: 10px 5px 5px;
  text-align: center;
}
</style>

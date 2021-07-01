<template>
  <div>
    <el-container class="main">
      <el-main> </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'MainPart',
  data() {
    return {
      res: null,
    };
  },
  created() {
    // this.res = request();
    // console.log(this.res);
  },
  methods: {},
};
</script>
<style scoped>
/* .el-footer {
  background-color: rgba(191, 201, 237, 0.1);
  color: #5e81f4;
} */
.el-aside {
  background-color: rgba(191, 201, 237, 0.1);
  color: #5e81f4;
  text-align: center;
  min-height: 300px;
}

.el-main {
  background-color: rgba(191, 201, 237, 0.1);
  color: #5e81f4;
  text-align: center;
  min-height: 300px;
}
.main {
  height: 92vh;
  /* border: 1px solid black; */
}
el-container {
  color: #5e81f4;
}
</style>

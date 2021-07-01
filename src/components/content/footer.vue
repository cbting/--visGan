<template>
  <div id="footer">
    <div id="btns">
      <el-row>
        <el-button type="primary" size="small" plain @click="showFeature(1)">bound=0.1</el-button>
        <el-button type="success" size="small" plain @click="showFeature(2)">bound=0.2</el-button>
        <el-button type="info" size="small" plain @click="showFeature(3)">bound=0.3</el-button>
        <el-button type="warning" size="small" plain @click="showFeature(5)">bound=0.5</el-button>
      </el-row>
    </div>
    <img class="featureImg" v-for="(item, index) in res" :src="item" :key="index" />
    <div id="imgs">
      <el-dialog :visible.sync="dialogVisible" width="90vw">
        <img id="bound" :src="boundImg" alt="" />
      </el-dialog>
    </div>
  </div>
</template>
<script>
import vis0 from 'assets/image/vis0.png';
import vis1 from 'assets/image/vis1.png';
import vis2 from 'assets/image/vis2.png';
import vis3 from 'assets/image/vis3.png';
import vis4 from 'assets/image/vis4.png';
import vis5 from 'assets/image/vis5.png';
import vis6 from 'assets/image/vis6.png';
import vis7 from 'assets/image/vis7.png';
import vis8 from 'assets/image/vis8.png';
import vis9 from 'assets/image/vis9.png';
import b01 from 'assets/image/0.1.png';
import b02 from 'assets/image/0.2.png';
import b03 from 'assets/image/0.3.png';
import b05 from 'assets/image/0.5.png';

export default {
  name: 'Footer',
  data() {
    return {
      res: [vis0, vis1, vis2, vis3, vis4, vis5, vis6, vis7, vis8, vis9],
      // vis0: vis0,
      dialogVisible: false,
      boundImg: b01,
    };
  },
  methods: {
    showFeature(index) {
      this.dialogVisible = true;

      switch (index) {
        case 1:
          this.boundImg = b01;
          break;
        case 2:
          this.boundImg = b02;
          break;
        case 3:
          this.boundImg = b03;
          break;
        case 5:
          this.boundImg = b05;
          break;
      }
    },
  },
};
</script>
<style scoped>
#footer {
  width: 45vw;
  height: 35vh;
  /* background-color: red; */
  position: absolute;
  left: 27%;
  top: 57%;
  margin-left: 40px;
}
.featureImg {
  width: 120px;
  height: 120px;
  padding-right: 1px;
}
#btns {
  /* border: 1px solid black; */
  padding-left: 100px;
  padding-bottom: 5px;
}
#bound {
  width: 50%;
  height: 50%;
  position: relative;
  left: 20%;
}
#el_dialog {
  color: red;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

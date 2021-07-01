<template>
  <div id="container"></div>
</template>
<script>
import result from 'assets/data/result0.json';
import { drawScatter } from 'assets/js/draw.js';

export default {
  name: 'AsideRight',
  data() {
    return {
      result: result,
    };
  },
  mounted() {
    drawScatter(result);
    console.log(result);
    result.forEach(item => {});
  },
};
</script>
<style scoped>
#container {
  position: absolute;
  /* background-color: red; */
  width: 60%;
  height: 100%;
  left: 55%;
  /* margin-left:60%; */
}
</style>

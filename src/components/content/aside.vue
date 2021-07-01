<template>
  <div id="left">
    <div id="visualization-container" class="panel-item">
      <div
        class="panel-title"
        title="Visualizes components in the model overview graph as 
  multiple layers. The layers can be turned on or off using checkboxes."
      >
        Result Visualization
      </div>

      <div id="vis-content-container" style="height:580px ;width:380px"></div>
    </div>
  </div>
</template>
<script>
import result from 'assets/data/result0.json';
import { drawParallel2 } from 'assets/js/draw.js';

export default {
  name: 'Aside',
  data() {
    return {
      result: result,
    };
  },
  created() {},
  mounted() {
    drawParallel2(result);
    // example();
    // let left = document.getElementById('left');
    // console.log(left);
  },
};
</script>
<style scoped>
/* #left {
  border: 1px solid black;
  background: green;
  width: 200px;
  height: 300px;
} */
#vis-content-container {
  top: 1%;
  left: -8%;
}
/* #vis-content-container div canvas {
  top: -500px;
} */
</style>

<template>
  <div>
    <div id="main-panel-container" class="panel-container">
      <div id="model-vis-content-container">
        <svg id="model-vis-svg" class="">
          <path d="M66,260 L132,260" id="arrow-g-forward-i" class="d-update-flow g-update-flow" />
          <path d="M248,260 L340,260" id="arrow-g-forward-o" class="d-update-flow g-update-flow" />

          <path d="M518,166 L554,166" id="arrow-t-d-forward-o" class="d-update-flow" />
          <path
            d="M336,260 L372,260"
            id="arrow-g-d-forward-i"
            class="d-update-flow g-update-flow"
          />
          <path
            d="M518,260 L554,260"
            id="arrow-g-d-forward-o"
            class="d-update-flow g-update-flow"
          />

          <path
            d="M605,166 C625,166 615,213 640,213"
            id="arrow-t-prediction-d-loss"
            class="d-update-flow"
          />
          <path
            d="M605,260 C625,260 615,213 640,213"
            id="arrow-g-prediction-d-loss"
            class="d-update-flow"
          />
          <path
            d="M640,213 L650,213 a10,10 0 0 0 10,-10
                L660,65 a10,10 0 0 0 -10,-10
                L445,55 a10,10 0 0 0 -10,10 L435,141"
            id="arrow-d-loss-d"
            class="d-update-flow"
          />

          <path
            d="M605,260 L650,260 a10,10 0 0 1 10,10
                L660,345 a10,10 0 0 1 -10,10 L336,355"
            id="arrow-g-loss-g-1"
            class="g-update-flow"
          />
          <path
            d="M335,355 L185,355 a10,10 0 0 1 -10,-10 L175,303"
            id="arrow-g-loss-g-2"
            class="g-update-flow"
          />
        </svg>

        <div id="model-vis-div">
          <div id="component-d-loss" class="model-component" style="top: 140px; left: 667px">
            <div id="d-loss-bar" class="loss-bar" title=""></div>
            <div class="component-loss-label">Discriminator<br />loss</div>
            <div class="component-tooltip">
              <span id="d-loss-value" title="loss"></span>
            </div>
          </div>

          <div id="component-g-loss" class="model-component" style="top: 275px; left: 667px">
            <div id="g-loss-bar" class="loss-bar" title=""></div>
            <div class="component-loss-label">Generator<br />loss</div>
            <div class="component-tooltip">
              <span id="g-loss-value" title="loss"></span>
            </div>
          </div>

          <div
            id="component-true-prediction"
            class="model-component"
            style="top: 136px; left: 525px"
          >
            <div class="component-sub-label">Real</div>
            <img :src="real" alt="" width="50px" />
          </div>

          <div
            id="component-generated-prediction"
            class="model-component"
            style="top: 230px; left: 525px"
          >
            <div class="component-sub-label">Fake</div>
            <img :src="adv_sample" alt="" width="50px" />
            <div class="component-label">Prediction of<br />Samples</div>
          </div>

          <div
            id="component-discriminator"
            class="model-component model-component-model"
            style="top: 136px; left: 362px"
          >
            <img id="svg-discriminator-output" :src="cnn" width="150px" height="130px" alt="" />
            <div class="component-label">
              Discriminator
              <div id="overlap-toggle" class="checkbox-toggle"></div>
            </div>
          </div>

          <div
            id="component-generator"
            class="model-component model-component-model"
            style="top: 56px; left: 122px"
          >
            <img :src="resnet" alt="" width="130px" height="250px" />
            <div class="component-label">Generator</div>
          </div>

          <div id="component-noise" class="model-component" style="top: 230px; left: -5px">
            <img :src="noise" alt="" width="50px" />
            <div class="component-label">Noise</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import real from 'assets/image/real.png';
import adv_sample from 'assets/image/adv_sample.jpg';
import cnn from 'assets/image/cnn.jpg';
import resnet from 'assets/image/resnet.jpg';
import noise from 'assets/image/noise.jpg';

export default {
  name: 'Main',
  data() {
    return {
      real: real,
      adv_sample: adv_sample,
      cnn: cnn,
      resnet: resnet,
      noise: noise,
    };
  },
};
</script>
<style scoped>
#model-vis-div {
  /* background-color: rgb(210, 255, 210); */
  width: 700px;
  height: 400px;
}
</style>

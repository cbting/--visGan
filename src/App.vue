<template>
  <div id="app">
    <Header></Header>

    <!-- <Main></Main>
    <Aside></Aside> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Header from './components/content/header';
// import Main from './components/content/main';
// import Aside from './components/content/aside';

export default {
  name: 'app',
  components: {
    Header,
    // Main,
    // Aside,
  },
};
</script>

<style scoped>
@import 'assets/css/base.css';

/* @import 'assets/css/vis-timeline-graph2d.css'; */
</style>

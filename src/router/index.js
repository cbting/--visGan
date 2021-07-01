import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// const SingleSearch = () => import('../views/singleSearch/singleSearch.vue');
// const MultiSearch = () => import('../views/multiSearch/multiSearch.vue');
const index = () => import('../views/index/index.vue');

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: index,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

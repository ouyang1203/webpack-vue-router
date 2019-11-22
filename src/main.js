import Vue from 'vue';
import VueRouter from 'vue-router';
//导入app组件
import App from './App.vue';
//导入自定义路由模块
import router from './router.js';

Vue.use(VueRouter);

var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router:router
});
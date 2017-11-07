import Vue from 'vue'
import app from './app.vue'
import router from './router'
import VueScroller from 'vue-scroller'
import {Swipe,SwipeItem} from 'mint-ui'

//文件生效
import './common/stylus/index.styl'
import './mock/mockServer'



//使用vue-scroll 得到scroller标签
Vue.use(VueScroller)

//注册全局组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el:'#app',
  render: h =>h(app),
  router

})

import Vue from 'vue'
import app from './app.vue'
import router from './router'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import {Swipe,SwipeItem} from 'mint-ui'


//文件生效
import './common/stylus/index.styl'
import './mock/mockServer'
import loading from './img/loading.gif'


//使用vue-scroll 得到scroller标签
Vue.use(VueScroller)

//注册全局组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//懒加载
Vue.use(VueLazyload,{
  loading
})


new Vue({
  el:'#app',
  render: h =>h(app),
  router

})

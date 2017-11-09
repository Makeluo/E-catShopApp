import Vue from 'vue'
import app from './app.vue'
import router from './router'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'

import {Swipe,SwipeItem} from 'mint-ui'
import iview from 'iview'
import 'iview/dist/styles/iview.css'


//文件生效
import './common/stylus/index.styl'
import './mock/mockServer'
import loading from './img/loading.gif'

Vue.prototype.HOST = '/api'

Vue.use(VueResource)
//使用vue-scroll 得到scroller标签
Vue.use(VueScroller)

//注册全局组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//懒加载
Vue.use(VueLazyload,{
  loading
})
//声明使用iview tabs
Vue.use(iview)


new Vue({
  el:'#app',
  render: h =>h(app),
  router

})

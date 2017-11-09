import Vue from 'vue'
import VueRouter from 'vue-router'

const shouye = ()=> import('../components/shouye/shouye.vue')
const clothes = ()=> import('../components/clothes/clothes.vue')
const dogfood = ()=> import('../components/dogfood/dogfood.vue')
const medical = ()=> import('../components/medical/medical.vue')
const snacks = ()=> import('../components/snacks/snacks.vue')
const appliance = ()=> import('../components/appliance/appliance.vue')
const movie = ()=> import('../components/movie/movie.vue')

const loginOrReg = ()=> import('../components/Login_registration/LoginOrreg.vue')
const map = ()=> import('../components/map/map.vue')
const Jump = ()=> import('../components/Jump/jump.vue')
const city = ()=> import('../components/city/city.vue')

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:'/shouye'
    },
    {
      path: '/shouye',
      component: shouye
    },
    {
      path: '/clothes',
      component: clothes
    },
    {
      path: '/dogfood',
      component: dogfood
    },
    {
      path: '/medical',
      component: medical
    },
    {
      path: '/snacks',
      component: snacks
    },
    {
      path: '/appliance',
      component: appliance
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/logOrReg',
      component: loginOrReg
    },
    {
      path: '/map',
      component: map
    },
    {
      path: '/Jump',
      component: Jump
    },
    {
      path: '/city',
      component: city
    }

  ]
})


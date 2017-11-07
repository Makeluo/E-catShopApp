import Vue from 'vue'
import VueRouter from 'vue-router'

const shouye = ()=> import('../components/shouye/shouye.vue')
const clothes = ()=> import('../components/clothes/clothes.vue')
const dogfood = ()=> import('../components/dogfood/dogfood.vue')
const medical = ()=> import('../components/medical/medical.vue')
const snacks = ()=> import('../components/snacks/snacks.vue')
const appliance = ()=> import('../components/appliance/appliance.vue')
const cosmetic = ()=> import('../components/cosmetic/cosmetic.vue')




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
      path: '/cosmetic',
      component: cosmetic
    },
  ]
})


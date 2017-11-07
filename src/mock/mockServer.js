import Mock from 'mockjs'
import data from './data.json'

// 映射路由
Mock.mock('/mock-Api/shouye', {
  code: 0,
  data: data.shouye
})
Mock.mock('/mock-Api/clothes', {
  code: 0,
  data: data.clothes
})
Mock.mock('/mock-Api/catfood', {
  code: 0,
  data: data.catfood
})

// export default    不需要暴露

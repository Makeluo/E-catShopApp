<template>
  <div class="clothes">
    <scroller>
      <div class="clowrap" v-for="list in clothesList">
        <span><img :src="list.icon" alt=""></span>
        <span class="">{{list.className}}</span>
        <span>{{list.count}}款商品</span>
        <ul>
          <li v-for="img in list.listImg">
            <a href="javascript:;"><img v-lazy="img.imgurl" alt=""></a>
          </li>
        </ul>
      </div>
    </scroller>


  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        clothesList: []
      }
    },
    mounted(){
      axios.get('/mock-Api/clothes')
        .then(response=>{
          const result =response.data

          if(result.code ===0){
            this.clothesList = result.data.holdClass
            //首页活动时间图片数组


          }
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = (750/16)rem
  .clothes
    position: absolute;
    top: (180/$rem)
    bottom: 0
    left: 0
    width: 100%
    span
     display inline-block
     &:nth-child(1)
       img
        width (51/$rem)
        vertical-align bottom
     &:nth-child(2)
       font-size (35/$rem)
     &:nth-child(3)
       font-size (25/$rem)
    .clowrap
      width 100%
      ul
        width 100%
        overflow hidden
        padding (8/$rem)
        li
          float: left
          width 46%
          padding (10/$rem)
          text-align center
          img
            display inline-block
            margin 0 auto
            width 100%


</style>

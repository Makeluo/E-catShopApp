<template>
  <div class="movie">

    <scroller>
      <div class="movieWrap" ref="movieWrap">
        <ul v-for="item in movieList">
          <li>
            <img :src="item.images.medium" alt="">
            <p><a :href="item.alt">{{item.title}}&nbsp;&nbsp;</a>评分:{{item.rating.average}}</p>
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
      return {
        movieList:[]
      }
    },
    mounted(){
      let url = this.HOST + '/movie/in_theaters'
      let movieWrap = document.querySelector('.movieWrap')
        this.$http.get(url)
          .then(res => {
          this.movieList = res.data.subjects
        },res => {
          console.info('调用失败')
        })

    },
    methods: {


    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = (750/16)rem

  .movie
    position: absolute;
    top: (180/$rem)
    bottom: 0
    left: 0
    width: 100%
    padding (5/$rem)
    .movieWrap
      width 100%
      ul
        width 100%
        li
          margin 0 auto
          width 10rem
          text-align center
          img
            width 100%
          a
            color #898989
            font-size (30/$rem)
</style>

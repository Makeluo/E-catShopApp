<template>
  <div class="shouye">
    <scroller>
      <div class="timeShow">
        <ul>
          <li v-for="timeImg in timeImg">
            <a href="javascript:;"><img :src="timeImg.imgurl" alt=""></a>
          </li>
        </ul>
      </div>
      <div class="CarousWrap">
        <div class="Carousel">
          <ul>
            <mt-swipe :auto="2000">
              <mt-swipe-item v-for="itemImg in lunboImg">
                <li><a href="javascript:;"><img :src="itemImg.imgurl" alt=""></a></li>
              </mt-swipe-item>
            </mt-swipe>
          </ul>
        </div>
        <div class="CarousMiddle">
          <img src="../../../static/img/shouy-img/shouye/lunbobt.jpg" alt="">
        </div>
        <div class="CarousBottom">
          <div class="group1">
            <ul>
              <li v-for="item in group1"><a href="javascript:;"><img :src="item.imgurl" alt=""></a></li>
            </ul>
          </div>
          <div class="group2">
            <ul>
              <li v-for="item in group2"><a href="javascript:;"><img :src="item.imgurl" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      <section class="sqglue">
        <div class="sqBg"></div>
        <div class="zhekou"></div>
        <div class="list">
          <div class="jishi">
            <div class="logo"><img src="../../../static/img/shouy-img/suprice.png" alt=""></div>
            <div class="jitime">
              <span>距离本场结束</span>
              <span class="box" ref="house">00</span><span>:</span>
              <span class="box" ref="minute">00</span><span>:</span>
              <span class="box" ref="second">00</span>
            </div>
            <div class="more"><a href="javascript:;"><img src="../../../static/img/shouy-img/more.png" alt=""></a></div>
          </div>
          <div class="lists" ref="navWrap">
            <ul>
              <li v-for="list in daygoods">
                <a href="javascript:;"><img :src="list.imgurl" alt=""></a>
                <p class="now">￥{{list.nowPrice}}</p>
                <p class="old">￥{{list.oldPrice}}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="ggContent">
        <div class="c1-yushou">
          <div class="hdImg"><img src="../../../static/img/shouy-img/yushou.jpg" alt=""></div>
          <div class="listBox" v-for="yushouetm in yushou">
            <div class="hdbg"><img :src="yushouetm.headerImg" alt="">
              <span>{{yushouetm.Name}}</span>
            </div>
            <ul>
              <li v-for="item in yushouetm.datagoods">
                <a href="javascript:;"><img :src="item.imgurl" alt=""></a>
                <p class="heiti">{{item.explain}}</p>
                <p><span class="red">￥{{item.nowPrice}}</span><span class="heiti hua">￥{{item.oldPrice}}</span></p>
              </li>
            </ul>
          </div>

        </div>
        <div class="c2-Etuan">
          <div class="hdImg"></div>
          <div class="ET-pai">
            <div class="paiHeaderImg"></div>
            <div class="flex-1">
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai13.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai1.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai3.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai15.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai5.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai7.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai10.jpg" alt=""></a>
              </div>
            </div>
            <div class="flex-2">
              <div><a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai9.jpg" alt=""></a></div>
              <div><a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/henpai2.jpg" alt=""></a></div>
            </div>
            <div class="flex-1">
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai13.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai8.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai2.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai15.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai4.jpg" alt=""></a>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai8.jpg" alt=""></a>
              </div>
              <div>
                <a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai14.jpg" alt=""></a>
              </div>
            </div>
            <div class="flex-2">
              <div><a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/henpai1.jpg" alt=""></a></div>
              <div><a href="javascript:;"><img src="../../../static/img/shouy-img/Ectuan/dapai11.jpg" alt=""></a></div>
            </div>
          </div>
          <div class="ET-langmu">
            <div class="lmImg"></div>
            <div class="listImg">
              <ul>
                <li v-for="list in langmuList">
                  <a href="javascript:;"><img :src="list.imgurl" alt=""></a>
                </li>

              </ul>
            </div>
          </div>
          <div class="ET-mp4">
            <div class="hdbgImg"></div>
            <div class="movie">
              <video :src="mp4.src" width="100%" height="100%" :poster="mp4.poster" controls></video>
            </div>
            <div class="btbj"></div>
          </div>
        </div>
      </section>
      <div class="foot">
        <p>
          <span class="hold">触屏版</span>
          <span>手机客户端</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </p>
        <p>
          © wap.epet.com 版权：模仿版(开发测试使用)
        </p>
      </div>
    </scroller>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'

  export default {
    props:{},
    data(){
      return {
        shouye: {},
        timeImg: [],
        lunboImg: [],
        group1:[],
        group2:[],
        daygoods:[],
        yushou: [],
        mp4:{},
        langmuList:[]
      }
    },

    mounted(){

      this.$nextTick(()=>{
        this.DaoTime()
      })

      let scroll =  new BScroll(this.$refs.navWrap,{
        scrollX: true,
        bounce: true,
        click: true //配置对象 触发点击
      })

      axios.get('/mock-Api/shouye')
        .then(response=>{
          const result =response.data

          if(result.code ===0){
            this.shouye = result.data
            //首页活动时间图片数组
            this.timeImg = this.shouye.header.timeLists
            //轮播图片数组
            this.lunboImg = this.shouye.header.lunboImgs
            //图标数组
            this.group1 = this.shouye.header.CarousBottom.groupOne
            this.group2 = this.shouye.header.CarousBottom.groupTwo
            //每日商品列表图
            this.daygoods = this.shouye.header.daygoods
            //预售模块 数据
            this.yushou = result.data.content.Yushoulists
            //特色栏目图片
            this.langmuList = result.data.content.Speciallm
            //视频信息
            this.mp4 = result.data.content.movie

          }
        })
    },

    methods: {
      DaoTime(){
        let minute =59
        let second =60
        let JSTimer = setInterval(()=>{
          second--
          if(second === 0){
            minute --
            second = 60
          }else if(second<10){
            this.$refs.second.innerText = '0' + second
          }else if(minute<10){
            this.$refs.minute.innerText = '0' + minute
          }else if(minute == 0){
            this.$refs.minute.innerText = '00'
            this.$refs.second.innerText = '00'
            clearInterval(JSTimer)
            return;
          }
          if(second>=10 && minute>=10 ){
            this.$refs.minute.innerText = minute
            this.$refs.second.innerText = second
          }

        },1000)
      }
    }


  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  $rem=(750/16)rem

.shouye
  position: absolute;
  top: (180/$rem)
  bottom: 0
  left: 0
  width: 100%
  padding (5/$rem)
  overflow: hidden
  .timeShow
    height (100/$rem)
    width 100%
    ul
      width 100%
      display flex
      li
        flex-grow 1
        img
          width 100%
          height (100/$rem)
  .CarousWrap
    width 100%
    .Carousel
      width 100%
      background red
      ul
        width 100%
        height (350/$rem)
        overflow hidden
        li
          width 100%
          height 100%
          float left
          img
            width 100%
            height 100%

    .CarousMiddle
      width 100%
      img
        width 100%
    .CarousBottom
      width 100%
      height (350/$rem)
      clearfix()
      .group1
        float left
        width 100%
        height (175/$rem)
        padding-bottom -5px
        ul
          width 100%
          display flex
          li
            flex-grow 1
            width 0
            img
              width 100%
              height (175/$rem)
      .group2
        width 100%
        float left
        ul
          width 100%
          display flex
          li
            flex-grow 1
            width 0
            img
              width 100%
              height (175/$rem)
  .sqglue
    width 100%
    clearfix()
    .sqBg
      width 100%
      height (100/$rem)
      background url("../../../static/img/shouy-img/sqgl.jpg") no-repeat
      background-size 100% 100%
    .zhekou
      width 100%
      height (300/$rem)
      background url("../../../static/img/shouy-img/zhekou.jpg")
      background-size 100% 100%
    .list
      width 100%
      .jishi
        width 100%
        height (100/$rem)
        display flex
        overflow hidden
        .logo
          flex-grow 0.5
          img
            margin-top (30/$rem)
            width (200/$rem)
            height (50/$rem)
        .jitime
          flex-grow 2
          font-size (30/$rem)
          span
            display inline-block
            position relative
            top 30%
            margin-top (10/$rem)
          .box
            border 1px solid #999
            box-shadow:0px 0px 2px 0px #999
        .more
          flex-grow 0.1
          img
            margin-top (8/$rem)
            width (135/$rem)
      .lists
        width 100%
        ul
          width (2000/$rem)
          clearfix()
          li
            float left
            width (200/$rem)
            .now
              text-align center
              font-size (30/$rem)
              color red
            .old
              color #999
              text-align center
              font-size (30/$rem)
            img
              width 100%
              height  (200/$rem)

  .ggContent
    width 100%
    margin-top (10/$rem)
    clearfix()
    .c1-yushou
      width 100%
      .hdImg
        width 100%
        img
          width 100%
          height (125/$rem)
      .listBox
        qgFlexlist()

    .c2-Etuan
      width 100%
      .hdImg
        width 100%
        height (280/$rem)
        background url("../../../static/img/shouy-img/Ectuan/header-pai.jpg")
        background-size 16rem (280/$rem)
      .ET-pai
        width 100%
        .paiHeaderImg
          width 100%
          height (110/$rem)
          background url("../../../static/img/shouy-img/Ectuan/pz1.jpg")
          background-size 16rem (110/$rem)
        .flex-1
          display flex
          div
            flex-grow 1
            width 4rem
            img
              width 100%
            &:nth-child(4)
              img

        .flex-2
          display flex
          div
            flex-grow 1
            width 8rem
            img
              width 100%
      .ET-langmu
        width 100%
        .lmImg
          height (110/$rem)
          background url("../../../static/img/shouy-img/Ectuan/langmu.jpg")
          background-size 16rem (110/$rem)
        .listImg
          width 100%
          ul
            width 100%
            clearfix()
            li
              float left
              width 50%
              height (205/$rem)
              img
                width 100%
                height 100%


      .ET-mp4
        width 100%
        .hdbgImg
          height (124/$rem)
          margin-bottom (10/$rem)
          background url("../../../static/img/shouy-img/Ectuan/mvheader.jpg")
          background-size 16rem (124/$rem)
        .btbj
          width 100%
          height (71/$rem)
          background-image url("../../../static/img/shouy-img/moviebt.jpg")
          background-size 100% 100%
  .foot
    width 100%
    height (270/$rem)
    text-align center
    p
      margin-top (50/$rem)
      font-size (28/$rem)
      color #333
      span
        margin-left (10/$rem)
      .hold
        color red
        font-size (30/$rem)
</style>










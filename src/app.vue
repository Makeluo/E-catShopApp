<template>
  <div class="topB">

    <header class="header">
      <div class="headBox">
        <div class="checkedText">
          <span class="catdog">狗狗站</span>
          <span class="shu">|</span>
          <span class="place"><router-link to="/city">深圳</router-link></span>
        </div>
        <div class="search">
          <a href="javascript:;">
            <input type="search" placeholder="搜索商品和品牌">
            <span class="search-eico"><img src="../static/img/shouy-img/search.png" alt=""></span>
          </a>
        </div>
        <div class="xiaoxi" @click="redirect">
          <router-link to="/Jump"><img src="../static/img/shouy-img/mydope.png" alt=""></router-link>
        </div>
      </div>
      <div class="nav" ref="headerNav">
        <ul>
            <li><router-link to="/shouye" class="on">主页</router-link></li>
            <li><router-link to="/clothes">精美服饰</router-link></li>
            <li><router-link to="/map">百度地图</router-link></li>
            <li><router-link to="/dogfood">狗狗主粮</router-link></li>
            <li><router-link to="/snacks">零食玩具</router-link></li>
            <li><router-link to="/appliance">日用外出</router-link></li>
            <li><router-link to="/cosmetic">美容香波</router-link></li>
        </ul>
      </div>
    </header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="bottom-fixed">
      <ul>
        <li><router-link to="/shouye" class="move0"></router-link></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
      </ul>
    </div>

    <div class="dogEye"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    updated(){
      let scroll =  new BScroll(this.$refs.headerNav,{
        scrollX: true,
        bounce: true,
        click: true
      })

      this.moveActive()
    },
    methods:{
      moveActive(){
        let aLists = document.querySelectorAll('.bottom-fixed li > a')
        for(var i=0;i<aLists.length;i++){
          aLists[i].index = i
          aLists[i].addEventListener('touchstart',function(){
            for(var i=0;i<aLists.length;i++){
              aLists[i].className = ''
            }
            //console.log(this.index);
            aLists[this.index].className = 'move'+this.index
          })
        }
      },
      redirect(){
        setTimeout(()=>{
          window.location.replace("/#/logOrReg");
          //window.location="/#/logOrReg"
        },2000)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = (375/16)rem
  @import "./common/stylus/index.styl"
//眼睛动画
  @keyframes eyag{
    from{
      background-position: 0px;
    }
    to{
      background-position: -81px;
    }
  }

  .topB
    width 100%
    .header
      width 100%
      position relative
      clearfix()
      .headBox
        display flex
        float left
        width 100%
        height (45/$rem)
        background white
        color #898989
        padding (10/$rem)
        .checkedText
          flex-grow: 3;
          width (60/$rem)
          .catdog
            font-size (17/$rem)
          .shu
            font-size (15/$rem)
          .place
            position relative
            font-size (14/$rem)
            a
              color #898989
            &::after
              position: absolute;
              width: 0
              height: 0
              content: ''
              bottom: 0
              right -(12/$rem)
              border-style: solid
              border-width: (5/$rem)
              border-color: #898989 transparent transparent transparent
        .search
          position relative
          flex-grow: 6;
          overflow hidden
          width (60/$rem)
          a
            display block
          input
            width 100%
            height (30/$rem)
            border-radius: (4/$rem);
            background  #e9e9e9
            &::-webkit-input-placeholder
              position relative
              left (5/$rem)

          .search-eico
            position absolute
            top (8/$rem)
            right 0
            img
              width (15/$rem)
              height  (15/$rem)
        .xiaoxi
          flex-grow: 0.5;
          margin-left (5/$rem)
          img
            width (28/$rem)
            height (28/$rem)
      .nav
        float left
        width 100%
        height (40/$rem)
        overflow hidden
        text-align center
        ul
          width (560/$rem)
        li
          float left
          font-size (16/$rem)
          line-height (40/$rem)
          width (80/$rem)
          & > a
            display block
            text-decoration none
            color rgb(77,85,93)
            &.active
              color #459d36
              border-bottom 2px solid #459d36

    .bottom-fixed
      border-top: 1px solid #e7e7e7;
      height: (45/$rem)
      line-height: (45/$rem)
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      background #222
      z-index: 101
      ul
        width 100%
        display flex
        li
          flex-grow 1
          height (55/$rem)
          a
            display block
            background-image url("../static/img/shouy-img/img.png")
            background-size: (234/$rem) (163/$rem)
            margin: 0 auto
            height: (40/$rem)
            width: (42/$rem)
            margin-top: 2px
            &.move0
              background-position: (-40/$rem) 0 !important
            &.move1
              background-position: (-40/$rem) (-41/$rem) !important
            &.move2
              background-position: (-40/$rem) (-81/$rem) !important
            &.move3
              background-position: (-40/$rem) (-122/$rem) !important
          &:nth-child(1)
            a
              background-position: (-127/$rem) 0
          &:nth-child(2)
            a
              background-position: (-127/$rem) (-41/$rem)
          &:nth-child(3)
            a
              background-position: (-127/$rem) (-81/$rem)
          &:nth-child(4)
            a
              background-position: (-127/$rem) (-122/$rem)

  .dogEye
    background url("../static/img/shouy-img/godog.png")
    width: (41/$rem)
    height: (46/$rem)
    background-size: 80px auto;
    position: fixed;
    bottom: 15%;
    right: -1px;
    z-index: 101;
    animation: eyag 2.5s steps(2) infinite;
</style>

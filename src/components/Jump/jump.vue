<template>
  <div class="jump">
    <header>提示信息</header>
    <div class="sos">
      <img src="../../../static/img/shouy-img/sos.png" alt="">
      <p>登陆以后才能跳转哦！</p>
    </div>
    <p>如果没有跳转，请手动点击！</p>
    <Button class="btn">立即跳转</Button>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = (750/16)rem

  .jump
    position fixed
    top 0
    left: 0
    bottom 0
    right 0
    width: 100%
    background #eee
    text-align center
    header
      width 100%
      font-size (40/$rem)
      height (120/$rem)
      text-align center
      line-height (120/$rem)
      background lightcoral

    .sos
      text-align center
      width (250/$rem)
      height (220/$rem)
      margin (120/$rem) auto
      img
        width 100%

    .btn
      margin-top (100/$rem)
</style>

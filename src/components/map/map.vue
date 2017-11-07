<template>
  <div class="mapWarp">
    <scroller>
      <div id="l-map"></div>
      <div id="r-result"></div>
    </scroller>

  </div>
</template>


<script>
  import BMap from 'BMap'

  export default {

    mounted(){
      this.getMap()
    },
    methods:{
      getMap(){
        // 百度地图API功能
        let map = new BMap.Map("l-map");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        let walking = new BMap.WalkingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
        walking.search("天坛公园", "故宫");
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem=(750/16)rem

 .mapWarp
   position: absolute;
   top: (180/$rem)
   bottom: 0
   left: 0
   width: 100%
   #l-map
     height:300px
     width:100%
   #r-result
     width:100%

   #r-result table
     width:100%
     margin-bottom (100/$rem)
</style>

<template>
  <div class="city">
    <div class="header">请选择收货地区</div>
    <div class="btn">
      <span>猫猫站</span>
      <span>狗狗站</span>
      <span>水族站</span>
    </div>
    <Cascader v-model="value3" :data="data" filterable size="large" ></Cascader>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        data: [
          {
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        },
          {
            value: 'sz',
            label: '深圳',
            children: [
              {
                value: 'gugong',
                label: '世界之窗'
              },
              {
                value: 'tiantan',
                label: '华强北'
              },
              {
                value: 'wangfujing',
                label: '南山区'
              },
              {
                value: 'wangfujing',
                label: '宝安区'
              }
            ]
          },
          {
            value: 'sh',
            label: '上海',
            children: [
              {
                value: 'gugong',
                label: '故宫'
              },
              {
                value: 'tiantan',
                label: '天坛'
              },
              {
                value: 'wangfujing',
                label: '王府井'
              }
            ]
          },
          {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }
        ],
        value3: []
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
$rem = (750/16)rem

  .city
    position fixed
    top 0
    left: 0
    width: 100%
    .header
      font-size (50/$rem)
      text-align center
      width 100%
      height (100/$rem)
      line-height (100/$rem)
      background #fff
    .btn
      width 100%
      height (100/$rem)
      background #eee
      text-align center
      line-height (100/$rem)
      span
        display inline-block
        width 3rem
        height (70/$rem)
        line-height (70/$rem)
        margin 0 1rem 0 1rem
        background lightcoral

</style>

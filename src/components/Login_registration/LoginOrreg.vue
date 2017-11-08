<template>
  <div class="loginOrReg">
    <header></header>

    <Tabs value="name1" class="tabWrap">
        <TabPane label="普通登录" name="name1" size="small">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="手机号/邮箱/用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem><br>

            <FormItem>
              <div class="btn">
                <Button type="success" @click="handleSubmit('formInline')" long>登录</Button>
              </div>
            </FormItem>
          </Form>
        </TabPane>

        <TabPane label="手机动态密码登录" name="name2" size="small">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="已注册的手机号">
              <Icon type="iphone" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input type="text" v-model="formInline.password" placeholder="输入图片内容">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="动态密码">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <FormItem>
              <div class="btn">
                <Button type="success" @click="handleSubmit('formInline')" long>登录</Button>
              </div>
            </FormItem>
          </Form>
        </TabPane>

    </Tabs>

    <div class="iconUrl">
      <a href="javascript:;"><img src="../../../static/img/login_ico2.png" alt=""></a>
      <a href="javascript:;"><img src="../../../static/img/login_ico4.png" alt=""></a>
    </div>

  </div>
</template>
<!--position: absolute;
    top: (180/$rem)-->
<script>

  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = (750/16)rem

  .loginOrReg
    position fixed
    top 0
    left: 0
    width: 100%
    header
      width 100%
      height (350/$rem)
      background url("../../../static/img/shouy-img/login.jpg") no-repeat
      background-size 100% 100%

    .tabWrap
      text-align center
    .btn
      width 10rem
    .ivu-form-item-content
      width 10rem
    .iconUrl
      width 100%
      text-align center
      img
        width (95/$rem)
        margin (50/$rem)

</style>

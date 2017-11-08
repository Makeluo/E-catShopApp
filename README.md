# 实现功能
  首页-->界面结构化分析,使用ps切图,自定义mock数据,使用vue搭建完组件界面
        better-scroll实现横向滑屏、vue-scroller实现竖向滑屏
        mint-ui跑马灯 实现轮播
        vue-lazy实现懒加载。
        
  精美服饰-->图片懒加载效果
  
  百度地图-->调用百度地图Api 实现地图效果
  
  登录注册-->使用iview 表单和按钮等，使用定时器实现登录自动跳转，用window.location实现重定向加载
            
  其他小功能：时间倒计时，轮播切换样式修改，头，底部按钮样式切换等。
  
# 1. day01
## 1). 搭建项目
    vue-cli(vue脚手架)
    vue: 基本库
    webpack: 打包工具
    es-lint: 代码检查工具
    ES6 + babel: es6和编译工具
    express: 运行开发时内存中打包的项目
    stylus stylus-loader
    vue-router
    
## 2). header静态组件
    移动端的布局
    图标字体
    flex布局
    1px边框问题
    stiky footer(粘粘布局)

# 2. day02
## 1). header动态组件
    1. mock数据
    	设计json数据结构
			结构 + 值
			结构: 类型 | 名称
			mock数据与真实数据之间结构要一致, 变化的只能是值
		提供mock接口
			express: 可以通过浏览器/编译方式请求, 但打包运行不能访问/只能提供静态数据
			mockjs: 只能编码请求,不能通过浏览器请求, 打包运行可以访问/可以提供动态数据
		ajax请求mock接口
			vue-resouce: 包装XMLHttpRequest, pomise风格, 主要用在vue1
			axios: 包装XMLHttpRequest, pomise风格, 浏览器/node都可以, vue2后基本都用axios
			fetch: 浏览器内置的, 不是包装XMLHttpRequest, 本身就是pomise风格, 但老版浏览中没有, 需要使用fetch.js来兼容 
    2. 动态显示数据
	    在data初始化状态: seller={}
		在created()中发送ajax请求, 异步获取数据并更新状态
		父组件: 状态数据通过props传递给子组件
		子组件: 声明接收属性, props配置
		模板展现数据
			{{}}
			v-for
			v-if
			v-show
			:class
			:xxx
    3. 交互
    	@click="xxx"
		methods: xxx()
		动画效果
			<transition name='xxx'>
			.xxx-enter-active, .xxx-leave-active: transition样式
			.xxx-enter, xxx-leave-to: 隐藏时的样式

	1. 使用第三库better-scroll实现平滑滚动
		下载引入
		API文档
		样例
		使用
			new BScroll(domContainer, {...})
	2. 在界面更新后才处理
		this.$nextTick(function(){})
	3. 标识某个标签
		ref: 得到指定的标签对象



# 你说几个数组中常用的方法?
	1). 几个简单的方法: push(), pop(), forEach(), join(), reverse() -->就不用说了
	2). 几个非常好用的方法: 数组的声明编程方法
		map() --> 产生一个新的数组
		filter() --> 过滤产生一个新的数组
		find()/findIndex() --> 查找数组元素/元素的下标
		reduce()--> 累加统计结果

# 5. day05
## 01). vue-router
## 02). vue相关的插件
	vue-lazyload
	vue-scroller
	mint-ui/element-ui
## 04). 优化项目
	缓存路由组件
	路由懒加载
		利用了代码分割(code split)
		优化首屏显示
	使用devtool + sourceMap实现代码调试
## 05). 百度地图API
	注册并登陆
	为你的应用创建一个对应的虚拟应用
	利用api文件和DEMO编写
## 06). 短信验证码
	使用容联云通信平台
	注册/登陆
	进入控制台, 添加测试手机号
	利用API接口编写请求代码



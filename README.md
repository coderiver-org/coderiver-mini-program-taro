# coderiver-taro
![预览](./ewm.jpg)

### 自定义tabbar解决方案

第一种方法

* app.json中配置微信自带tabbar,再自定义一个TabBar组件
* onLaunch onShow时隐藏自带tabbar
* 自定义TabBar组件切换调用switchTab

  **缺点** 再次进入页面自带tabbar先显示再消失

---

第二种方法(目前采用这一种)

* 自定义一个TabBar组件
* 使用一个页面入口,根据当前点击,显示对应的页面组件

  **缺点** 一个页面维护切换状态
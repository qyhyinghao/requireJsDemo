# requireJsDemo

## 怎么使用requirejs

1. 引入require.js
2. 先配置文件路径
   ```
   require.config({
      baseUrl:'/assets',
      paths:{
      jquery:'lib/jquery/jquery-3.2.0',
      template:/
      ...
      ...
      a:'...'
   })
   ```
3. 定义模块 a
   ```
   define(['jquery'],function($){
   正常写代码即可

   })
   ```
4. 哪个html页面想要使用js  就  require(['a']) 去引入就行

# 如何在webpack构建的项目中使用VUE进行开发
 ## 操作步骤
  ### 1. 创建前端项目架构包含src目录，用来存放源文件,src下创建index.html，main.js，创建dist目录用来存放打包后的文件
  ### 2. 到项目内部使用终端执行npm init -y初始化项目信息
  ### 3. 在项目内部安装webpack，使用终端执行npm i webpack webpack-cli -D (不指定版本安装最新的webpack)
  ### 4. 在项目内部安装webpack-dev-server，使用终端执行npm i webpack-dev-server -D
  ### 5. 在项目内部安装html-webpack-plugin，使用终端执行npm i html-webpack-plugin -D
  ### 6. 在项目内部安装VUE，使用终端执行npm i vue -S
  ### 7. 在项目内部安装browser、polyfill以支持IE9浏览器及以上版本，npm install browser -D npm install polyfill -D
  ### 8. 在main.js中引入VUE、browser、polyfill,添加 import Vue from 'vue';
  ### 9. 在项目内部安装vue-loader vue-template-compiler插件用来解析.VUE文件中的模板 npm i vue-loader vue-template-compiler -D
  ### 10. 在项目的webpack.config.js的rules中新增规则：{test:/\.vue$/,use:'vue-loader'}，用于对vue文件的加载
  ### 11. webpack4需要在webpack.config.js中新增：const VueLoaderPlugin = require('vue-loader/lib/plugin'),并在plugins中实例化这个插件
  ### 12. 安装vue-router插件，在终端执行npm i vue-router -S
# Vue2.0项目搭建框架

Vue2.0项目搭建缺省目录结构及代码框架，适用于开始一个新的vue2.0的项目

以下是框架说明：

## 目录结构设计：

* assets：资源目录，根据业务类型命名子目录，存放不同功能使用到的图片、音视频、图标等文件
* components：公共组件目录，根据组件分类命名子目录，存放可复用的基础组件、业务组件、自定义组件
* core：集成核心目录，根据处理类型命名子目录，存放应用级别的公共方法，包括应用级初始化、用户配置、公共样式、菜单处理、权限处理、元数据处理、各种工具集等等
* plug：集成插件目录，根据插件名称命名子目录，统一纳管第三方插件、模块，各模块之间独立处理模块内部的事务
* views：功能页面目录，根据功能分类命名子目录，存放不同功能页面的组件
* App.vue：应用组件，显示路由加载的组件
* main.js：应用主程序，集成整个应用的所有功能



## 设计的核心思想：

添加或删除核心代码和应用插件只需要在相应目录下的index.js中添加或者删除，无需做过多的更改和操作，即可完成一个方法的添加或删除，每个功能尽可能的解耦并独立，让组件可拔插，插件可拔插，核心代码可拔插，以高度集成的工程化思想来进行设计，已经用实践证明这种开发方式是长期维护长期更新迭代项目的最佳实践


搭建框架已集成以下工具：

1. Vue CLI脚手架
2. Git忽略文件配置
3. Sass支持
4. Eslint代码风格校验


## 运行项目：

1.安装vue脚手架

```
=>npm install @vue/cli -g
```

2.打开vue脚手架图形化界面

```
=>vue ui
```

3,引入本项目根目录，然后运行
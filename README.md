# static-html-template
静态页面网站快速开发环境，支持自动刷新页面，less样式预处理。

本项目主要为了快速创建一个官网类的全静态页面做技术支持，做到快速创建、快速开发、快速发布。

## 项目创建

使用 cli 工具进行项目创建，快速创建一个能够进行开发的项目。

全局安装：

```
> npm i -g sht-cli
```

创建项目：

```
> sht new
```

根据提示输入，就可以创建一个项目了。

## 开发环境准备

**安装依赖**

项目使用到了 `gulp` 需要全局安装。

```
> npm i -g gulp
```

项目根目录下，执行安装命令。

```
> npm i
```

项目使用到一个 Chrome 插件： LiveReload。

## 开发

运行项目

```
> npm start
```

## 打包发布

```
> npm run build
```

项目资源会全部打包到 build 目录下。

## 目录说明：

config: 配置存放目录， 存放相应的配置文件

img: 图片资源存放文件夹

js: js 资源存放文件夹

less: less 样式文件存放目录，会生成相应的 css 文件，存放在 style 文件夹

style: 样式文件存放目录

view: html 页面存放目录

build: 打包发布生成的目录，资源会全部放在这个文件夹，并进行压缩

## 可自己改造的地方

- 合并所有 css 文件为一个文件，并对相应页面引用做修改
- 合并所有的 js 文件为一个文件，并对相应页面引用做修改
- 修改 less 预处理器为 sass

## 未来可能支持

- 命令行创建页面，包括完成 html 、 less 文件，并完成相应的引用配置
- cli 操作方式，创建项目（完成）
- GUI 操作界面，新建项目，管理项目，新增页面等功能

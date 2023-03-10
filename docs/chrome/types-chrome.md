---
title: types/chome api类型库
date: 2021-12-13
categories:
  - Google
tags:
  - Google-Plugin
---

# Google 插件开发 chomeApi ts 类型库

[npm 地址：https://www.npmjs.com/package/@types/chrome](https://www.npmjs.com/package/@types/chrome)

## 项目依赖安装

执行命令

```
npm install @types/chrome -D
```

package.json 文件

```json
 "devDependencies": {
    "@types/chrome": "0.0.171",
    ...
```

然后在 tsconfig.json 文件添加类型：

```json
{

    "compilerOptions": {
        ...

        "types": [
            ...

            "chrome",

            ...
        ],


}
```

没配置之前：
<img src={require('@site/static/img/google/4d6733da125a655d334a689a694200e.png').default} />

配置后：
<img src={require('@site/static/img/google/429777c006410de5b42bd6320e12bf4.png').default} />

ts 类型检测可以正常使用~

## 调试工具

> 谷歌插件安装在紫鸟浏览器里面时，由于紫鸟浏览器无输出控制台，解决方案

1. 代码执行关键时刻上传日志至服务器
2. 安装调试工具[eruda 埃鲁达](https://eruda.liriliri.io/)

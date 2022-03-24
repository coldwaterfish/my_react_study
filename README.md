### 地址：

coldwaterfish.github.io

### 介绍

1.个人学习项目 2.使用的工具:react+typescript+hooks+antd+redux+axios

### 安装

1.npx create-react-app coldfish --template typescript
2.yarn add antd
3.yarn add less less-loader

### antd 按需引入

1.yarn add craco craco-less babel-plugin-import
2.package.json
"scripts": {
"start": "craco start",
"build": "craco build",
"test": "craco test",
"eject": "craco eject"
},
3.craco.config.js

### antd 本地化

1.yarn add moment
2.index.jsx

### antd icon

1.yarn add @ant-design/icons

### ts 配置

1."baseUrl": "./src"

### css 重置

### 路由

1.yarn add react-router-dom
2.yarn add @types/react-router-dom --save-dev

### axios

#### yarn add axios

#### 封装 api/http.ts

#### 跨域设置：

a.package.json 中"proxy":"http://localhost:8000"-----单个
b.http-proxy-middleware

### redux

#### yarn add redux react-redux

#### store/

#### yarn add @types/react-redux

### iconfont

#### assets/font/iconfont

### echarts

#### yarn add echarts-for-react

### mockjs(2022/03/22)

#### 原先用的fastmock读取文章列表

#### yarn add mockjs

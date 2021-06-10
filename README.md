# vue3-node-template

使用Vue3和NodeJS搭建的h5移动端单页和后端RESTful模版。

> 模板使用版本：`Node.js v10.17.0`

## Vue

```
cd vue3-template

npm install

npm run serve
```

访问地址：

```
http://localhost:8999
```

## Node

```
cd node-template
npm install
```

首先需要在`src/config`文件夹里根据开发环境修改为自己的数据库连接配置：

```js
const config = {
  mysql: {
    host: '',
    database: ''
  }
}
```

自动生成数据库表：
```
cd node-template/src/db
node init-db.js
```

```
// development
npm run dev

// staging
npm run stage

// production
npm run prod
```

访问地址：

```
// development
http://localhost:8888/info

// staging
http://localhost:9528/info

// production
http://localhost:9529/info
```
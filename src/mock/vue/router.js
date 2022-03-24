import Mock from 'mockjs'
export default Mock.mock('/vue/router', 'get', options=>{
    return Mock.mock([
        {
            key: 204000,
            title:"环境",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 204001,
            title:"嵌套路由",
            createTime:"2022-02-01 11:31:29",
            updateTime:"2022-02-08 11:31:29",
          },
          {
            key: 204002,
            title:"query传参",
            createTime:"2022-02-01 11:32:29",
            updateTime:"2022-02-08 11:32:29",
          },
          {
            key: 204003,
            title:"命名路由",
            createTime:"2022-02-01 11:33:29",
            updateTime:"2022-02-08 11:33:29",
          },
          {
            key: 204004,
            title:"params传参",
            createTime:"2022-02-01 11:34:29",
            updateTime:"2022-02-08 11:34:29",
          },
          {
            key:204005,
            title:"参数props",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:204006,
            title:"编程式跳转",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:204007,
            title:"缓存路由组件",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:204008,
            title:"路由守卫",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:204009,
            title:"路由模式",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
    ]);
})
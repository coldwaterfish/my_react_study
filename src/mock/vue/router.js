import Mock from 'mockjs'
export default Mock.mock('/vue/router', 'get', options=>{
    return Mock.mock([
        {
            key: 504000,
            title:"环境",
          },
          {
            key: 504001,
            title:"嵌套路由",
          },
          {
            key: 504002,
            title:"query传参",
          },
          {
            key: 504003,
            title:"命名路由",
          },
          {
            key: 504004,
            title:"params传参",
          },
          {
            key:504005,
            title:"参数props",
          },
          {
            key:504006,
            title:"编程式跳转",
          },
          {
            key:504007,
            title:"缓存路由组件",
          },
          {
            key:504008,
            title:"路由守卫",
          },
          {
            key:504009,
            title:"路由模式",
          },
    ]);
})
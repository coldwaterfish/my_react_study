import Mock from 'mockjs'
export default Mock.mock('/vue/practice', 'get', options=>{
    return Mock.mock([
        {
            key: 507000,
            title:"项目初始化",
          },
          {
            key: 507001,
            title:"路径别名",
          },
          {
            key: 507002,
            title:"eslint",
          },
          {
            key: 507003,
            title:"重置样式",
          },
    ]);
})
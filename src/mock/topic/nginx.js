import Mock from 'mockjs'
export default Mock.mock('/topic/nginx', 'get', options=>{
    return Mock.mock([
        {
            key: 701000,
            title:"环境配置",
          },
          {
            key: 701001,
            title:"跨域",
          },
          {
            key: 701002,
            title:"刷新404",
          },
          {
            key: 701003,
            title:"axios",
          },
          {
            key: 701004,
            title:"监听窗口",
          },
    ]);
})
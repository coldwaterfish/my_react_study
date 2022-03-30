import Mock from 'mockjs'
export default Mock.mock('/js/ajax', 'get', options=>{
    return Mock.mock([
        {
            key: 404000,
            title:"http请求",
          },
          {
            key: 404001,
            title:"ajax",
          },
          {
            key: 404002,
            title:"跨域问题",
          },
          {
            key: 404003,
            title:"axios",
          },
          {
            key: 404004,
            title:"监听窗口",
          },
    ]);
})
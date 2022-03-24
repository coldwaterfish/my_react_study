import Mock from 'mockjs'
export default Mock.mock('/topic/ajax', 'get', options=>{
    return Mock.mock([
        {
            key: 801000,
            title:"http请求",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 801001,
            title:"ajax",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 801002,
            title:"跨域问题",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 801003,
            title:"axios",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 801004,
            title:"监听窗口",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
    ]);
})
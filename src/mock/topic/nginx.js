import Mock from 'mockjs'
export default Mock.mock('/topic/nginx', 'get', options=>{
    return Mock.mock([
        {
            key: 802000,
            title:"环境配置",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 802001,
            title:"跨域",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 802002,
            title:"刷新404",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 802003,
            title:"axios",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 802004,
            title:"监听窗口",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
    ]);
})
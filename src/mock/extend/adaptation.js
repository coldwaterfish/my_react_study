import Mock from 'mockjs'
export default Mock.mock('/extend/adaptation', 'get', options=>{
    return Mock.mock([
        {
            key: 404000,
            title:"自适应布局",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 404001,
            title:"媒体查询",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 404002,
            title:"rem",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 404003,
            title:"设备宽度",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 404004,
            title:"监听窗口",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
    ]);
})
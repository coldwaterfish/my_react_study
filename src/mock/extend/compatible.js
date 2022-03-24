import Mock from 'mockjs'
export default Mock.mock('/extend/compatible', 'get', options=>{
    return Mock.mock([
        {
            key: 403000,
            title:"react兼容IE",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 403001,
            title:"flex兼容性",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 403002,
            title:"axios兼容性",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
          },
          {
            key: 403003,
            title:"CSS兼容",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 403004,
            title:"js兼容",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 403005,
            title:"移动端兼容",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
    ]);
})
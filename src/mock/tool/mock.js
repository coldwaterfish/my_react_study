import Mock from 'mockjs'
export default Mock.mock('/tool/mock', 'get', options=>{
    return Mock.mock([
        {
            key: 604000,
            title:"mock",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 604001,
            title:"vue使用",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 604002,
            title:"react使用",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 604003,
            title:"fastmock",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
    ]);
})
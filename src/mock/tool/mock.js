import Mock from 'mockjs'
export default Mock.mock('/tool/mock', 'get', options=>{
    return Mock.mock([
        {
            key: 804000,
            title:"mock",
          },
          {
            key: 804001,
            title:"vue使用",
          },
          {
            key: 804002,
            title:"react使用",
          },
          {
            key: 804003,
            title:"fastmock",
          },
    ]);
})
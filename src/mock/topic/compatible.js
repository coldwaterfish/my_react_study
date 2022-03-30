import Mock from 'mockjs'
export default Mock.mock('/topic/compatible', 'get', options=>{
    return Mock.mock([
        {
            key: 705000,
            title:"react兼容IE",
          },
          {
            key: 705001,
            title:"flex兼容性",
          },
          {
            key: 705002,
            title:"axios兼容性",
          },
          {
            key: 705003,
            title:"CSS兼容",
          },
          {
            key: 705004,
            title:"js兼容",
          },
          {
            key: 705005,
            title:"移动端兼容",
          },
    ]);
})
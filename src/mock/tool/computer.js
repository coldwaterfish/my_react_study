import Mock from 'mockjs'
export default Mock.mock('/tool/computer', 'get', options=>{
    return Mock.mock([
        {
            key: 806000,
            title:"前端环境",
          },
          {
            key: 806001,
            title:"win11",
          },
    ]);
})
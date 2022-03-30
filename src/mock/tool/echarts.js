import Mock from 'mockjs'
export default Mock.mock('/tool/echarts', 'get', options=>{
    return Mock.mock([
        {
            key: 803000,
            title:"react安装",
          },
          {
            key: 803001,
            title:"图表不显示",
          },
    ]);
})
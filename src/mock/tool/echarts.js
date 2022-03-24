import Mock from 'mockjs'
export default Mock.mock('/tool/echarts', 'get', options=>{
    return Mock.mock([
        {
            key: 603000,
            title:"react安装",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 603001,
            title:"图表不显示",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
    ]);
})
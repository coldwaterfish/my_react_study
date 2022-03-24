import Mock from 'mockjs'
export default Mock.mock('/work/computer', 'get', options=>{
    return Mock.mock([
        {
            key: 702000,
            title:"前端环境",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 702001,
            title:"公司任务",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
    ]);
})
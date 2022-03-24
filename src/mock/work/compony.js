import Mock from 'mockjs'
export default Mock.mock('/work/compony', 'get', options=>{
    return Mock.mock([
        {
            key: 701000,
            title:"公司文化",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
    ]);
})
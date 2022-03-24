import Mock from 'mockjs'
export default Mock.mock('/react/antd', 'get', options=>{
    return Mock.mock([
        {
            key: 304000,
            title:"按需引入",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
        },
        {
            key: 304001,
            title:"自定义主题",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
        },
        {
            key: 304002,
            title:"日期选择",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
        }
    ]);
})
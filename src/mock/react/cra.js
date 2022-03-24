import Mock from 'mockjs'
export default Mock.mock('/react/cra', 'get', options=>{
    return Mock.mock([
        {
            key: 302000,
            title:"create-react-app",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
        },
        {
            key: 302001,
            title:"环境部署",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
        },
        {
            key: 302002,
            title:"craco",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
        },
        {
            key: 302003,
            title:"webpack",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
        }
    ]);
})
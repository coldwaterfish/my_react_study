import Mock from 'mockjs'
export default Mock.mock('/react/cra', 'get', options=>{
    return Mock.mock([
        {
            key: 602000,
            title:"create-react-app",
        },
        {
            key: 602001,
            title:"环境部署",
        },
        {
            key: 602002,
            title:"craco",
        },
        {
            key: 602003,
            title:"webpack",
        }
    ]);
})
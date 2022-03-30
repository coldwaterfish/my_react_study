import Mock from 'mockjs'
export default Mock.mock('/react/antd', 'get', options=>{
    return Mock.mock([
        {
            key: 604000,
            title:"按需引入",
        },
        {
            key: 604001,
            title:"自定义主题",
        },
        {
            key: 604002,
            title:"日期选择",
        }
    ]);
})
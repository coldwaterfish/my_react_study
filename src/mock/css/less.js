import Mock from 'mockjs'
export default Mock.mock('/css/less', 'get', options=>{
    return Mock.mock([
        {
            key: 304000,
            title:"基本语法",
        },
        {
            key: 304001,
            title:"vue",
        },
    ]);
})
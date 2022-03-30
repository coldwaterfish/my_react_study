import Mock from 'mockjs'
export default Mock.mock('/js/bom', 'get', options=>{
    return Mock.mock([
        {
            key: 403000,
            title:"onerror",
        },
    ]);
})
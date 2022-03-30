import Mock from 'mockjs'
export default Mock.mock('/tool/webpack', 'get', options=>{
    return Mock.mock([
        {
            key: 807000,
            title:"深入浅出",
        },
        {
            key: 807001,
            title:"happypack",
        },
    ]);
})
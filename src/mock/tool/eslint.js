import Mock from 'mockjs'
export default Mock.mock('/tool/eslint', 'get', options=>{
    return Mock.mock([
        {
            key: 808000,
            title:"阻止不规范提交",
        },
    ]);
})
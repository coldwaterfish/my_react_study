import Mock from 'mockjs'
export default Mock.mock('/vue/element', 'get', options=>{
    return Mock.mock([
        {
            key: 506000,
            title:"安装配置",
          },
          {
            key: 506001,
            title:"loading",
          },
    ]);
})
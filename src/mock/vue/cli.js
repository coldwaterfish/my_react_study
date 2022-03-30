import Mock from 'mockjs'
export default Mock.mock('/vue/cli', 'get', options=>{
    return Mock.mock([
          {
            key: 502000,
            title:"@vue/cli",
          },
          {
            key: 502001,
            title:"文档结构",
          },
          {
            key: 502002,
            title:"render函数",
          },
          {
            key: 502003,
            title:"vue.config",
          },
          {
            key: 502004,
            title:"ref",
          },
          {
            key:502005,
            title:"props",
          },
          {
            key:502006,
            title:"mixin",
          },
          {
            key:502007,
            title:"插件",
          },
          {
            key:502008,
            title:"scoped样式",
          },
          {
            key:502009,
            title:"配置代理",
          },
          {
            key:502010,
            title:"打包",
          },
          {
            key:502011,
            title:"打包优化",
          },
    ]);
})
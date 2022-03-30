import Mock from 'mockjs'
export default Mock.mock('/vue/vuex', 'get', options=>{
    return Mock.mock([
        {
            key: 505000,
            title:"求和案例",
          },
          {
            key: 505001,
            title:"vuex环境",
          },
          {
            key: 505002,
            title:"vuex求和",
          },
          {
            key: 505003,
            title:"getters",
          },
          {
            key: 505004,
            title:"mapState",
          },
          {
            key:505005,
            title:"mapActions",
          },
          {
            key:505006,
            title:"mapMutations",
          },
          {
            key:505007,
            title:"模块化",
          },
    ]);
})
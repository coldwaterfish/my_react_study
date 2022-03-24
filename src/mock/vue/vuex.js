import Mock from 'mockjs'
export default Mock.mock('/vue/vuex', 'get', options=>{
    return Mock.mock([
        {
            key: 205000,
            title:"求和案例",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 205001,
            title:"vuex环境",
            createTime:"2022-02-01 11:31:29",
            updateTime:"2022-02-08 11:31:29",
          },
          {
            key: 205002,
            title:"vuex求和",
            createTime:"2022-02-01 11:32:29",
            updateTime:"2022-02-08 11:32:29",
          },
          {
            key: 205003,
            title:"getters",
            createTime:"2022-02-01 11:33:29",
            updateTime:"2022-02-08 11:33:29",
          },
          {
            key: 205004,
            title:"mapState",
            createTime:"2022-02-01 11:34:29",
            updateTime:"2022-02-08 11:34:29",
          },
          {
            key:205005,
            title:"mapActions",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:205006,
            title:"mapMutations",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:205007,
            title:"模块化",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
    ]);
})
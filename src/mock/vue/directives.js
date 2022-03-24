import Mock from 'mockjs'
export default Mock.mock('/vue/directives', 'get', options=>{
    return Mock.mock([
        {
            key: 203000,
            title:"v-text",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 203001,
            title:"v-html",
            createTime:"2022-02-01 11:31:29",
            updateTime:"2022-02-08 11:31:29",
          },
          {
            key: 203002,
            title:"v-cloak",
            createTime:"2022-02-01 11:32:29",
            updateTime:"2022-02-08 11:32:29",
          },
          {
            key: 203003,
            title:"v-once",
            createTime:"2022-02-01 11:33:29",
            updateTime:"2022-02-08 11:33:29",
          },
          {
            key: 203004,
            title:"v-pre",
            createTime:"2022-02-01 11:34:29",
            updateTime:"2022-02-08 11:34:29",
          },
          {
            key:203005,
            title:"自定义",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
    ]);
})
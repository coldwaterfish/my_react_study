import Mock from 'mockjs'
export default Mock.mock('/vue/directives', 'get', options=>{
    return Mock.mock([
        {
            key: 503000,
            title:"v-text",
          },
          {
            key: 503001,
            title:"v-html",
          },
          {
            key: 503002,
            title:"v-cloak",
          },
          {
            key: 503003,
            title:"v-once",
          },
          {
            key: 503004,
            title:"v-pre",
          },
          {
            key:503005,
            title:"自定义",
          },
    ]);
})
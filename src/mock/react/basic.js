import Mock from 'mockjs'
export default Mock.mock('/react/basic', 'get', options=>{
    return Mock.mock([
        {
            key: 301000,
            title:"jsx语法",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 301001,
            title:"函数组件",
            createTime:"2022-02-01 11:31:29",
            updateTime:"2022-02-08 11:31:29",
          },
          {
            key:301002,
            title:"类组件",
            createTime:"2022-02-01 11:32:29",
            updateTime:"2022-02-08 11:32:29",
          },
          {
            key: 301003,
            title:"state",
            createTime:"2022-02-01 11:33:29",
            updateTime:"2022-02-08 11:33:29",
          },
          {
            key:301004,
            title:"prop",
            createTime:"2022-02-01 11:34:29",
            updateTime:"2022-02-08 11:34:29",
          },
          {
            key: 301005,
            title:"ref",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key:301006,
            title:"事件绑定",
            createTime:"2022-02-01 11:36:29",
            updateTime:"2022-02-08 11:36:29",
          },
          {
            key:301007,
            title:"受控/非受控组件",
            createTime:"2022-02-01 11:37:29",
            updateTime:"2022-02-08 11:37:29",
          },
          {
            key: 301008,
            title:"旧生命周期",
            createTime:"2022-02-01 11:36:29",
            updateTime:"2022-02-08 11:36:29",
          },
          {
            key:301009,
            title:"新生命周期",
            createTime:"2022-02-01 11:37:29",
            updateTime:"2022-02-08 11:37:29",
          },
          {
            key:301010,
            title:"组件间通信",
            createTime:"2022-02-01 11:37:29",
            updateTime:"2022-02-08 11:37:29",
          },
          {
            key: 301011,
            title:"context",
            createTime:"2022-02-01 11:37:29",
            updateTime:"2022-02-08 11:37:29",
          }
    ]);
})
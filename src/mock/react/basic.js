import Mock from 'mockjs'
export default Mock.mock('/react/basic', 'get', options=>{
    return Mock.mock([
        {
            key: 601000,
            title:"jsx语法",
          },
          {
            key: 601001,
            title:"函数组件",
          },
          {
            key:601002,
            title:"类组件",
          },
          {
            key: 601003,
            title:"state",
          },
          {
            key:601004,
            title:"prop",
          },
          {
            key: 601005,
            title:"ref",
          },
          {
            key:601006,
            title:"事件绑定",
          },
          {
            key:601007,
            title:"受控/非受控组件",
          },
          {
            key: 601008,
            title:"旧生命周期",
          },
          {
            key:601009,
            title:"新生命周期",
          },
          {
            key:601010,
            title:"组件间通信",
          },
          {
            key: 601011,
            title:"context",
          }
    ]);
})
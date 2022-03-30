import Mock from 'mockjs'
export default Mock.mock('/tool/vscode', 'get', options=>{
    return Mock.mock([
        {
            key: 805000,
            title:"快捷键",
          },
          {
            key: 805001,
            title:"win11",
          },
    ]);
})
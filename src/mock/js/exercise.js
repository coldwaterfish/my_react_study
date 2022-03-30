import Mock from 'mockjs'
export default Mock.mock('/js/exercise', 'get', options=>{
    return Mock.mock([
        {
            key: 405000,
            title:"小数运算",
          },
          {
            key: 405001,
            title:"回文字符串",
          },
          {
            key: 405002,
            title:"格式化数字",
          },
          {
            key: 405003,
            title:"数组扁平化",
          },
          {
            key: 405004,
            title:"获取元素",
          },
          {
            key: 405005,
            title:"闭包",
          },
          {
            key: 405006,
            title:"变量输出",
          },
          {
            key: 405007,
            title:"大数相加",
          },
          {
            key: 405008,
            title:"数组去重",
          },
          {
            key: 405009,
            title:"DOM树",
          },
    ]);
})
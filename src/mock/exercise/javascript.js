import Mock from 'mockjs'
export default Mock.mock('/exercise/js', 'get', options=>{
    return Mock.mock([
        {
            key: 503000,
            title:"小数运算",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 503001,
            title:"回文字符串",
            createTime:"2022-02-01 11:31:29",
            updateTime:"2022-02-08 11:31:29",
          },
          {
            key: 503002,
            title:"格式化数字",
            createTime:"2022-02-01 11:32:29",
            updateTime:"2022-02-08 11:32:29",
          },
          {
            key: 503003,
            title:"数组扁平化",
            createTime:"2022-02-01 11:33:29",
            updateTime:"2022-02-08 11:33:29",
          },
          {
            key: 503004,
            title:"获取元素",
            createTime:"2022-02-01 11:34:29",
            updateTime:"2022-02-08 11:34:29",
          },
          {
            key: 503005,
            title:"闭包",
            createTime:"2022-02-01 11:35:29",
            updateTime:"2022-02-08 11:35:29",
          },
          {
            key: 503006,
            title:"变量输出",
            createTime:"2022-02-01 11:36:29",
            updateTime:"2022-02-08 11:36:29",
          },
          {
            key: 503007,
            title:"大数相加",
            createTime:"2022-02-01 11:36:29",
            updateTime:"2022-02-08 11:36:29",
          },
    ]);
})
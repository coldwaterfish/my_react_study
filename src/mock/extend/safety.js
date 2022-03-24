import Mock from 'mockjs'
export default Mock.mock('/extend/safety', 'get', options=>{
    return Mock.mock([
        {
            key: 402000,
            title:"SQL注入",
            createTime:"2022-02-01 11:30:29",
            updateTime:"2022-02-08 11:30:29",
          },
          {
            key: 402001,
            title:"XSS跨站脚本攻击",
            createTime:"2022-02-02 11:31:29",
            updateTime:"2022-02-09 11:31:29",
          },
          {
            key: 402002,
            title:"CSRF跨站请求伪造",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
          },
          {
            key: 402003,
            title:"URL跳转漏洞",
            createTime:"2022-02-12 11:37:29",
            updateTime:"2022-02-19 11:37:29",
          },
    ]);
})
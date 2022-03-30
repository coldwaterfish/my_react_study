import Mock from 'mockjs'
export default Mock.mock('/topic/safety', 'get', options=>{
    return Mock.mock([
        {
            key: 704000,
            title:"SQL注入",
          },
          {
            key: 704001,
            title:"XSS跨站脚本攻击",
          },
          {
            key: 704002,
            title:"CSRF跨站请求伪造",
          },
          {
            key: 704003,
            title:"URL跳转漏洞",
          },
    ]);
})
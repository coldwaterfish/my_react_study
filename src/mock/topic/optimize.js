import Mock from 'mockjs'
export default Mock.mock('/topic/optimize', 'get', options=>{
    return Mock.mock([
          {
            key: 703000,
            title:"浏览器渲染原理",
          },
          {
            key: 703001,
            title:"css阻塞",
          },
          {
            key: 703002,
            title:"js阻塞",
          },
          {
            key: 703003,
            title:"重绘/回流",
          },
          {
            key: 703004,
            title:"图片懒加载",
          },
          {
            key: 703005,
            title:"路由懒加载",
          },
          {
            key: 703006,
            title:"事件委托",
          },
          {
            key: 703007,
            title:"防抖/节流",
          },
          {
            key: 703008,
            title:"CDN",
          },
          {
            key: 703009,
            title:"缓存",
          },
          {
            key: 703010,
            title:"长列表",
          },
          {
            key: 703011,
            title:"react表单组件",
          },
          {
            key: 703012,
            title:"图片不刷新",
          },
          {
            key: 703013,
            title:"SEO",
          },
          {
            key: 703014,
            title:"react打包",
          },
    ]);
})
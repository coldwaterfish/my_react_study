import Mock from 'mockjs'
export default Mock.mock('/topic/mobile', 'get', options=>{
    return Mock.mock([
        {
            key: 702000,
            title:"viewport",
          },
          {
            key: 702001,
            title:"媒体查询",
          },
          {
            key: 702002,
            title:"rem",
          },
          {
            key: 702003,
            title:"设备宽度",
          },
          {
            key: 702004,
            title:"监听窗口",
          },
          {
            key: 702005,
            title:"vw/vh",
          },
          {
            key: 702006,
            title:"1像素边框",
          },
          {
            key: 702007,
            title:"移动端事件",
          },
          {
            key: 702008,
            title:"点击穿透",
          },
          {
            key: 702009,
            title:"手机像素",
          },
    ]);
})
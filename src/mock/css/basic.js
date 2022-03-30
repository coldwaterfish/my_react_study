import Mock from 'mockjs'

export default Mock.mock('/css/basic', 'get', options=>{
        return Mock.mock([
              {
                key: 301000,
                title:"选择器",
              },
              {
                key: 301001,
                title:"权重和优先级",
              },
              {
                key: 301002,
                title:"position定位",
              },
              {
                key: 301003,
                title:"布局演变",
              },
              {
                key: 301004,
                title:"float布局",
              },
              {
                key: 301005,
                title:"清除浮动",
              },
              {
                key: 301006,
                title:"flex布局",
              },
              {
                key: 301007,
                title:"grid布局",
              },
              {
                key: 301008,
                title:"水平垂直居中",
              },
              {
                key: 301009,
                title:"两栏布局",
              },
              {
                key: 301010,
                title:"三列布局",
              },
              {
                key: 301011,
                title:"盒子模型",
              },
              {
                key: 301012,
                title:"圣杯布局",
              },
              {
                key: 301013,
                title:"双飞翼布局",
              },
              {
                key: 301014,
                title:"visibility",
              },
              {
                key: 301015,
                title:"display",
              },
              {
                key: 301016,
                title:"opacity",
              },
              {
                key: 301017,
                title:"BFC和IFC",
              },
              {
                key: 301018,
                title:"vertical-align",
              },
              {
                key: 301019,
                title:"z-index",
              },
        ]);
})
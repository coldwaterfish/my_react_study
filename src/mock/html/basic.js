import Mock from 'mockjs'

export default Mock.mock('/html/basic', 'get', options=>{

            return Mock.mock([{
                key: 201000,
                title: "doctype作用",
            },
            {
                key: 201001,
                title: "H5新特性",
            },
            {
                key: 201002,
                title: "标签页通信",
            },
            {
                key: 201003,
                title: "行内/块级元素",
            },
            {
                key: 201004,
                title: "本地存储",
            },
            {
                key: 201005,
                title: "离线缓存",
            },
            {
                key: 201006,
                title: "src和href",
            },
            {
                key: 201007,
                title: "link和@import",
            },
            {
                key: 201008,
                title: "自定义属性",
            },
            {
                key: 201009,
                title: "querySelector",
            },
            ]);
})
import Mock from 'mockjs'

export default Mock.mock('/w3c/html', 'get', options=>{

            return Mock.mock([{
                key: 101000,
                title: "doctype作用",
                createTime: "2022-02-01 11:30:29",
                updateTime: "2022-02-08 11:30:29",
            },
            {
                key: 101001,
                title: "H5新特性",
                createTime: "2022-02-01 11:31:29",
                updateTime: "2022-02-08 11:31:29",
            },
            {
                key: 101002,
                title: "标签页通信",
                createTime: "2022-02-01 11:32:29",
                updateTime: "2022-02-08 11:32:29",
            },
            {
                key: 101003,
                title: "行内/块级元素",
                createTime: "2022-02-01 11:33:29",
                updateTime: "2022-02-08 11:33:29",
            },
            {
                key: 101004,
                title: "本地存储",
                createTime: "2022-02-01 11:34:29",
                updateTime: "2022-02-08 11:34:29",
            },
            {
                key: 101005,
                title: "离线缓存",
                createTime: "2022-02-01 11:35:29",
                updateTime: "2022-02-08 11:35:29",
            },
            {
                key: 101006,
                title: "src和href",
                createTime: "2022-02-01 11:36:29",
                updateTime: "2022-02-08 11:36:29",
            },
            {
                key: 101007,
                title: "link和@import",
                createTime: "2022-02-01 11:37:29",
                updateTime: "2022-02-08 11:37:29",
            },
            {
                key: 101008,
                title: "自定义属性",
                createTime: "2022-02-01 11:37:29",
                updateTime: "2022-02-08 11:37:29",
            },
            {
                key: 101009,
                title: "querySelector",
                createTime: "2022-02-01 11:37:29",
                updateTime: "2022-02-08 11:37:29",
            },
            ]);
})
import "./style.less";

import { memo } from "react";
import ReactEcharts from "echarts-for-react";
import { Card, Divider } from "antd";

type Props = {};

const articlePie = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "0%",
    left: "center",
  },
  series: [
    {
      name: "文章数",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          color: "teal",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 50, name: "w3c" },
        { value: 80, name: "vue" },
        { value: 100, name: "react" },
        { value: 30, name: "扩展" },
        { value: 65, name: "练习" },
        { value: 20, name: "工具" },
      ],
    },
  ],
};
const articleCategory = {
  xAxis: {
    type: "category",
    data: ["w3c", "vue", "react", "扩展", "练习", "工具"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [50, 80, 100, 30, 65, 20],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

const Home = (props: Props) => {
  return (
    <>
      <div className="content-top">
        <Card title="网站链接" bordered={false} style={{ width: 300 }}>
          <a href="https://www.w3school.com.cn/">w3school</a>
          <a href="https://developer.mozilla.org/zh-CN/">mdn</a>
          <a href="https://caniuse.com/">caniuse</a>
          <Divider dashed />
          <a href="https://cn.vuejs.org/index.html">vue2</a>
          <a href="https://v3.cn.vuejs.org/">vue3</a>
          <a href="https://react.docschina.org/">react</a>
          <Divider dashed />
          <a href="https://ant.design/index-cn">antd</a>
          <a href="https://element.eleme.cn/#/zh-CN">element</a>
          <a href="https://element-plus.org/zh-CN/">element+</a>
          <a href="https://www.iconfont.cn/">iconfont</a>
          <a href="https://echarts.apache.org/zh/index.html">echarts</a>
          <Divider dashed />
          <a href="https://github.com/">github</a>
          <a href="https://gitee.com/">gitee</a>
          <a href="https://www.fastmock.site/#/">fastmock</a>
        </Card>
        <div className="article-count">
          <ReactEcharts option={articlePie} />
          <ReactEcharts option={articleCategory} />
        </div>
        <Card title="网站链接" bordered={false} style={{ width: 300 }}>
          {/* <Link to={"/w3c/html/article"} state={{ key: 101009 }}>
            querySelector
          </Link> */}
          <a href="https://codepen.io/">codepen</a>
          <a href="https://www.bootcdn.cn/">bootcdn</a>
          <Divider dashed />
        </Card>
      </div>
    </>
  );
};

export default memo(Home);

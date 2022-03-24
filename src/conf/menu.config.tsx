// 左侧导航栏

import { ReactNode } from "react";
import Iconfont from "assets/font/iconfont";
import { SettingOutlined } from "@ant-design/icons";

export interface IMenuItem {
  title: string;
  key: string;
  icon: ReactNode;
  role?: string[];
  children?: IMenuItem[];
}
const menuList: IMenuItem[] = [
  {
    title: "主页",
    key: "/",
    icon: <Iconfont type="icon-home" />,
  },
  {
    title: "w3c",
    key: "w3c",
    icon: <Iconfont type="icon-Web" />,
    role: ["w3c"],
    children: [
      {
        title: "html",
        key: "w3c/html",
        icon: <Iconfont type="icon-h5e" />,
      },
      {
        title: "css",
        key: "w3c/css",
        icon: <Iconfont type="icon-css3" />,
      },
      {
        title: "js",
        key: "w3c/js",
        icon: <Iconfont type="icon-js" />,
      },
    ],
  },
  {
    title: "vue",
    key: "vue",
    icon: <Iconfont type="icon-bxl-vuejs" />,
    role: ["vue"],
    children: [
      {
        title: "basic",
        key: "vue/basic",
        icon: <Iconfont type="icon-neirong2" />,
      },
      {
        title: "cli",
        key: "vue/cli",
        icon: <Iconfont type="icon-jiaoshoujia-xian" />,
      },
      {
        title: "directives",
        key: "vue/directives",
        icon: <Iconfont type="icon-zhilingguanli" />,
      },
      {
        title: "router",
        key: "vue/router",
        icon: <Iconfont type="icon-luyou" />,
      },
      {
        title: "vuex",
        key: "vue/vuex",
        icon: <Iconfont type="icon-ecs-status" />,
      },
      {
        title: "element",
        key: "vue/element",
        icon: <Iconfont type="icon-neirong2" />,
      },
    ],
  },
  {
    title: "react",
    key: "react",
    icon: <Iconfont type="icon-reactjs-line" />,
    role: ["react"],
    children: [
      {
        title: "basic",
        key: "react/basic",
        icon: <Iconfont type="icon-neirong2" />,
      },
      {
        title: "cra",
        key: "react/cra",
        icon: <Iconfont type="icon-jiaoshoujia-xian" />,
      },
      {
        title: "hooks",
        key: "react/hooks",
        icon: <Iconfont type="icon-Crain-Hook" />,
      },
      {
        title: "router",
        key: "react/router",
        icon: <Iconfont type="icon-luyou" />,
      },
      {
        title: "redux",
        key: "react/redux",
        icon: <Iconfont type="icon-ecs-status" />,
      },
      {
        title: "antd",
        key: "react/antd",
        icon: <Iconfont type="icon-antdesign" />,
      },
    ],
  },
  {
    title: "话题",
    key: "topic",
    icon: <Iconfont type="icon-topic" />,
    role: ["topic"],
    children: [
      {
        title: "ajax",
        key: "topic/ajax",
        icon: <Iconfont type="icon-aJax" />,
      },
      {
        title: "nginx",
        key: "topic/nginx ",
        icon: <Iconfont type="icon-nginx" />,
      },
    ],
  },
  {
    title: "扩展",
    key: "extend",
    icon: <Iconfont type="icon-gengduo" />,
    role: ["extend"],
    children: [
      {
        title: "优化",
        key: "extend/optimize",
        icon: <Iconfont type="icon-optimization" />,
      },
      {
        title: "安全",
        key: "extend/safety ",
        icon: <Iconfont type="icon-anquan" />,
      },
      {
        title: "兼容性",
        key: "extend/compatible",
        icon: <Iconfont type="icon-jiyukaiyuanjianrongkaiyuan" />,
      },
      {
        title: "适配",
        key: "extend/adaptation",
        icon: <Iconfont type="icon-shipei" />,
      },
    ],
  },
  {
    title: "练习",
    key: "exercise",
    icon: <Iconfont type="icon-lianxi" />,
    role: ["exercise"],
    children: [
      {
        title: "html",
        key: "exercise/html",
        icon: <Iconfont type="icon-h5e" />,
      },
      {
        title: "css",
        key: "exercise/css",
        icon: <Iconfont type="icon-css3" />,
      },
      {
        title: "js",
        key: "exercise/js",
        icon: <Iconfont type="icon-js" />,
      },
    ],
  },
  {
    title: "工具",
    key: "tool",
    icon: <Iconfont type="icon-gongju" />,
    role: ["tool"],
    children: [
      {
        title: "git",
        key: "tool/git",
        icon: <Iconfont type="icon-git" />,
      },
      {
        title: "iconfont",
        key: "tool/iconfont",
        icon: <Iconfont type="icon-Iconfont" />,
      },
      {
        title: "echarts",
        key: "tool/echarts",
        icon: <Iconfont type="icon-echarts_cross" />,
      },
      {
        title: "mock",
        key: "tool/mock",
        icon: <Iconfont type="icon-MockTest" />,
      },
    ],
  },
  {
    title: "工作",
    key: "work",
    icon: <Iconfont type="icon-work" />,
    role: ["work"],
    children: [
      {
        title: "compony",
        key: "work/compony",
        icon: <Iconfont type="icon-gongsi" />,
      },
      {
        title: "computer",
        key: "work/computer",
        icon: <Iconfont type="icon-huanjingsheji" />,
      },
    ],
  },
  {
    title: "设置",
    key: "user",
    icon: <SettingOutlined style={{ fontSize: "12px" }} />,
  },
];

export default menuList;

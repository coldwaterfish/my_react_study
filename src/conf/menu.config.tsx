// 左侧导航栏

import { ReactNode } from "react";
import Iconfont from "assets/font/iconfont";

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
    title: "浏览器",
    key: "browser",
    icon: <Iconfont type="icon-Web" />,
    role: ["browser"],
    children: [
      {
        title: "chrome",
        key: "browser/chrome",
        icon: <Iconfont type="icon-h5e" />,
      },
    ],
  },
  {
    title: "html",
    key: "html",
    icon: <Iconfont type="icon-h5e" />,
    role: ["html"],
    children: [
      {
        title: "basic",
        key: "html/basic",
        icon: <Iconfont type="icon-neirong2" />,
      },
    ],
  },
  {
    title: "css",
    key: "css",
    icon: <Iconfont type="icon-css3" />,
    role: ["css"],
    children: [
      {
        title: "basic",
        key: "css/basic",
        icon: <Iconfont type="icon-neirong2" />,
      },
      {
        title: "变形动画",
        key: "css/animation",
        icon: <Iconfont type="icon-donghuapian" />,
      },
      {
        title: "特效",
        key: "css/effects",
        icon: <Iconfont type="icon-texiao" />,
      },
      {
        title: "less",
        key: "css/less",
        icon: <Iconfont type="icon-less" />,
      },
      {
        title: "sass",
        key: "css/sass",
        icon: <Iconfont type="icon-sass" />,
      },
    ],
  },
  {
    title: "js",
    key: "js",
    icon: <Iconfont type="icon-js" />,
    role: ["js"],
    children: [
      {
        title: "basic",
        key: "js/basic",
        icon: <Iconfont type="icon-neirong2" />,
      },
      {
        title: "dom",
        key: "js/dom",
        icon: <Iconfont type="icon-dom" />,
      },
      {
        title: "bom",
        key: "js/bom",
        icon: <Iconfont type="icon-BOM" />,
      },
      {
        title: "ajax",
        key: "js/ajax",
        icon: <Iconfont type="icon-aJax" />,
      },
      {
        title: "exercise",
        key: "js/exercise",
        icon: <Iconfont type="icon-lianxi" />,
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
      {
        title: "practice",
        key: "vue/practice",
        icon: <Iconfont type="icon-lianxi" />,
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
        title: "nginx",
        key: "topic/nginx",
        icon: <Iconfont type="icon-nginx" />,
      },
      {
        title: "移动端",
        key: "topic/mobile",
        icon: <Iconfont type="icon-xiangyingshi" />,
      },
      {
        title: "优化",
        key: "topic/optimize",
        icon: <Iconfont type="icon-optimization" />,
      },
      {
        title: "安全",
        key: "topic/safety",
        icon: <Iconfont type="icon-anquan" />,
      },
      {
        title: "兼容性",
        key: "topic/compatible",
        icon: <Iconfont type="icon-jiyukaiyuanjianrongkaiyuan" />,
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
      {
        title: "vscode",
        key: "tool/vscode",
        icon: <Iconfont type="icon-VsCode" />,
      },
      {
        title: "computer",
        key: "tool/computer",
        icon: <Iconfont type="icon-huanjingsheji" />,
      },
      {
        title: "webpack",
        key: "tool/webpack",
        icon: <Iconfont type="icon-webpack" />,
      },
      {
        title: "eslint",
        key: "tool/eslint",
        icon: <Iconfont type="icon-eslint" />,
      },
    ],
  },
];

export default menuList;

import "./style.less";

import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

const ArticleDetail: React.FC<any> = () => {
  const [currentArticle, setCurrentArticle] = useState<{
    url: string;
    content: any;
  }>({ url: "", content: "" });
  const location = useLocation();
  const state = location.state as { key: number };

  // 初始为开发文档
  useEffect(() => {
    changeCurrentArticle(
      location.pathname.split("/article")[0] + `/${state.key}.md`
    );
  }, []); // eslint-disable-line

  // 更改当前文档
  const changeCurrentArticle = async (url: string) => {
    const res = await fetch(require("assets/md" + url));
    const content = await res.text();
    await setCurrentArticle({ ...currentArticle, content, url });
    makeHightLight();
  };

  const makeHightLight = () => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll("pre code");
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement);
    });
  };

  return (
    <>
      <ReactMarkdown
        // className="markdown-body"
        children={currentArticle.content}
      />
    </>
  );
};

export default memo(ArticleDetail);

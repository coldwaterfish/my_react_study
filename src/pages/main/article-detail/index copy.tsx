import { handleArticle } from "api";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type articleDetail = {
  key: number;
  title: string;
  content: string[];
};
const ArticleDetail = () => {
  const location = useLocation();
  const state=location.state as {key:number}

  const [article, setArticle] = useState<articleDetail>({
    key: 0,
    title: "",
    content: [],
  });
  useEffect(() => {
    (async function () {
      const result = await handleArticle(location.pathname + "?key=" + state.key);

      if (result && result.data.article) {
        setArticle(result.data.article);
      }
    })();
  }, []);
  return (
    <>
      <h2>{article?.title}</h2>
      {article?.content.map((item, index) => {
        return <h4 key={ item}>{index + 1 + "、" + item}</h4>;
      })}
    </>
  );
};

export default memo(ArticleDetail);

import "./style.less";

import { Breadcrumb, Button } from "antd";
import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathList = location.pathname.split("/").slice(1);

  // 点击
  const handleClick = (index: number) => {
    return () => {
      // 只考虑三级的情况
      if (index === 0) navigate("/");
      if (index === 1 && pathList.length > 2)
        navigate(pathList[0] + "/" + pathList[1]);
    };
  };
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {pathList.map((item, index) => {
        if (index === 0 && item === "") item = "home";
        return (
          <Breadcrumb.Item key={item}>
            <Button type="text" className="bread" onClick={handleClick(index)}>
              {item}
            </Button>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default memo(BreadCrumb);

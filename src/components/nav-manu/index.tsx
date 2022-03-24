// 左侧导航栏-分2级

import "./style.less";
import { Menu } from "antd";
import menuList, { IMenuItem } from "conf/menu.config";
import { memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userType } from "store/reducers/user.r";
const { SubMenu } = Menu;

type Props = {
  user: userType;
};

const NavMenu = ({ user }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const pathArr = path.substring(1).split("/");
  // 选中的menu
  const selectedKey =
    path.length > 1
      ? pathArr.length > 2
        ? pathArr[0] + "/" + pathArr[1]
        : path.substring(1)
      : path;

  // 展开的menu
  const [openKey, setOpenKey] = useState(path.split("/")[1]);

  // 点击事件
  const menuClick = (ele: any) => {
    navigate(ele.key);
  };
  const subMenuClick = (ele: any) => setOpenKey(ele[1]);

  //根据用户角色，返回一个新menu
  function userMenu(menu: IMenuItem[]) {
    return menu.filter((item) => {
      if (!item.role) return true;
      let arr = item.role?.filter((value) => {
        return user.role?.includes(value);
      });
      return arr && arr.length > 0;
    });
  }

  // 生成menu
  function getMenu(menu: IMenuItem[]) {
    return menu.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.title}
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {getMenu(item.children)}
          </SubMenu>
        );
      }
    });
  }

  return (
    <Menu
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      className="leftMenu"
      onClick={menuClick}
      selectedKeys={[selectedKey]}
      openKeys={[openKey]}
      onOpenChange={subMenuClick}
    >
      {getMenu(user.role?.includes("admin") ? menuList : userMenu(menuList))}
    </Menu>
  );
};

export default memo(NavMenu);

import { useState, memo, useRef, MutableRefObject, useEffect } from "react";
import { Layout, Avatar, Input, Dropdown, Menu, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { userDispatchToProps, userStateToProps } from "store/actions/user.a";
import { userType } from "store/reducers/user.r";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "utils/local-storage";

import "./style.less";
// 自定义组件
import Iconfont from "assets/font/iconfont";
import NavMenu from "../../components/nav-manu";
import BreadCrumb from "../../components/bread-crumb";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

export type Props = {
  user: userType;
  userUpdate: (user: userType) => void;
};
// 组件
const Main: React.FC<Props> = (props: Props) => {
  // 路由
  const navigate = useNavigate();
  const location = useLocation();

  // 用户信息
  const { user } = props;

  // 是否退出
  const [isLogout, setIsLogout] = useState(false);

  // 导航栏宽度
  const [sideWidth, setSideWidth] = useState(200);

  // 导航栏ref
  const sideRef: MutableRefObject<any> = useRef(null);

  // 内容ref
  const contentRef: MutableRefObject<any> = useRef(null);

  // effect
  useEffect(() => {
    screenWidth();
  }, []); // eslint-disable-line

  // 监听窗口宽度
  window.onresize = function () {
    screenWidth();
  };

  // 根据窗口宽度设置sider和content
  const screenWidth = () => {
    let width =
      window.innerWidth || //浏览器窗口的内部宽度（包括滚动条）
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      if (location.pathname.length > 1) {
        sideRef.current.style.display = "none";
        contentRef.current.style.display = "block";
      } else {
        contentRef.current.style.display = "none";
        sideRef.current.style.display = "block";
        setSideWidth(width);
      }
    } else {
      sideRef.current.style.display = "block";
      contentRef.current.style.display = "block";
      setSideWidth(200);
    }
  };

  // 退出
  const logout = () => setIsLogout(true);

  const handleLogoutOk = () => {
    setIsLogout(false);
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };

  const handleLogoutCancel = () => setIsLogout(false);

  // 搜索
  const onSearch = (value: any) => console.log(value);

  // 点击logo
  const handleClickLogo = () => navigate("/");

  return (
    <div>
      <Modal
        title="提示："
        visible={isLogout}
        onOk={handleLogoutOk}
        onCancel={handleLogoutCancel}
      >
        <p>确认退出?</p>
      </Modal>
      <Layout>
        <Header className="header">
          <div className="logo" onClick={handleClickLogo}>
            COLDFISH
          </div>
          <div className="search">
            <Search placeholder="search..." onSearch={onSearch} enterButton />
          </div>
          <div className="header-right">
            <Dropdown
              placement="bottomCenter"
              overlay={
                <Menu>
                  <Menu.Item key={"logout"} danger onClick={logout}>
                    退 出
                  </Menu.Item>
                </Menu>
              }
            >
              <Avatar
                style={{ backgroundColor: "white", cursor: "pointer" }}
                size="small"
                icon={
                  user.username ? (
                    <Iconfont
                      type="icon-reactjs-line"
                      style={{ color: "indigo" }}
                    />
                  ) : (
                    <UserOutlined />
                  )
                }
              />
            </Dropdown>
            {user.username ? (
              <Link to="/my" className="header-link">
                {user.username}
              </Link>
            ) : (
              <Link to="/login" className="header-link">
                登录 / 注册
              </Link>
            )}
          </div>
        </Header>
        <Layout>
          <Sider
            width={sideWidth}
            className="site-layout-background"
            ref={sideRef}
          >
            <NavMenu user={user} />
          </Sider>
          <div ref={contentRef} style={{ width: "100%" }}>
            <Layout
              style={{
                padding: "0 10px 10px",
                minHeight: document.documentElement.clientHeight - 64,
              }}
            >
              <BreadCrumb></BreadCrumb>
              <Content className="content-layout">
                <Outlet />
              </Content>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default memo(connect(userStateToProps, userDispatchToProps)(Main));

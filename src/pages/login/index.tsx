import { Form, Input, Checkbox, Button, message } from "antd";
import "./index.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { handleLogin } from "api";
import useLocalStorage from "utils/local-storage/useLocalStorage";
import { TOKEN_KEY } from "utils/local-storage";
import { memo } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDispatchToProps, userStateToProps } from "store/actions/user.a";
import { userType } from "store/reducers/user.r";

export type Props = {
  user: userType;
  userUpdate: (user: userType) => void;
};
const Login: React.FC<Props> = ({ user, userUpdate }: Props) => {
  const [form] = Form.useForm();
  const [, setToken] = useLocalStorage(TOKEN_KEY);
  const navigate = useNavigate();

  // 提交表单
  const submitForm = async (values: any) => {
    const { username, password, remember } = values;
    let res = await handleLogin(username, password);
    if (res && res.data) {
      const { email, token, tel, role } = res.data;
      // token
      if (remember) {
        setToken(token);
      } else {
        setToken(null);
      }
      // user_store

      userUpdate({ username, password, email, tel, role });

      // message
      message.success("登录成功");

      // 跳转
      navigate("/");
    } else {
      message.error("用户名或密码错误");
    }
  };

  // 页面
  return (
    <div className="login">
      <div className="login-top">
        <div className="welcome">Welcome To Coldfish</div>
        <div className="triangle"></div>
        <div className="rectangle"></div>
        <div className="circular"></div>
      </div>
      <div className="login-form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={submitForm}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
              // 声明式表单验证，正则
              {
                pattern: /^[A-Za-z\d_]{3,8}$/,
                message: "3-8个字母数字下划线",
              },
            ]}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
              // validator自定义式验证
              {
                validator: (_, value) => {
                  if (value.length >= 6 && value.length <= 10) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("密码长度必须是6~10位");
                  }
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "white" }}>记住登录状态</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              忘记密码 ?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
            <Link to="/register" className="toRegister">
              现在注册?
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default memo(connect(userStateToProps, userDispatchToProps)(Login));

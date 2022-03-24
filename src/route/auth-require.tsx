// 身份认证组件authentication

import { handleToken } from "api";
import { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDispatchToProps, userStateToProps } from "store/actions/user.a";
import { userType } from "store/reducers/user.r";
import { TOKEN_KEY } from "utils/local-storage";
import useLocalStorage from "utils/local-storage/useLocalStorage";

export type Props = {
  user: userType;
  userUpdate: (user: userType) => void;
  element: JSX.Element;
};
const AuthRequire = (props: Props) => {
  const [token] = useLocalStorage(TOKEN_KEY);
  const { user, userUpdate, element } = props;
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (user.username) return setIsLogin(true);
    if (!token) {
      navigate("login");
    } else {
      (async function () {
        const result = await handleToken(token);
        if (result && result.data) {
          setIsLogin(true);
          userUpdate({ ...result.data });
        } else {
          navigate("login");
        }
      })();
    }
  }, []); // eslint-disable-line
  return isLogin ? element : null;
};

export default memo(
  connect(userStateToProps, userDispatchToProps)(AuthRequire)
);

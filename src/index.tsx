import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import './mock/index'

moment.locale("zh-cn");
ReactDOM.render(
  <ConfigProvider locale={locale}>
    {/* react-router */}
    <BrowserRouter>
      {/* redux */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root")
);

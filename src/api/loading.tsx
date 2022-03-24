import { Spin } from "antd";
import ReactDOM from "react-dom";

// 显示loading
export function showLoading(requestCount: number) {
  if (requestCount === 0) {
    let dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip="加载中..." size="large" />, dom);
  }
  requestCount++;
}

// 隐藏loading
export function hideLoading(requestCount: number) {
  requestCount--;
  let dom = document.getElementById("loading");
  if (requestCount === 0 && dom) {
    document.body.removeChild(dom);
  }
}

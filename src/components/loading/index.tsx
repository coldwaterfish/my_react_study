import { LoadingOutlined } from "@ant-design/icons";
import "./index.less";

export default function Loading() {
  return (
    <div className="loading">
      <LoadingOutlined style={{ fontSize: "60px", color: "#1890ff" }} />
    </div>
  );
}

import { memo } from "react";
import Router from "route";
import "./assets/less/index.less";
function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default memo(App);

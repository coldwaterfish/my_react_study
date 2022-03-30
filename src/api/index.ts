
import Axios from "./http";

// 登录
// export const handleLogin = (username: string, password: string) =>
//   Axios()({ url: "login", data: { username, password } });
export const handleLogin = (username: string, password: string) =>
  Axios()({ url: "login", data: { username, password }});

// 根据token获取用户信息
export const handleToken = (token:string) => Axios()({ url: "token" ,data:{token}});

// 文章列表
export const handleArticleList = (url: string) => Axios()({ url });

// 文章详情
export const handleArticle = (url: string) => Axios()({ url });

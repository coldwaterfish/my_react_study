import { useRoutes, RouteObject, Outlet } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
import Main from "../pages/main";
import AuthRequire from "./auth-require";
import Loading from "../components/loading";
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const PageNotFound = lazy(() => import("../pages/404"));

// home
const Home = lazy(() => import("../pages/main/home"));

// articleList
const ArticleList = lazy(() => import("../pages/main/article-list"));
const ArticleDetail = lazy(() => import("../pages/main/article-detail"));

// 路由数组
const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthRequire element={<Main />} />,
    children: [
      {
        element: <Home />,
        // index默认展示，不需要path
        index: true,
      },
      {
        path: ":class",
        element: <Outlet />,
        children: [
          {
            path: ":division",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <ArticleList />,
              },
              {
                path: "article",
                element: <ArticleDetail />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

// 生成路由
const generateRouter = (routes: RouteObject[]) => {
  return routes.map((item) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = <Suspense fallback={<Loading />}>{item.element}</Suspense>;
    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));
export default memo(Router);

// function Redirect({ to }: { to: string }) {
//   let navigate = useNavigate();
//   useEffect(() => {
//     navigate(to);
//   });
//   return null;
// }

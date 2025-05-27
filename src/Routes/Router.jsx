import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import ExploreGardeners from "../pages/ExploreGardeners";
import Home from "../pages/Home";
import TipsPage from "../pages/TipsPage";
import ShareTip from "../pages/ShareTip";
import AuthLayOut from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TipsDetailsPage from "../pages/TipsDetailsPage";
import ProtectedRoute from "./ProtectedRoute";
import MyTips from "../pages/MyTips";
import NotFoundPage from './../pages/NotFoundPage';

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "explore",
        Component: ExploreGardeners,
        loader: async () => { return await fetch('https://greenworld-server.onrender.com/explore').then(res => res.json()) }
      },
      {
        path: "tips",
        Component: TipsPage,
        loader: async () => { return await fetch('https://greenworld-server.onrender.com/tips').then(res => res.json()) }
      },
      {
        path: "share-tip",
        Component: ShareTip,

      },
      {
        path: "tips/:id",
        element: <ProtectedRoute><TipsDetailsPage /></ProtectedRoute>,
        loader: async ({ params }) => {
          const res = await fetch(`https://greenworld-server.onrender.com/share-tip/${params.id}`)
          return res.json();
        }

      },
      {
        path: "my-tips",
        element: <ProtectedRoute><MyTips /></ProtectedRoute>,
        loader: async () => { return await fetch('https://greenworld-server.onrender.com/tips').then(res => res.json()) }



      },
      {
        path: '/auth',
        Component: AuthLayOut,
        children: [
          {
            path: '/auth/login',
            Component: Login,
          },
          {
            path: '/auth/register',
            Component: Register,
          },
        ]
      },
      {
        path: "*",
        element: <NotFoundPage />,



      },
    ]

  },

])
export default Router;

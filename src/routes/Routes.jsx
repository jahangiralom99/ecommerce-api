import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import AllCategory from "../pages/AllCategory";
import ErrorPage from "../pages/ErrorPage";
import CheckOut from "../pages/CheckOut";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Landing from "../pages/Landing";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Form from ".././components/landing/From";
import Profile from "../pages/Profile";
import {loader} from "../utilities/loader";
import App from "../App";
import PrivateRoutes from "./Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/item/:name",
        element: <Product />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/:name/:name",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

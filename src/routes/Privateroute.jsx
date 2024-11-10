import {  useEffect } from "react";
import { Navigate, useLocation,} from "react-router-dom";
import { toast } from "react-toastify";
import {getStrdCart } from "../utilities/functions";

const PrivateRoutes = ({ children }) => {
  // const { user } = useContext(UserContext);
  // const loaction = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     toast("You have to log in first");
  //   }
  // }, [user]);

  // if (user) {
  //   navigate("/");
  //   return children;
  // }

  // return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;

  const { data } = getStrdCart("login-info");
  const location = useLocation();

  useEffect(() => {
    if (!data) {
      toast("You have to log in first");
    }
  }, [data]);

  // If the user is not logged in, redirect to login page
  if (!data) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is logged in, render the children
  return children;
};

export default PrivateRoutes;

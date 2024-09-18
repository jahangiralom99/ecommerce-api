import {useContext, useEffect} from "react";
import {UserContext} from "../App";
import {Navigate, useLocation} from "react-router-dom";
import {toast} from "react-toastify";

const PrivateRoutes = ({children}) => {
  const {user} = useContext(UserContext);
  const loaction = useLocation();

  useEffect(() => {
    if (!user) {
      toast("You have to log in first");
    }
  }, [user]);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: loaction}} replace></Navigate>;
};

export default PrivateRoutes;

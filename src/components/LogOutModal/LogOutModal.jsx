/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearStoredCart, getStrdCart } from "../../utilities/functions";
import { toast } from "react-toastify";
import { base_url, fetch_url } from "../../utilities/dataPanel";
import Loader from "../Shared/Loader";
import { CartContext } from "../../App";

const LogOutModal = ({ setLogOutModal }) => {
  //   const { data } = getStrdCart("login-info")
  const [loader, setLoader] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // logout info
  const handleLogOut = () => {
    setLoader(true);
    const postBody = {
      erp_url: base_url,
    };
    // console.log(postBody);
    fetch(`${fetch_url}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          clearStoredCart("login-info");
          //   clearStoredCart("cart");
          clearStoredCart("item-all-data");
          //   setCartItems(cartItems + 1);
          navigate("/login");
          setLogOutModal(false);
          // window.location.reload();
          setLoader(false);
          toast.success("Logout successfully");
        }
      })
      .then((err) => {
        // console.log(err);
        setLogOutModal(false);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
        setLogOutModal(false);
      });
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="h-screen fixed top-0 left-0 flex justify-center items-center  w-full z-50">
      <div
        // onClick={() => setLogOutModal(false)}
        className="bg-black opacity-30 fixed h-screen w-full top-0"
      ></div>
      <div className="bg-white p-8 w-72 h-40 rounded-2xl z-10">
        <p className="text-[#FF0000] text-[16px] font-bold cursor-pointer">
          Logout
        </p>
        <p className="pt-3 text-black font-semibold">
          Do you really want to logout?
        </p>
        <div className="flex justify-end gap-5 pt-8">
          <button
            onClick={() => {
              setLogOutModal(false);
            }}
            className="font-bold cursor-pointer"
          >
            Cancel
          </button>
          <div
            onClick={handleLogOut}
            className="text-[#FF0000] font-bold cursor-pointer"
          >
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;

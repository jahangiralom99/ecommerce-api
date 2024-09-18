import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import Title from "../components/title/Title";
import { addToProceed, getUser } from "../utilities/functions";
import { CartContext, UserContext } from "../App";
import { BiHide, BiShowAlt } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  const onSubmit = (data) => {
    getUser(data.mail, data.password)
      .then((user) => {
        if (user) {
          let cart = JSON.parse(user?.custom_cart);
          toast(`Welcome ${user?.customer_name}`);
          setUser(user?.customer_name);
          addToProceed(
            encodeURIComponent(btoa(`${data.mail}_${data.password}`)),
            "token"
          );
          addToProceed(cart, "cart");
          setCartItems(cart.length);
          navigate("/");
        } else {
          toast("Validation Failed. Try Again");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  return (
    <>
      <Title title="Registration" />
      <div className="max-w-3xl mx-auto px-4 mt-4 py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-hidden rounded border bg-white text-slate-500 shadow-md shadow-slate-200"
        >
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4 text-center bg-[#f85606] p-4 rounded ">
              <h3 className="text-xl flex items-center justify-center gap-3 font-medium text-white">
                <CiUser className="text-2xl" />
                Login
              </h3>
            </header>
            <div className="flex flex-col">
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b03"
                  type="email"
                  required
                  {...register("mail")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Please give your email address
                </label>
              </div>
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b13"
                  type={`${hide ? "text" : "password"}`}
                  required
                  {...register("password")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Please give your password
                </label>
                <div
                  onClick={() => setHide(!hide)}
                  className="absolute top-[9px] right-3 cursor-pointer"
                >
                  {!hide ? (
                    <BiHide className="text-xl" />
                  ) : (
                    <BiShowAlt className="text-xl" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- Action base sized basic button --> */}
          <div className="flex justify-end p-4 ">
            <button className="inline-flex h-10 w-44 mx-auto items-center justify-center gap-2 whitespace-nowrap rounded bg-[#f85606] px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#9a471d] focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none">
              <span>Login</span>
            </button>
          </div>
          <div className="mt-4 text-center mb-4">
            <p className="font-bold">Or</p>
            <Link
              to="/registration"
              className="mt-3 cursor-pointer text-xs font-bold text-[#f85606] hover:text-red-600"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
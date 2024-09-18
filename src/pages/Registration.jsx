import { CiUser } from "react-icons/ci";
import logo from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Title from "../components/title/Title";
import { getUser, postData } from "../utilities/functions";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useState } from "react";

const Registration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const onSubmit = (data) => {
    if (data.custom_password === data.password) {
      let newCustomer = {
        customer_name: data.customer_name,
        customer_type: "Individual",
        email_id: data.email_id,
        mobile_no: data.mobile_no,
        primary_address: data.address,
        custom_password: encodeURIComponent(btoa(data.custom_password)),
      };

      getUser(data.email_id)
        .then((isUserValid) => {
          if (isUserValid) {
            toast("User exists");
          } else {
            postData("Customer", newCustomer)
              .then((isUser) => {
                if (isUser) {
                  toast("User is Created");
                  navigate("/login");
                } else {
                  console.log("User is Not Created");
                }
              })
              .catch((error) => {
                console.error("Error fetching user:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    } else {
      toast("Password Not Match");
    }
  };

  return (
    <>
      <Title title="Registration" />
      <div className="max-w-4xl mx-auto px-4 mt-4 py-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-hidden rounded border bg-white text-slate-500 shadow-md shadow-slate-200"
        >
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4 text-center bg-[#f85606] p-4 rounded ">
              <h3 className="text-xl flex items-center justify-center gap-3 font-medium text-white">
                <CiUser className="text-2xl" />
                Registration (New user)
              </h3>
            </header>
            <div className="flex flex-col">
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b03"
                  type="text"
                  required
                  {...register("customer_name")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Name
                </label>
              </div>
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b03"
                  type="email"
                  required
                  {...register("email_id")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Email
                </label>
              </div>
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b13"
                  type="text"
                  required
                  {...register("address")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Address
                </label>
              </div>
              <div className="relative my-6">
                <input
                  id="id-b13"
                  type="text"
                  required
                  {...register("mobile_no")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Mobile No.
                </label>
              </div>
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b13"
                  type={`${hide ? "text" : "password"}`}
                  required
                  {...register("custom_password")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Password
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
              {/*      <!-- Input field --> */}
              <div className="relative my-6">
                <input
                  id="id-b13"
                  type={`${hide2 ? "text" : "password"}`}
                  required
                  {...register("password")}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Retype Password
                </label>
                <div
                  onClick={() => setHide2(!hide2)}
                  className="absolute top-[9px] right-3 cursor-pointer"
                >
                  {!hide2 ? (
                    <BiHide className="text-xl" />
                  ) : (
                    <BiShowAlt className="text-xl" />
                  )}
                </div>
              </div>
              {/* আমি একজন */}
              <div className="flex justify-center gap-5 items-center mt-8">
                <p>I am</p>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio size-5"
                    value="Male"
                    {...register("gender")}
                  />
                  <label htmlFor="পুরুষ">Male</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio size-5"
                    value="Female"
                    {...register("gender")}
                  />
                  <label htmlFor="নারী">Female</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio size-5"
                    value="Others"
                    {...register("gender")}
                  />
                  <label htmlFor="নারী">Others</label>
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- Action base sized basic button --> */}
          <div className="flex justify-end p-4 ">
            <button className="inline-flex h-10 w-44 mx-auto items-center justify-center gap-2 whitespace-nowrap rounded bg-[#f85606] px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#9a471d] focus-visible:outline-none disabled:cursor-not-allowed  disabled:shadow-none">
              <span>Register</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold mb-2">Or</p>
            <Link
              to="/login"
              className="cursor-pointer text-xs font-bold text-[#f85606] hover:text-red-600"
            >
              Login
            </Link>
            <div className="w-44 bg-slate-200 hover:bg-slate-100 p-2 rounded mx-auto mt-5 mb-7">
              <button className="flex items-center gap-4 font-semibold text-black">
                <img className="size-7" src={logo} alt="" />
                Google Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;

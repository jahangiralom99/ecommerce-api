import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../components/title/Title";
import {
  addToProceed,
  formatDate,
  getStrdCart,
  postData,
  putCartDB,
} from "../utilities/functions";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  let proceedCart = getStrdCart("proceed");
  const { userData } = useContext(UserContext);
  const [isChecked, setIsChecked] = useState(false);
  const { register, handleSubmit } = useForm();
  const totalPrice = proceedCart.reduce((acc, item) => acc + item.amount, 0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = () => {
    proceedCart.forEach((item) => {
      item.delivery_date = formatDate();
    });

    let customerOrder = {
      customer: userData[0]?.name,
      transaction_date: formatDate(),
      custom_delivery_type: "",
      items: proceedCart,
    };

    postData("Sales Order", customerOrder)
      .then((isUser) => {
        if (isUser) {
          toast("Order is Created");
          addToProceed([], "cart");
          addToProceed([], "proceed");
          putCartDB(userData[0]?.customer_name, []).then((result) => {
            if (result) {
              location.reload();
              navigate("/");
            }
          });
        } else {
          console.log("Order is Not Created");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  return (
    <>
      <Title title="Checkout" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-xl mx-auto px-4 mt-6 pb-5"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[60%] mt-4 ">
            <h1 className="text-xl font-semibold ">BILLING & SHIPPING</h1>
            {/*From Start  */}
            <div className="mt-4">
              <div className="mt-6">
                <label className="text-[16px] font-semibold">
                  First name <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="text"
                  placeholder="Your Name"
                  value={userData[0]?.customer_name}
                  required
                  {...register("firstName")}
                />
              </div>
              {/* <div className="mt-6">
                <p>
                  Country / Region <span className="text-red-600">*</span>
                </p>
                <input className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6" type="text" placeholder="Country / Region" required {...register("country")} />
              </div> */}
              <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Street address <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="text"
                  placeholder="Street Address"
                  value={userData[0]?.primary_address}
                  required
                  {...register("address")}
                />
              </div>
              {/* <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  District <span className="text-red-600">*</span>
                </label>
                <br />
                <select className="select rounded-full select-bordered w-full bg-[#f5f5f5]  border-gray-300 border mt-2" required {...register("district")}>
                  <option disabled selected>
                    Select Your District
                  </option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Normal Orange">Normal Orange</option>
                  <option value="Normal Tomato">Normal Tomato</option>
                </select>
              </div> */}
              {/* <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Postcode / ZIP
                </label>
                <br />
                <input className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6" type="number" placeholder="1991" required {...register("postcode")} />
              </div> */}
              <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Phone <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="text"
                  placeholder="+8801*********"
                  value={userData[0]?.mobile_no}
                  required
                  {...register("phone")}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Email address <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="email"
                  placeholder="Email"
                  value={userData[0]?.email_id}
                  required
                  {...register("email")}
                />
              </div>
              {/* Password And Account */}
              {/* <div className="p-12 border-4 mt-6 rounded-md">
                <div className="mt-6">
                  <label htmlFor="" className="text-[16px] font-semibold">
                    Account username <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6" type="text" placeholder="Username" required {...register("username")} />
                </div>
                <div className="mt-6">
                  <label htmlFor="" className="text-[16px] font-semibold">
                    Create account password <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6" type="password" placeholder="Password" required {...register("password")} />
                </div>
              </div> */}
              {/* ADDITIONAL INFORMATION */}
              <div className="mt-6">
                <h1 className="text-2xl font-semibold ">
                  ADDITIONAL INFORMATION
                </h1>
                <p className="mt-4">ADDITIONAL INFORMATION (optional)</p>
                <div className="mt-4">
                  <textarea
                    className="textarea textarea-bordered bg-[#f5f5f5]  border-gray-300 border px-6"
                    placeholder="ADDITIONAL INFORMATION"
                    cols="35"
                    rows="4"
                    {...register("addition")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <h1 className="text-center text-2xl font-semibold">YOUR ORDER</h1>
            <div className="rounded bg-white p-6 mt-5">
              <div className="flex gap-4 justify-between items-center ">
                <p className="font-semibold">PRODUCT</p>
                <p className="font-semibold">SUBTOTAL</p>
              </div>
              <hr className="my-4" />

              {proceedCart.map((cart, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-gray-400"
                >
                  <p className="font-semibold text-sm">
                    {cart?.item_name} × {cart?.qty}
                  </p>
                  <p className="font-bold">{cart?.amount}৳</p>
                </div>
              ))}

              <hr className="mt-4" />
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="text-xl font-semibold text-[#db3a87]">
                  {totalPrice}৳
                </p>
              </div>
              <hr className="mt-4" />
              <div className="mt-5 flex items-center justify-between">
                <p className="font-semibold">Shipping</p>
                <p className="font-semibold">Delivery Charge (Free)</p>
              </div>
              <hr className="mt-4" />
              <div className="mt-5 flex items-center justify-between">
                <p className="font-semibold text-xl">Total</p>
                <p className="text-xl font-semibold text-[#db3a87]">
                  {totalPrice}৳
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p>Cash on delivery (DUE)</p>
              <div className="mt-4 bg-white p-5">
                <p className="font-semibold text-gray-400">
                  Pay with cash upon delivery.
                </p>
              </div>
              <div className="mt-6">
                <label className="cursor-pointer flex items-baseline gap-6">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-accent w-3 border-gray-500 h-3 rounded-none"
                    required
                  />
                  <p className="font-semibold">
                    I would like to receive exclusive emails with discounts and
                    product information
                  </p>
                </label>
              </div>
              <hr className="mt-4" />
              <p className="mt-4">
                I have read and agree to the websites{" "}
                <span className="text-[#8d3041] cursor-pointer hover:text-red-500 font-bold">
                  privacy policy.
                </span>
              </p>
              <hr className="mt-4" />
              <div className="mt-6">
                <label className="cursor-pointer flex items-baseline gap-6">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-accent w-3 border-gray-500 h-3 rounded-none"
                  />
                  <p className="font-semibold">
                    I have read and agree to the{" "}
                    <span className="text-[#8d3041] hover:text-red-500 font-bold">
                      website terms and conditions *
                    </span>
                  </p>
                </label>
              </div>
              <div className="bg-red-500 hover:bg-red-800 rounded-full text-center p-2 mt-6">
                <button className="text-white text-sm font-bold">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;

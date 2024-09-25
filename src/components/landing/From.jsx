import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { formatDate, postData } from "../../utilities/functions";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utilities/dataPanel";

const From = ({ formatStyle, landing }) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const [totalValue, setTotalValue] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    let customerOrder = {
      customer: userData[0]?.name,
      transaction_date: formatDate(),
      custom_delivery_type: "",
      total_taxes_and_charges: totalValue,
      items: [
        {
          item_code: landing[0]?.item_code,
          item_name: landing[0]?.item_name,
          qty: 1,
          rate: landing[0]?.standard_rate,
          amount: landing[0]?.standard_rate,
          uom: landing[0]?.stock_uom,
          delivery_date: formatDate(),
        },
      ],
    };

    postData("Sales Order", customerOrder)
      .then((isUser) => {
        if (isUser) {
          toast("Order is Created");
          navigate("/");
        } else {
          console.log("Order is Not Created");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-screen-xl mx-auto px-3 mt-8"
    >
      <div>
        <h1 className="text-3xl font-extrabold text-[#d3ac2b] text-center">
          {formatStyle("custom_heading_17")}
        </h1>
        <p className="text-xl font-extrabold max-w-screen-md mx-auto text-red-500 text-center mt-4 leading-10	">
          {formatStyle("custom_heading_18")}
        </p>
      </div>
      {/* From starts */}
      <section className="flex flex-col gap-6 md:flex-row justify-center mt-12 ">
        <div className="w-full md:flex-1">
          <div>
            <h1 className="text-xl font-semibold">Billing details</h1>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                আপনার নাম <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="text"
                value={userData[0]?.customer_name}
                {...register("name", { required: true })}
                placeholder="আপনার নাম লিখুন"
                id="text"
                autoComplete="text"
              />
              {errors.name && (
                <p className="text-red-600">আপনার নাম is Required</p>
              )}
            </div>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                আপনার ঠিকানা <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="text"
                value={userData[0]?.primary_address}
                {...register("address", { required: true })}
                placeholder="আপনার ঠিকানা লিখুন"
                id="text"
                autoComplete="text"
              />
              {errors.address && (
                <p className="text-red-600">আপনার ঠিকানা is Required</p>
              )}
            </div>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                মোবাইল নাম্বার <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="text"
                value={userData[0]?.mobile_no}
                {...register("number", { required: true })}
                placeholder="আপনার মোবাইল নাম্বার"
                id="number"
                autoComplete="number"
              />
              {errors.number && (
                <p className="text-red-600">মোবাইল নাম্বার is Required</p>
              )}
            </div>

            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                মেইল <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="mail"
                value={userData[0]?.email_id}
                {...register("mail", { required: true })}
                placeholder="আপনার মেইল"
                id="number"
              />
              {errors.number && (
                <p className="text-red-600">মেইল is Required</p>
              )}
            </div>
            {/* <div className="mt-4">
              <h4 className="text-xl lg:text-2xl font-semibold">
                Country / Region <span className="text-red-500">*</span>
              </h4>
              <h4 className="mt-3 font-bold">কালার * </h4>
              <div onChange={(e) => setValue(e.target.name)}>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="1" value="1" type="radio" name="ডিপ সি-গ্রীন কালার" />
                  <i className="pl-2">ডিপ সি-গ্রীন কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="2" value="2" type="radio" name="রোজ পিংক কালার" />

                  <i className="pl-2">রোজ পিংক কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="ব্ল্যাক কালার" />

                  <i className="pl-2">ব্ল্যাক কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="অলিভ কালার" />

                  <i className="pl-2">অলিভ কালার</i>
                </label>
              </div>
              <div className="mt-6">
                <h1 className="font-bold">সাইজ (optional)</h1>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="1" value="1" type="radio" name="52" />
                  <i className="pl-2">52</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="2" value="2" type="radio" name="54" />

                  <i className="pl-2">54</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="56" />

                  <i className="pl-2">56</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="কাস্টমাইজ" />

                  <i className="pl-2">কাস্টমাইজ</i>
                </label>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex-1 p-2">
          <h1 className="text-xl font-semibold">Your order</h1>
          <div className="flex justify-between items-center mt-7 px-3">
            <h1 className="font-semibold">Product</h1>
            <h1 className="font-semibold">Subtotal </h1>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="mt-5 flex items-center justify-between px-3 ">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12"
                src={`${base_url + landing[0]?.image}`}
              />
              <p>{landing[0]?.item_name}</p>
            </div>
            <p>× {landing[0]?.standard_rate} ৳ </p>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="mt-5 flex items-center justify-between px-3">
            <h1>Subtoal </h1>
            <p> {landing[0]?.standard_rate} ৳ </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p>Shipping</p>
            <div>
              <label
                onClick={() => setTotalValue(landing[0]?.standard_rate + 110)}
                className="flex px-3 py-2 my-3 cursor-pointer items-center"
              >
                <input
                  type="radio"
                  className=" accent-red-500 size-5"
                  value="110"
                  {...register("delivery")}
                />{" "}
                <span className="pl-2">ঢাকার বাহিরে: 110.00৳</span>
              </label>

              <label
                onClick={() => setTotalValue(landing[0]?.standard_rate + 60)}
                className="flex px-3 py-2 my-3 cursor-pointer items-center"
              >
                <input
                  type="radio"
                  className=" accent-red-500 size-5"
                  value="60"
                  {...register("delivery")}
                />{" "}
                <span className="pl-2">ঢাকার ভিতরে: 60.00৳</span>
              </label>
            </div>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="flex items-center justify-between mt-3">
            <h1 className="font-bold">Total </h1>
            <h1 className="font-bold">{totalValue}৳</h1>
          </div>
          <div className="bg-[#f7f7f7] mt-7 p-3">
            <h1>ক্যাশঅন ডেলিভারি</h1>
            <p className="mt-2">হাতে পন্য পেয়ে পেমেন্ট করুন</p>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </section>
      <div type="submit" className="text-center font-bold text-white mx-auto max-w-xl py-2 bg-[#F16200] hover:bg-[#cb590c] cursor-pointer">
        <button
         
        >
          Buy Products
        </button>
      </div>
    </form>
  );
};

export default From;

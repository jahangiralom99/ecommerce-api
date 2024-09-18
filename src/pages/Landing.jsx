import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../App";
import {
  FaCheck,
  FaRegArrowAltCircleRight,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import From from "../components/landing/From";
import Title from "../components/title/Title";
import { base_url } from "../utilities/dataPanel";
import image1 from "../assets/mixing.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import check from "../assets/check.webp";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Item = () => {
  const { name } = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === name);
    setLanding([itmFind]);
    setLoader(false);
  }, [name, itemData]);

  console.log(landing);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };

  return (
    <>
      <Title title="Item" />
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <section className="bg-[#F4F3EA] mt-3 py-5">
          {/* landing page 1  */}
          {landing[0]?.custom_select_landing_page === "Landing Page 1" ? (
            <section>
              {/* Top Bar Section */}
              <div className="mt-8 mx-auto max-w-screen-xl px-3">
                <h2 className="font-extrabold text-center text-2xl leading-8	">
                  {formatStyle("custom_heading_1")}
                  <span className="text-[#d3ac2b] ml-2">
                    {formatStyle("custom_heading_2")}{" "}
                  </span>{" "}
                  <br />
                  {formatStyle("custom_headings_3")}
                </h2>
                <div className="mt-8 text-center"></div>

                <div className="text-center mt-6 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
                  <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                    <FaShoppingCart />
                    অর্ডার করতে চাই
                  </button>
                </div>
                <h1 className="text-red-500 font-extrabold text-2xl text-center mt-8 ">
                  {formatStyle("custom_heading_4")}
                </h1>
              </div>

              {/* আবায়া-ই সাবিহা Section */}
              <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_1}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_1")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_2}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_2")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_3}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_3")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_4}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_4")}
                    </p>
                  </div>
                </div>
                <div></div>
              </section>
              {/* Order now section  */}
              <div className="max-w-screen-xl mx-auto p-3 text-center">
                <h1 className="font-extrabold text-3xl">
                  {formatStyle("custom_heading_5")}
                  <span className="relative">
                    {formatStyle("custom_heading_6")}
                    <svg
                      className="w-28 absolute -left-6 top-1 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill="red"
                        d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"
                      ></path>
                      <path
                        fill="red"
                        d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"
                      ></path>
                    </svg>
                  </span>
                  {formatStyle("custom_heading_7")}
                </h1>
                <h1 className="font-extrabold text-4xl mt-4 text-[#D3AC2B]">
                  {formatStyle("custom_heading_8")}
                  <span className="relative ml-2 mr-2 text-[#38b000]">
                    {formatStyle("custom_heading_9")}
                    <svg
                      className="w-44 absolute -left-8 -top-[68px] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 150 150"
                      preserveAspectRatio="none"
                    ></svg>
                  </span>
                  {formatStyle("custom_heading_7")}
                </h1>
                <h2 className="mt-5 text-red-500 text-2xl font-extrabold">
                  {formatStyle("custom_heading_10")}
                </h2>
                {/* <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div> */}
              </div>
              {/* card Section */}

              <section className="max-w-screen-xl mt-8 mx-auto p-5">
                <div>
                  <div className="md:ml-44">
                    <h1 className="font-extrabold text-3xl text-[#d3ac2b]">
                      {formatStyle("custom_heading_11")}
                    </h1>
                    <div className="flex items-center gap-2 mt-6">
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_12")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_13")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_14")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_15")}</p>
                    </div>
                  </div>
                  <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                    <button className="font-extrabold  md:px-[85px] px-[32px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                      <FaShoppingCart />
                      অর্ডার করতে চাই
                    </button>
                  </div>
                </div>
              </section>
              {/* --------------------- */}
              <section className="bg-[#F4F3EA] text-center mt-8 p-8">
                <div className="md:max-w-screen-xl md:mx-auto">
                  <h1 className="text-3xl font-extrabold text-[#d3ac2b]">
                    {formatStyle("custom_heading_16")}
                  </h1>
                  <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                    <button className="font-extrabold  md:px-[85px] px-[22px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                      <FaShoppingCart />
                      অর্ডার করতে চাই
                    </button>
                  </div>
                </div>
              </section>
            </section>
          ) : null}

          {/* landing page 2  */}
          {landing[0]?.custom_select_landing_page === "Landing Page 2" ? (
            <section>
              {/* Top Bar Section */}
              <div className="mt-8 mx-auto max-w-screen-xl px-3">
                <h2 className="font-extrabold text-center text-2xl leading-8	">
                  {formatStyle("custom_heading_1")}
                  <span className="text-[#d3ac2b] ml-2">
                    {formatStyle("custom_heading_2")}{" "}
                  </span>{" "}
                  <br />
                  {formatStyle("custom_headings_3")}
                </h2>
                <div className="mt-8 text-center"></div>

                <div className="text-center mt-6 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
                  <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                    <FaShoppingCart />
                    অর্ডার করতে চাই
                  </button>
                </div>
                <h1 className="text-red-500 font-extrabold text-2xl text-center mt-8 ">
                  {formatStyle("custom_heading_4")}
                </h1>
              </div>

              {/* আবায়া-ই সাবিহা Section */}
              <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_1}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_1")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_2}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_2")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_3}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_3")}
                    </p>
                  </div>
                  <div className="grid text-center justify-center border-2 border-[#d3ac2b]">
                    <img
                      src={`${base_url + landing[0]?.custom_upload_image_4}`}
                    />
                    <p className="font-extrabold p-2">
                      {formatStyle("custom_name_4")}
                    </p>
                  </div>
                </div>
                <div></div>
              </section>
              {/* Order now section  */}
              <div className="max-w-screen-xl mx-auto p-3 text-center">
                <h1 className="font-extrabold text-3xl">
                  {formatStyle("custom_heading_5")}
                  <span className="relative">
                    {formatStyle("custom_heading_6")}
                    <svg
                      className="w-28 absolute -left-6 top-1 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill="red"
                        d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"
                      ></path>
                      <path
                        fill="red"
                        d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"
                      ></path>
                    </svg>
                  </span>
                  {formatStyle("custom_heading_7")}
                </h1>
                <h1 className="font-extrabold text-4xl mt-4 text-[#D3AC2B]">
                  {formatStyle("custom_heading_8")}
                  <span className="relative ml-2 mr-2 text-[#38b000]">
                    {formatStyle("custom_heading_9")}
                    <svg
                      className="w-44 absolute -left-8 -top-[68px] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 150 150"
                      preserveAspectRatio="none"
                    ></svg>
                  </span>
                  {formatStyle("custom_heading_7")}
                </h1>
                <h2 className="mt-5 text-red-500 text-2xl font-extrabold">
                  {formatStyle("custom_heading_10")}
                </h2>
                {/* <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div> */}
              </div>
              {/* card Section */}

              <section className="max-w-screen-xl mt-8 mx-auto p-5">
                <div>
                  <div className="md:ml-44">
                    <h1 className="font-extrabold text-3xl text-[#d3ac2b]">
                      {formatStyle("custom_heading_11")}
                    </h1>
                    <div className="flex items-center gap-2 mt-6">
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                      <p className="h-3 w-6 bg-[#38B000]"></p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_12")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_13")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_14")}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 font-bold">
                      <FaCheckCircle className="text-2xl text-[#38B000]" />
                      <p>{formatStyle("custom_heading_15")}</p>
                    </div>
                  </div>
                  <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                    <button className="font-extrabold  md:px-[85px] px-[32px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                      <FaShoppingCart />
                      অর্ডার করতে চাই
                    </button>
                  </div>
                </div>
              </section>
              {/* --------------------- */}
              <section className="bg-[#F4F3EA] text-center mt-8 p-8">
                <div className="md:max-w-screen-xl md:mx-auto">
                  <h1 className="text-3xl font-extrabold text-[#d3ac2b]">
                    {formatStyle("custom_heading_16")}
                  </h1>
                  <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                    <button className="font-extrabold  md:px-[85px] px-[22px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                      <FaShoppingCart />
                      অর্ডার করতে চাই
                    </button>
                  </div>
                </div>
              </section>
            </section>
          ) : null}

          {/* landing page 3  */}
          {landing[0]?.custom_select_landing_page === "Landing Page 3" ? (
            <section>
              <div>
                {/* Banner start */}
                <div className="bg-[#2c6036] px-4 relative">
                  <div className="text-center pt-4 max-w-screen-xl mx-auto p-5 pb-28">
                    {/* <img className="inline" src={logo} alt="logo-image" /> */}
                    <h2 className="lg:text-5xl md:text-4xl border-4 font-bold p-4 mt-12 border-[#F1FF00] text-[#F1FF00] border-double">
                      {formatStyle("custom_head_1")}
                    </h2>
                    <h3 className="text-[#63E5FF] md:text-2xl font-bold mt-4">
                      {formatStyle("custom_head_2")}
                    </h3>
                  </div>
                  <div className="shapes -bottom-2 left-0"></div>
                </div>
                {/* youtube video  */}
                <div className="max-w-screen-xl mx-auto px-4">
                  <iframe
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    src="https://www.youtube.com/embed/qL4ByxSi5G8?si=AKYp0Ho8XH_HNJ70"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* common button */}
                <div className="mt-12 text-center">
                  <button className="bg-[#BB2121] md:text-3xl font-bold px-6 py-4 shadow-xl rounded-lg text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
                    অর্ডার করতে চাই
                  </button>
                </div>
                {/* text section  */}
                <div className="max-w-screen-xl mx-auto px-4 text-center mt-12">
                  <h1 className="bg-[#2c6036] rounded-xl p-8 text-white md:text-4xl font-bold shadow-lg">
                    {formatStyle("custom_text_3")}
                  </h1>
                </div>
                {/* Carosel or Swiper */}
                <div className="mt-12 max-w-screen-xl mx-auto px-4 ">
                  <div className="border-[9px] border-[#2c6036] p-12">
                    <h1 className="text-center  rounded-xl p-3 bg-[#2c6036] text-white md:text-3xl font-bold">
                      {formatStyle("custom_text_4")}
                    </h1>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      modules={[Pagination]}
                      className="mySwiper mt-12"
                    >
                      <SwiperSlide>
                        <img
                          src={`${
                            base_url + landing[0]?.custom_upload_text_image_1
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={`${
                            base_url + landing[0]?.custom_upload_text_image_2
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={`${
                            base_url + landing[0]?.custom_upload_text_image_3
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={`${
                            base_url + landing[0]?.custom_upload_text_image_1
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={`${
                            base_url + landing[0]?.custom_upload_text_image_2
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    {/* button  */}
                    <div className="mt-12 text-center">
                      <button className="bg-[#BB2121] md:text-3xl font-bold px-6 py-4 shadow-xl rounded-lg text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
                        অর্ডার করতে চাই
                      </button>
                    </div>
                  </div>
                </div>
                {/* ক্যালিগ্রাফী এর তৈরিকরণ  sections */}
                <div className="px-6">
                  <div className="max-w-screen-xl mx-auto px-4 mt-12 border-[9px] border-[#2c6036] p-12 font-bold text-xl">
                    {/*ক্যালিগ্রাফী এর তৈরিকরণ   */}
                    <div className="shadow-2xl p-5 rounded-2xl">
                      <h2 className="">{formatStyle("custom_text_5")}</h2>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_6")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_7")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_8")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_9")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_10")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_11")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_12")}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <img className="w-6" src={check} alt="" />
                        <p>{formatStyle("custom_text_13")}</p>
                      </div>
                    </div>
                    {/* Price Section */}
                    <div className="mt-5 shadow-2xl rounded-2xl bg-white ">
                      <img
                        className="lg:max-w-screen-md mx-auto"
                        src={`${
                          base_url + landing[0]?.custom_upload_text_image_4
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* landing page 4  */}
          {landing[0]?.custom_select_landing_page === "Landing Page 4" ? (
            <section>
              <div className="max-w-screen-xl mx-auto px-4 bg-white">
                {/* nav text */}
                <h1 className="text-6xl font-extrabold bg-[#183a1d] text-white p-4 text-center">
                  {formatStyle("custom_h_1")}
                </h1>
                <p className="mt-6 font-bold text-center">
                  {formatStyle("custom__text_2")}
                </p>
                {/* banner image */}
                <div className="mt-12">
                  <img
                    className="lg:max-w-screen-md mx-auto"
                    src={`${base_url + landing[0]?.custom_upload_}`}
                    alt=""
                  />
                </div>
                {/* button */}
                <div className="text-center mt-12 w-72 md:w-96 mx-auto">
                  <button className="bg-[#f0a04b] rounded-lg  flex flex-col md:flex-row items-center gap-3 px-10 py-3 text-2xl font-bold text-white">
                    <FaShoppingCart />
                    অর্ডার করতে চাই
                  </button>
                </div>
                <h1 className="text-3xl font-extrabold mt-10 bg-[#183a1d] text-white p-4 text-center">
                  {formatStyle("custom_home1_text_3")}
                </h1>
                {/* card section */}
                {/* card */}
                <div className="grid md:grid-cols-2 mt-12 lg:grid-cols-3 gap-6 p-8">
                  {/* card 1  */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_4")}
                    </p>
                  </div>
                  {/* card 2  */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_5")}
                    </p>
                  </div>
                  {/* card 3 */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_6")}
                    </p>
                  </div>
                  {/* card 4  */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_7")}
                    </p>
                  </div>
                  {/* card 5  */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_8")}
                    </p>
                  </div>
                  {/* card 6  */}
                  <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
                    <img className="w-12 inline" src={image1} alt="" />
                    <p className="text-xl font-bold">
                      {formatStyle("custom_home_text_9")}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* landing page 5  */}
          {landing[0]?.custom_select_landing_page === "Landing Page 5" ? (
            <section>
              <div className="max-w-screen-xl mx-auto px-4">
                {/* Banner section */}
                <div className="flex flex-col md:flex-row p-3 md:p-8 gap-8 justify-center ">
                  <div className="md:flex-1">
                    {/* Banner text */}
                    <h1 className="font-bold text-2xl  ">
                      {formatStyle("custom_text_1")}
                    </h1>
                    <button className="px-5 text-sm flex items-center gap-3 py-2 bg-[#F16200] text-white font-bold mt-5 rounded">
                      অর্ডার করতে ক্লিক করুন <FaRegArrowAltCircleRight />
                    </button>
                  </div>
                  <div className="md:flex-1">
                    {/* youtube links  */}
                    <iframe
                      className="w-full h-[400px]"
                      src="https://www.youtube.com/embed/hFw8-EAA11k?si=94lfHiVbRrBQBzAp"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                {/* swiper Section */}
                <div className="mt-12">
                  <h1 className="text-4xl font-bold">
                    {formatStyle("custom_text_2")}
                  </h1>
                  <div className="flex flex-col md:flex-row p-5 mt-6 gap-6">
                    <div className="md:w-[50%]">
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_1
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_2
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_3
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_1
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_2
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={`${
                              base_url + landing[0]?.custom_upload_head_text_3
                            }`}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold">
                        {formatStyle("custom_head1_text_3")}
                      </h1>
                      <div className="font-semibold">
                        <p className="flex items-center gap-3 text-sm mt-8">
                          <FaCheck className="text-[#ffc400]" />
                          {formatStyle("custom_head_text_4")}
                        </p>
                        <p className="flex items-center gap-3 text-sm mt-3">
                          <FaCheck className="text-[#ffc400]" />
                          {formatStyle("custom_head_text_5")}
                        </p>
                        <p className="flex items-center gap-3 text-sm mt-3">
                          <FaCheck className="text-[#ffc400]" />
                          {formatStyle("custom_head_text_6")}
                        </p>
                        <p className="flex items-center gap-3 text-sm mt-3">
                          <FaCheck className="text-[#ffc400]" />
                          {formatStyle("custom_head_text_7")}
                        </p>
                        <p className="flex items-center gap-3 text-sm mt-3">
                          <FaCheck className="text-[#ffc400]" />
                          {formatStyle("custom_head_text_8")}
                        </p>
                      </div>
                      <button className="px-5 text-sm flex items-center gap-3 py-2 bg-[#F16200] text-white font-bold mt-5 rounded">
                        অর্ডার করতে ক্লিক করুন <FaRegArrowAltCircleRight />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Price details  */}
                <div className="mt-12">
                  <h1 className="relative text-3xl md:text-5xl text-[#110C61] font-bold text-center lg:leading-loose">
                    {formatStyle("custom_head_text_9")}
                    <span className="absolute left-36 md:left-64 lg:left-[560px] lg:top-[120px]">
                      <svg
                        className="md:w-44 w-28 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"
                          fill="red"
                        ></path>
                        <path
                          d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"
                          fill="red"
                        ></path>
                      </svg>
                    </span>
                  </h1>
                </div>

                {/* প্রয়োজনে কল করুন */}
                <div className="border-2 p-4 rounded-lg border-[#F16200] mt-8 text-center">
                  <h2 className="md:text-3xl  font-bold text-[#F16200]">
                    {formatStyle("custom_head_text_10")}
                  </h2>
                </div>
              </div>
            </section>
          ) : null}

          {/* landing page 6 */}
          {landing[0]?.custom_select_landing_page === "Landing Page 6" ? (
            <section>
              <div className="pt-24">
                <div className="relative max-w-screen-xl mx-auto px-6 bg-white">
                  <div className="pt-6 text-center">
                    <h1 className="text-3xl font-bold">
                      {formatStyle("custom_head_text_1")}
                    </h1>
                    <div className="mt-12 max-w-screen-lg mx-auto">
                      <iframe
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                        src="https://www.youtube.com/embed/BX548LuZA4Y?si=45xHXdtJE4iVpL3X"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="mt-8">
                      <h1 className="text-[#FFA000] text-2xl font-bold text-center ">
                        {formatStyle("custom_head_text_2")}
                      </h1>
                    </div>
                    {/* common button */}
                    <div className="mt-12 text-center">
                      <button className="bg-[#2c6036] text-xl md:text-3xl font-bold px-6 py-4 shadow-xl rounded-full text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
                        অর্ডার করতে চাই
                      </button>
                    </div>
                  </div>
                  {/* FAQ Section */}
                  <div className="relative">
                    <div className="bg-[#008037] p-8 mt-12 pb-28">
                      <h1 className="text-2xl text-white ">
                        {formatStyle("custom_head_text_3")}
                      </h1>
                      {/* faq start */}
                      <div className="px-6">
                        <div className="join join-vertical w-full mt-12 text-white">
                          <div className="collapse collapse-arrow join-item  border">
                            <input
                              type="radio"
                              name="my-accordion-4"
                              defaultChecked
                            />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_hea1_text_4")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_5")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_6")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_7")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_8")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_9")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_10")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_11")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_12")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_13")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_14")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_15")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_16")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_17")}</p>
                            </div>
                          </div>
                          <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                              {formatStyle("custom_head1_text_18")}
                            </div>
                            <div className="collapse-content">
                              <p>{formatStyle("custom_head1_text_19")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* svg path  */}
                    <div className="absolute -bottom-0 w-full left-0 rotate-180">
                      <svg
                        fill="#FFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 19.6"
                        preserveAspectRatio="none"
                      >
                        <path
                          className="elementor-shape-fill opacity-40"
                          d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                        ></path>
                        <path
                          className="elementor-shape-fill opacity-40"
                          d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                        ></path>
                        <path
                          className="elementor-shape-fill opacity-40"
                          d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                        ></path>
                        <path
                          className="elementor-shape-fill opacity-40"
                          d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Pricing  */}
                  <div className="mt-12 bg-white max-w-screen-xl mx-auto pt-12">
                    <h1 className="text-center text-3xl font-bold">Pricing</h1>
                    {/* card for pricing*/}
                    <div className="max-w-screen-lg  p-5 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                      {/* card 1 */}
                      <div className="border text-center p-7 space-y-5 box ">
                        <h2 className="text-2xl font-bold text-[#008037]">
                          {formatStyle("custom_head1_text_23")}
                        </h2>
                        <h1 className="text-4xl font-bold">
                          {formatStyle("custom_head1_text_24")}
                        </h1>
                        <p className="text-xl text-[#008037] font-medium">
                          {formatStyle("custom_head1_text_25")}
                        </p>
                      </div>
                      {/* card 2 */}
                      <div className="border text-center p-7 space-y-5 box ">
                        <h2 className="text-2xl font-bold text-[#008037]">
                          {formatStyle("custom_head1_text_26")}
                        </h2>
                        <h1 className="text-4xl font-bold">
                          {formatStyle("custom_head1_text_27")}
                        </h1>
                        <p className="text-xl text-[#008037] font-medium">
                          {formatStyle("custom_head1_text_28")}
                        </p>
                      </div>
                      {/* card-3 */}
                      <div className="border text-center p-7 space-y-5 box ">
                        <h2 className="text-2xl font-bold text-[#008037]">
                          ট্রায়াল কোর্স – ২০০ মিলি তেল
                        </h2>
                        <h1 className="text-4xl font-bold">৬০০ টাকা</h1>
                        <p className="text-xl text-[#008037] font-medium">
                          (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি
                          চার্জ যোগ হবে)
                        </p>
                      </div>
                    </div>
                    {/* text */}
                    <h3 className="text-[#008037] p-5 text-3xl font-bold text-center">
                      শত শত মানুষের উপকার পাওয়ার রিভিউ আমাদের ফেসবুক পেইজে আছে।
                      তার মধ্যে থেকে কিছু রিভিউ এখানে দেয়া হলঃ
                    </h3>
                    {/* image comments */}
                    {/* <div className="text-center mt-12 max-w-screen-xl mx-auto px-5">
                <img className="inline" src={logo} alt="" />
              </div> */}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* React Feom used */}
          <From formatStyle={formatStyle} landing={landing} />
        </section>
      )}
    </>
  );
};

export default Item;

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import {Scrollbar} from "swiper/modules";

import mobileImg from "../../assets/mobile2.avif";

const PopularItem = () => {
  return (
    <div className="bg-stone-300 md:hidden block ">
      <div className="flex justify-between px-2 ">
        <p className="text-sm py-3 text-blue-800 font-bold">Popular Catagory</p>
        <p className="text-sm py-3 text-blue-800 font-bold">All Category</p>
      </div>
      <div className=" pb-5 ">
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          modules={[Scrollbar]}
          className="mySwiper pb-5">
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center ">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
                <img className="w-10 rounded-full" src={mobileImg} alt="" />
              </div>
              <div className="text-xs">gadget</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularItem;

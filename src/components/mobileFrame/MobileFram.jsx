import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import {Scrollbar} from "swiper/modules";

const MobileFram = () => {
  return (
    <div className="bg-stone-300 py-3 px-2">
      <div className="md:hidden block ">
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
          className="mySwiper">
          <SwiperSlide>
            <img className="w-20 pb-5" src="https://static.ajkerdeal.com/images/muslim-fashion/logo.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame6} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-20 pb-5" src={frame2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileFram;

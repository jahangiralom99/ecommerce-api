import { FaChevronRight } from "react-icons/fa";
import banner from "../../assets/banner.jpg";
import banner3 from "../../assets/banner3.avif";
// import payment from '../../assets/payment4.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = ({ grpData }) => {
  return (
    <div className="flex relative m-0 p-0">
      <div className="bg-[#576BB2] h-80 lg:w-32 xl:block hidden mt-3"></div>
      <div className="flex flex-col-reverse md:flex-row mt-3">
        <div className="hidden md:block bg-white mx-auto h-80 w-60 pt-2 border-b-2 lg:flex">
          <div className="bg-[#576BB2] h-80 lg:w-8 lg:-mt-2 xl:hidden lg:block hidden "></div>
          <ul className="w-60">
            {grpData
              .filter((main) => main.is_group == 0)
              .slice(0, 10)
              .map((grp, idx) => (
                <Link to={`/category/${idx}`} key={idx}>
                  <li className="py-[1px] flex justify-between items-center px-2">
                    <a href="#">{grp.name}</a>
                    <FaChevronRight className="opacity-60 text-xs" />
                  </li>
                </Link>
              ))}

            <Link to="/allCategory">
              <li className="py-[1px] flex justify-between items-center px-2">
                <a href="#">All Categories &gt;&gt;</a>
              </li>
            </Link>
          </ul>
        </div>
        <img
          className="md:block hidden md:h-80 lg:w-[790px] md:w-[480px] z-10"
          src={banner}
          alt=""
        />
      </div>

      {/* carousel for mobile view */}
      <div className="md:hidden block">
        <Carousel
          showThumbs={false}
          autoPlay
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover={false}
          interval={5000}
          showIndicators={false}
        >
          <div>
            <img className="h-44 bg-cover" src={banner} />
          </div>
          <div>
            <img className="h-44 bg-cover" src={banner3} />
          </div>
        </Carousel>
      </div>

      {/* carousel for mobile view */}
      <div className="bg-[#576BB2] h-80 lg:w-[400px] md:w-72 md:block  hidden mt-3 absolute right-[1px] "></div>
    </div>
  );
};

export default Banner;

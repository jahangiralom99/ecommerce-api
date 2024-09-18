import {FaChevronRight} from "react-icons/fa";
import {FaBangladeshiTakaSign} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {WebContext} from "../../App";
import {base_url} from "../../utilities/dataPanel";

const Motorbike = () => {
  const webItmData = useContext(WebContext);
  return (
    <div className="bg-[#808080] max-w-[1200px] mx-auto px-5 mt-10 md:block hidden">
      <div className="flex justify-between px-2 ">
        <h1 className="text-white text-2xl pt-2">Motor Bike</h1>
        <p className="flex gap-2 justify-center items-center text-white text-xs">
          More <FaChevronRight />
        </p>
      </div>

      {/* card start */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex justify-center items-center flex-wrap gap-5 place-items-center py-5 ">
        {webItmData
          .filter((item) => item.item_group === "iPhone Repair")
          .map((item, idx) => (
            <Link to={`../item/${item.item_code}`} key={idx}>
              <div className="bg-white ">
                <div className="flex justify-end">
                  <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 md:w-48 mb-5" src={`${base_url + item.website_image}`} alt="" />
                <p className="pl-1">{item.web_item_name.length > 14 ? `${item.web_item_name.substring(0, 14)}...` : item.web_item_name}</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2">
                  <FaBangladeshiTakaSign /> 1,80,000 /-
                </p>
              </div>
            </Link>
          ))}
      </div>

      {/* card end */}
    </div>
  );
};

export default Motorbike;

import {FaChevronRight} from "react-icons/fa";
import {FaBangladeshiTakaSign} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {WebContext} from "../../App";
import {base_url} from "../../utilities/dataPanel";

const Consumable = ({grp, idx, itemData}) => {
  const webItmData = useContext(WebContext);

  const rate = (id) => {
    let fil = itemData.find((item) => item.item_code === id);
    return fil?.standard_rate;
  };

  return (
    <div className="">
      <div className="hidden md:block">
        {/* nav start */}
        <div className="navbar bg-[#EBEBEB] flex md:flex-row flex-col h-1 my-4">
          <div className="flex-1  md:inline-block text-base font-bold text-[#0071AC] hover:text-black pl-2">{grp}</div>

          {/* search start */}
          <div className="flex justify-center items-center ">
            <div className="navbar-end flex justify-center">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered  md:w-42 w-36 h-8 rounded-none rounded-l-sm bg-[#FFFFFF]" />
              </div>
              <div>
                <button className=" bg-[#4D4D4D] h-8 w-10 flex justify-center items-center text-white rounded-none rounded-r-sm md:mr-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* search end */}

              <Link to={`/category/${idx}`}>
                <div className="flex justify-center items-center text-[#F26734] gap-5 pl-3">
                  All <FaChevronRight />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* nav end */}

        {/* card start */}
        <div className="flex justify-center items-center max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-center items-center gap-1 max-w-[1200px] flex-wrap">
            {webItmData
              .filter((item) => item.item_group === grp)
              .slice(0, 12)
              .map((item, idx) => (
                <Link to={`../item/${item.item_code}`} key={idx}>
                  <div className="border-2  h-[210px] bg-white">
                    <img className="w-48 h-40" src={`${base_url + item.website_image}`} alt="" />
                    <p className="font-bold text-sm text-center">{item.web_item_name.length > 14 ? `${item.web_item_name.substring(0, 14)}...` : item.web_item_name}</p>
                    <p className="flex justify-center items-center gap-1 pl-2">
                      <FaBangladeshiTakaSign />
                      <p className="font-semibold">{rate(item?.item_code)}</p>
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* card end */}
      </div>
    </div>
  );
};

export default Consumable;

import gadgets from "../../assets/gadgets.svg";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { base_url } from "../../utilities/dataPanel";

const Gadgets = (props) => {
  const { grpData, webItmData, itemData } = props;
  const [tabIndex, setTabIndex] = useState(0);

  const rate = (id) => {
    let fil = itemData?.data?.find((item) => item.item_code === id);
    return fil?.standard_rate;
  };

  return (
    <div className=" my-10 md:bg-[#F5F5F5] pb-2 border-t-2 md:border-none border-blue-300">
      <div className=" mx-auto">
        <div className="flex justify-between items-center px-2 pb-1 md:pb-0">
          <div className="">
            <img
              className="md:w-44 w-32 md:mt-0 -mt-7 bg-white md:bg-transparent"
              src={gadgets}
              alt=""
            />
          </div>
          <div className="border-b-[#F05A2D] md:border-b-2 p-1 md:mt-0 -mt-4">
            <Link to="/allCategory">
              <button className="bg-blue-400 flex justify-center items-center gap-1 md:text-black md:bg-transparent text white rounded-2xl md:rounded-none text-white w-10">
                All
                <FaChevronRight className="text-[#F05A2D] hidden md:block" />
              </button>
            </Link>
          </div>
        </div>

        {/* tab part start */}
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className=" "
        >
          <TabList
            role="tablist"
            className="flex justify-center gap-1 py-2 flex-wrap "
          >
            {grpData?.data
              ?.filter((filter) => filter.is_group == 0)
              ?.slice(10, 20)
              ?.map((grp, index) => (
                <Tab
                  key={index}
                  role="tab"
                  className="tabs-bordered flex justify-center px-3 py-1  md:text-sm  text-xs border  bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300"
                >
                  {grp?.name}
                </Tab>
              ))}
          </TabList>

          {grpData?.data
            ?.filter((filter) => filter.is_group == 0)
            .slice(10, 20)
            .map((grp, index) => (
              <TabPanel key={index} className="bg-transparent md:my-5 my-2 ">
                <div className="flex justify-center items-center">
                  <div className="grid xl:grid-col-8 grid-cols-2 md:grid-cols-4 gap-2">
                    {webItmData?.data
                      ?.filter((item) => item.item_group === grp.name)
                      ?.slice(0, 4)
                      ?.map((itm, index) => (
                        <Link key={index} to={`/item/${itm?.item_code}`}>
                          <div className="border-2 hover:shadow-lg bg-white">
                            <img
                              className="md:w-48 md:h-40 w-full h-full"
                              src={`${base_url + itm?.thumbnail}`}
                              alt=""
                            />
                            <div className="flex justify-center items-center md:flex-col md:text-sm text-[15px]">
                              {/* name */}
                              <p className="flex justify-start items-center gap-1 md:pl-2">
                                <p className="font-bold">
                                  {itm?.item_name.slice(0, 18)}..
                                </p>
                              </p>
                              <p className="flex justify-start items-center gap-1 md:pl-2">
                                <FaBangladeshiTakaSign className="hidden md:block" />
                                <p className="font-bold">
                                  {rate(itm?.item_code)}
                                </p>
                              </p>
                              <del className="flex items-center md:opacity-30 opacity-80 md:-mt-2 pl-1">
                                <FaBangladeshiTakaSign className="opacity-70 hidden md:block" />
                                <p className="">{rate(itm?.item_code)}</p>
                              </del>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </TabPanel>
            ))}
        </Tabs>

        {/* tab part end */}
      </div>
      <div className="md:flex md:justify-end mr-10 hidden lg:mr-20">
        <Link to="/allCategory">
          <button className="flex justify-center items-center gap-2 font-medium p-2 bg-[#F26734] text-white ">
            More <FaChevronDown className="opacity-80" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gadgets;

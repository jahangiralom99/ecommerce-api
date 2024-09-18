import { useContext, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import category1 from "../assets/category1.png";
import { FaChevronDown } from "react-icons/fa";

import { Link } from "react-router-dom";
import { GroupsContext } from "../App";

const AllCategory = () => {
  const grpData = useContext(GroupsContext);
  const [hoveredName, setHoveredName] = useState("");

  return (
    <div className="bg-[#F2F2F2] p-10 ">
      <div className="bg-white max-w-[1100px] mx-auto p-3 pb-32 ">
        <div className="flex justify-start items-center gap-2 text-xl text-[#F15B2D] py-5">
          <div>
            <TfiMenuAlt />
          </div>
          <div>সকল ক্যাটাগরি</div>
        </div>

        <hr className="pt-5" />

        {/* category div start */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {grpData
            .filter((main) => main.is_group == 1 && main.name !== "Grocery")
            .map((grp, idx) => (
              <div key={idx} className="group relative cursor-pointer">
                <div
                  className="flex justify-between items-center"
                  onMouseEnter={() => setHoveredName(grp.name)}
                >
                  <div className="flex justify-center items-center gap-3">
                    <a href="#">
                      <img className="w-7" src={category1} alt="" />
                    </a>
                    <a href="#" className="text-sm hover:text-[#F15B2D]">
                      {grp.name}
                    </a>
                  </div>
                  <a href="#">
                    <FaChevronDown className="text-blue-500 text-sm " />
                  </a>
                </div>

                <hr />
                {/* sub category start */}
                <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                  {grpData
                    .filter((main) => main.is_group === 0)
                    .map((grp, idx) =>
                      grp.parent_item_group == hoveredName ? (
                        <Link to={`/category/${idx}`} key={idx}>
                          <li className="mb-2 hover:text-[#F15B2D]">
                            {grp.name}
                            <hr />
                          </li>
                        </Link>
                      ) : null
                    )}
                </ul>
                {/* sub category end */}
              </div>
            ))}
        </div>
        {/* category div end */}
      </div>
    </div>
  );
};

export default AllCategory;

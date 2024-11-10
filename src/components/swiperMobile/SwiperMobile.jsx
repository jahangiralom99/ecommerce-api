import { useContext } from "react";
import { GroupsContext } from "../../App";
import { Link } from "react-router-dom";
import { base_url } from "../../utilities/dataPanel";

const SwiperMobile = () => {
  const grpData = useContext(GroupsContext);
  return (
    <div className="mt-3 md:hidden flex overflow-x-scroll gap-7 pb-3 pt-3 px-5">
      {grpData?.data?.map((group, index) => (
        <Link to={`/category/${index}`} key={index}>
          <div className="flex justify-center items-center flex-col">
            <div className="border-2 w-20 bg-white rounded-full flex justify-center items-center">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={`${base_url + group?.image}`}
                alt=""
              />
            </div>
            <div className="text-xs">
              {group.name.length > 5
                ? `${group.name.slice(0, 10)}...`
                : group.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SwiperMobile;

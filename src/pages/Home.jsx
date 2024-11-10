import { useContext } from "react";
import { GroupsContext, ItemContext, WebContext } from "../App";
import Title from "../components/title/Title";
import Banner from "../components/banner/Banner";
import SwiperMobile from "../components/swiperMobile/SwiperMobile";
import HotDeal from "../components/hotDeal/HotDeal";
import Gadgets from "../components/gadgets/Gadgets";
import Consumable from "../components/consumable/Consumable";

const HomeMain = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);

  console.log(grpData);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Title title="Home" />
      <Banner grpData={grpData} />
      <SwiperMobile />
      <div className="bg-[#F5F5F5]">
        <HotDeal
          grpData={grpData}
          webItmData={webItmData}
          itemData={itemData}
        />
        <Gadgets
          grpData={grpData}
          webItmData={webItmData}
          itemData={itemData}
        />
        {grpData?.data
          ?.filter(
            (filter) => filter.is_group == 0 && filter.show_in_website == 1
          )
          ?.map((grp, idx) => (
            <Consumable
              key={idx}
              grp={grp.name}
              idx={idx}
              itemData={itemData}
            />
          ))}
      </div>
      {/* <MobileFram />
      <PopularItem /> */}
    </div>
  );
};

export default HomeMain;

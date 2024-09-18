import { useContext } from "react";
import Banner from "../components/banner/Banner";
import MobileFram from "../components/mobileFrame/MobileFram";
import PopularItem from "../components/popularItem/PopularItem";
import SwiperMobile from "../components/swiperMobile/SwiperMobile";
import Title from "../components/title/Title";
import { GroupsContext, ItemContext, WebContext } from "../App";
import Gadgets from "../components/gadgets/Gadgets";
import Consumable from "../components/consumable/Consumable";
import HotDeal from "../components/hotDeal/HotDeal";

const HomeMain = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);

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
        {grpData
          .filter((filter) => filter.is_group == 0)
          .map((grp, idx) => (
            <Consumable
              key={idx}
              grp={grp.name}
              idx={idx}
              itemData={itemData}
            />
          ))}
      </div>
      <MobileFram />
      <PopularItem />
    </div>
  );
};

export default HomeMain;

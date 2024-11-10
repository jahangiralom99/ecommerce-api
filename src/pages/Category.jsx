import { useContext, useEffect, useState } from "react";
import { GroupsContext, WebContext } from "../App";
import { CiHeart } from "react-icons/ci";
import Title from "../components/title/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useParams } from "react-router-dom";
import { base_url } from "../utilities/dataPanel";

const Category = () => {
  const { id } = useParams();
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const [tabIndex, setTabIndex] = useState();
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  useEffect(() => {
    let index = id ? parseInt(id) : 0;
    setTabIndex(index);
    setCheckedIndexes([index]);
  }, [id]);

  let itmCount = (grp) => {
    let filteredItems = webItmData?.data?.filter(
      (item) => item.item_group === grp
    );
    return filteredItems.length;
  };

  let handleActive = (index) => {
    setCheckedIndexes((prevState) =>
      prevState.includes(index) ? prevState.filter((i) => i !== index) : [index]
    );
  };

  return (
    <>
      <Title title="Category" />
      <div className="max-w-screen-xl mx-auto px-4 mt-4">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="flex flex-col md:flex-row gap-6 mt-8"
        >
          <div className="md:w-[20%] bg-white p-5 rounded">
            <h1 className="text-sm">ফিল্টার</h1>
            <hr className="mt-4" />
            <div className="mt-4">
              <p className="font-bold text-xs">সাব ক্যাটাগরি</p>
              <TabList
                role="tablist"
                className="h-[calc(100vh-200px)] overflow-auto"
              >
                {grpData?.data
                  ?.filter((main) => main.is_group == 0)
                  ?.map((grp, index) => (
                    <Tab
                      key={index}
                      role="tab"
                      onClick={() => handleActive(index)}
                      className="form-control flex-row items-center gap-1 mt-2 cursor-pointer focus:outline-0"
                    >
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={checkedIndexes.includes(index)}
                          className="checkbox checkbox-xs rounded-none checkbox-accent"
                        />
                      </label>
                      <p className="text-xs">{grp.name}</p>
                    </Tab>
                  ))}
              </TabList>
            </div>
          </div>

          <div className="md:w-[80%] bg-white p-5 rounded">
            {grpData?.data
              ?.filter((main) => main.is_group == 0)
              .map((grp, index) => (
                <TabPanel key={index} className="bg-transparent  ">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <h2 className="text-[18px] font-medium">
                      {grp?.name} - {itmCount(grp?.name)} টি
                    </h2>
                    <div>
                      <select className="select select-bordered select-xs w-52">
                        <option value="sort">নতুন</option>
                        <option value="popular">জনপ্রিয়</option>
                        {/* <option value="lowToHigh">দাম : সবচেয়ে কম থেকে বেশী</option> */}
                        {/* <option value="highToLow">দাম : সবচেয়ে বেশী থেকে কম</option> */}
                      </select>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
                    {webItmData?.data
                      ?.filter((item) => item?.item_group === grp?.name)
                      .map((item, idx) => (
                        <Link to={`/item/${item.item_code}`} key={idx}>
                          <div className="text-center relative space-y-2 rounded hover:shadow-md p-2 hover:border">
                            <img
                              className="w-full"
                              src={`${base_url + item.website_image}`}
                              alt=""
                            />
                            <div className="absolute cursor-pointer top-1 right-9 border rounded-full bg-white">
                              <CiHeart className="text-2xl" />
                            </div>
                            <p className="text-xs">{item.web_item_name}</p>
                            <p className="text-xs">{item.creation}</p>
                            {/* <p className="text-xs text-red-500 font-bold">৳{item.price}</p> */}
                          </div>
                        </Link>
                      ))}
                  </div>
                </TabPanel>
              ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Category;

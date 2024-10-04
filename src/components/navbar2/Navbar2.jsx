import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoIosHeartEmpty, IoIosLogOut } from "react-icons/io";
import category1 from "../../assets/category1.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext, GroupsContext, UserContext } from "../../App";
import logo from "../../assets/ad-logo (1).svg";
import { addToProceed } from "../../utilities/functions";
import { toast } from "react-toastify";
import { base_url, fetch_url, header } from "../../utilities/dataPanel";
import { MdLogout } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Navbar2 = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const grpData = useContext(GroupsContext);

  const logOut = () => {
    // Clear user session and cart data
    addToProceed(null, "token"); // Remove the token
    addToProceed(null, "cart"); // Remove the cart
    setUser(""); // Reset the user state
    setCartItems(0); // Reset cart items count

    // Provide user feedback
    toast("Logged out successfully");

    // Redirect to the login page or home page
    navigate("/login");
  };

  // handle Search btn
  const handleSearch = async () => {
    const query = encodeURIComponent(
      `[["item_name", "like", "%${searchQuery}%"]]`
    );
    const url = `${fetch_url}/gets/Item?filters=${query}&fields=["*"]`;

    try {
      const groupsData = await fetch(url, {
        method: "GET",
        headers: header,
      });

      const data = await groupsData.json();
      console.log(data);
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="bg-base-100 max-w-screen-xl mx-auto md:w-full flex  items-center md:pt-10 p-2 px-4">
        <div className="flex-1">
          <Link to="/">
            <img className="md:w-28 w-20 " src={logo} alt="logo" />
          </Link>
        </div>

        {/* search start */}
        <div className="flex justify-center items-center relative">
          <div className="navbar-end flex justify-center gap-4 pt-2">
            <div onChange={handleSearch} className="form-control">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" lg:w-[350px] md:w-[200px] w-32 rounded-none  bg-[#F5F5F5] md:block  py-[5px] md:py-2 px-4 border"
              />
            </div>
            {/* Display search results */}
            <div className="bg-white absolute overflow-y-scroll top-14 z-50 left-0">
              {searchResult.length > 0 && searchQuery && (
                <ul className="h-44 md:w-96">
                  {searchResult.map((item, index) => (
                    <Link
                      to={`/item/${item?.item_code}`}
                      className="p-4 flex items-center gap-3 hover:border"
                      key={index}
                    >
                      <img
                        className="w-24 h-12 object-contain"
                        src={base_url + item.image}
                        alt={item.name}
                      />
                      <p>{item.item_name}</p>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            <div className="md:flex hidden">
              <button className="border py-[10px] px-5 md:mr-32 bg-[#F26734] hover:bg-[#cd3e0a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* search end */}

            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <div className="flex justify-center items-center gap-5 ">
                    {/* login option */}
                    {user ? (
                      <div className="md:flex items-center gap-3 hidden">
                        <Link to="/cart">
                          <div className="indicator pr-2">
                            <FaShoppingCart className="text-[22px] hover:text-[#f96331]" />
                            <span className="bg-[#F26734] text-white badge badge-md absolute top-[-12px] md:left-3 left-2">
                              {cartItems}
                            </span>
                          </div>
                        </Link>
                        <Link
                          data-tip="Profile"
                          className="lg:tooltip lg:tooltip-bottom hover:text-[#f96331]"
                          to="/profile"
                        >
                          <FaRegUserCircle className="text-2xl" />
                        </Link>
                        {/* <button
                          onClick={() => logOut()}
                          className="md:hover:bg-[#f96331] hover:text-white hidden  btn md:flex justify-center  rounded-none bg-transparent border-[#f96331]"
                        >
                          Log Out
                        </button> */}
                        <button
                          onClick={() => logOut()}
                          data-tip="logout"
                          className="lg:tooltip lg:tooltip-bottom"
                        >
                          <MdLogout className="text-2xl hover:text-[#f96331]" />
                        </button>
                      </div>
                    ) : (
                      <Link
                        className="border p-2 rounded-full hover:text-[#f96331]"
                        to="/login"
                      >
                        <FaUserPen className="text-2xl" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  justify-center items-center gap-3">
              {/* <div className="md:hidden">
                <IoIosHeartEmpty className="text-xl" />
              </div> */}
              {user ? (
                <div
                  onClick={() => logOut()}
                  data-tip="logout"
                  className="md:hidden hover:text-[#F05A2D] cursor-pointer tooltip tooltip-bottom"
                >
                  <CiLogout className="text-xl " />
                </div>
              ) : null}
              {/*mobile  drawer */}
              <div className="drawer md:hidden">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className=" drawer-button">
                    <div className="md:hidden">
                      <BsThreeDotsVertical />
                    </div>
                  </label>
                </div>
                <div className="drawer-side z-10">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu  w-64  min-h-full bg-white text-base-content">
                    {/* Sidebar content here */}
                    {/* <div className="fixed">
                      <ul className="text-lg">
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                          <a>Merchant Corner</a>
                        </li>
                        <li>
                          <a>Track Order</a>
                        </li>
                        <li>
                          <a>Refund Policy</a>
                        </li>
                        <li>
                          <a>Replacement Policy</a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="fixed top-0 left-0 w-full bg-[#F05A2D] text-white text-center text-xl p-2 ">
                      Category
                    </div>

                    <div className="pt-12">
                      <ul className="flex flex-col gap-4">
                        {grpData
                          .filter((main) => main.is_group == 0)
                          ?.slice(0, 10)
                          .map((item, idx) => {
                            return (
                              <div
                                key={item.id}
                                className="group relative cursor-pointer"
                              >
                                <Link
                                  to={`/category/${idx}`}
                                  className="flex justify-between items-center"
                                >
                                  <div className="flex justify-center items-center gap-3">
                                    <a href="#">
                                      <img
                                        className="w-7"
                                        src={`${base_url + base_url}`}
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      className="text-sm hover:text-[#F15B2D]"
                                    >
                                      {item?.name}
                                    </a>
                                  </div>
                                  <a href="#">
                                    <FaChevronDown className="text-blue-500 text-sm " />
                                  </a>
                                </Link>
                                <hr />

                                {/* sub category start */}

                                {/* <ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                                  <Link
                                    to="/category"
                                    onClick={() =>
                                      (document.getElementById(
                                        "my-drawer"
                                      ).checked = false)
                                    }
                                  >
                                    <li className="mb-2 hover:text-[#F15B2D]">
                                      sub1
                                      <hr />
                                    </li>
                                  </Link>
                                  <Link
                                    to="/category"
                                    onClick={() =>
                                      (document.getElementById(
                                        "my-drawer"
                                      ).checked = false)
                                    }
                                  >
                                    <li className="mb-2 hover:text-[#F15B2D]">
                                      sub1
                                      <hr />
                                    </li>
                                  </Link>
                                  <Link
                                    to="/category"
                                    onClick={() =>
                                      (document.getElementById(
                                        "my-drawer"
                                      ).checked = false)
                                    }
                                  >
                                    <li className="mb-2 hover:text-[#F15B2D]">
                                      sub1
                                      <hr />
                                    </li>
                                  </Link>
                                </ul> */}
                                {/* sub category end */}
                              </div>
                            );
                          })}
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import { createContext, useEffect, useState } from "react";
import ScrollToTop from "./components/Shared/ScrollToTop";
import { getStrdCart } from "./utilities/functions";

export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext();
export const UserContext = createContext();

const App = () => {
  const { groups, webItems, items } = useLoaderData();
  const [cartItems, setCartItems] = useState(0);
  // const [userData, setUserData] = useState([]);
  // const [user, setUser] = useState("");

  useEffect(() => {
    let cart = getStrdCart("cart");
    // console.log(cart);
    setCartItems(cart?.length ? cart?.length : 0);
  }, [cartItems]);

  // useEffect(() => {
  //   let token = getStrdCart("token");
  //   console.log("Token after clearing:", token);

  //   if (!token) {
  //     setUser("");
  //     setCartItems(0);
  //     setUserData([]);
  //     return;
  //   }

  //   let parts = atob(decodeURIComponent(token)).split("_");

  //   console.log(parts, token);

  //   getUser(parts[0], parts[1])
  //     .then((user) => {
  //       if (user) {
  //         setUserData([user]);
  //         setUser(user?.customer_name);
  //       } else {
  //         setUser("");
  //         setCartItems(0);
  //         setUserData([]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user:", error);
  //     });
  // }, []);

  return (
    <div>
      <UserContext.Provider>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <GroupsContext.Provider value={groups}>
            <WebContext.Provider value={webItems}>
              <ItemContext.Provider value={items}>
                <ScrollToTop />
                <Navbar />
                <Navbar2 />
                <Outlet />
                <Footer />
                <MobileFooter />
              </ItemContext.Provider>
            </WebContext.Provider>
          </GroupsContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;

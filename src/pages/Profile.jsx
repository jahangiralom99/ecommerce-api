import {useContext} from "react";
import {UserContext} from "../App";
import {IoLocationOutline} from "react-icons/io5";

const Profile = () => {
  const {userData} = useContext(UserContext);

  return (
    <div className="py-5 flex bg-[#EFF0F4] justify-center lg:gap-10 md:gap-3 flex-col md:flex-row ">
      {/* left section */}

      <section className="lg:w-[20%] md:pl-20 pl-3">
        <div>
          <p className="text-sm pb-2">Hello, {userData[0]?.customer_name}</p>
          <ul className="font-bold flex flex-col gap-3">
            <li>
              <p className="hover:text-blue-500"> Manage My Account </p>
              <ul className="pl-5 font-medium flex flex-col gap-2">
                <li className="hover:text-blue-500">My Profile</li>
                <li className="hover:text-blue-500">Address Book</li>
                <li className="hover:text-blue-500">My Payment Options</li>
                <li className="hover:text-blue-500">Daraz Wallet</li>
                <li className="hover:text-blue-500">Vouchers</li>
              </ul>
            </li>
            <li>
              <p className="hover:text-blue-500">My Order</p>
              <ul className="pl-5 font-medium flex flex-col gap-2">
                <li className="hover:text-blue-500">My Returns</li>
                <li className="hover:text-blue-500">My Cancellations</li>
              </ul>
            </li>
            <li className="hover:text-blue-500">My Reviews</li>
            <li className="hover:text-blue-500">My Wishlist</li>
            <li className="hover:text-blue-500">Followed Stores</li>
            <li className="hover:text-blue-500">Sell on Daraz</li>
          </ul>
        </div>
      </section>

      {/* right section */}
      <section className="lg:w-[80%] ">
        <h1 className="font-bold text-center md:text-start text-2xl pb-3 pl-3 md:pl-0 pt-5 md:pt-0">Manage My Account</h1>

        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="bg-white xl:w-[25%]  p-3 pb-10 ">
            <p className="text-lg font-medium">
              Personal Profile | <span className="text-blue-500">EDIT</span>
            </p>
            <br />
            <p>{userData[0]?.customer_name}</p>
            <p>{userData[0]?.email_id}</p>
            <br />
            <p className="text-blue-500">Subscribe to our Newsletter</p>
          </div>
          <div className="xl:w-[50%] bg-white flex p-3 md:justify-evenly">
            <div className="md:border-r xl:pr-20 lg:pr-10 flex flex-col gap-3">
              <h3 className="text-lg font-medium">
                Address Book | <span className="text-blue-500">ADD</span>
              </h3>
              <br />
              <p>Save Your shipping address here</p>

              <IoLocationOutline className="text-3xl" />
            </div>
            <div className="pt-16 px-6 hidden md:block "> Save your billing address here</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

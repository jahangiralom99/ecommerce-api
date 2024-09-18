import {useState} from "react";
import {Link} from "react-router-dom";
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [activeLanguage, setActiveLanguage] = useState("ENG");

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
  };

  return (
    <div className="w-full fixed z-20 md:block hidden">
      <div className="max-w-[1535px] md:h-9 bg-[#77787B] md:flex md:justify-end md:pr-32 gap-5">
        {/* <div>
					<img className='w-40 mx-auto pt-2 md:hidden' src={logo} alt="" />
				</div> */}
        <ul className="flex gap-5 justify-center items-center md:flex-row  mx-auto py-2">
          <li className=" text-white text-sm hover:text-[#F78C66]">Merchant Corner</li>
          <li className=" text-white text-sm hover:text-[#F78C66]">Complain & Suggestion</li>
          <li className=" text-white text-sm hover:text-[#F78C66]">Track Order</li>
          <li className=" text-white text-sm hover:text-[#F78C66] hover:.dropdown">
            <Link to="/login">
              <a href="#">Login</a>
            </Link>
            <div className="dropdown hidden">
              <form className="bg-white">
                <input className="text-black" type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>LOGIN</button>
                <a href="Forget Password ?"></a>
                <a href="">Register</a>
                <a href="">How To Place Order</a>
                <a href="">Refund Policy</a>
              </form>
            </div>
          </li>
        </ul>
        <ul className="flex gap-4 justify-center items-center md:py-0 py-2">
          <li className={`text-sm hover:text-[#F78C66] ${activeLanguage === "বাংলা" ? "bg-white h-full p-2 text-[#77787B]" : "text-white"}`} onClick={() => handleLanguageClick("বাংলা")}>
            বাংলা
          </li>
          <li className={`text-sm hover:text-[#F78C66] ${activeLanguage === "ENG" ? "bg-white h-full p-2 text-[#77787B]" : "text-white"}`} onClick={() => handleLanguageClick("ENG")}>
            ENG
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { FaRegCopyright } from "react-icons/fa6";

const MobileFooter = () => {
  return (
    <div className="md:hidden block">
      <div className="bg-stone-300">
        <h1 className="font-extrabold text-xs py-5 px-1 text-center">
          Online Shoping in BD: Buy Fashion,Electronics & <br /> Gadget at Best
          Price | Gawsia Shop
        </h1>
        <p className="text-xs px-1 pb-2 font-medium">
          Online shopping BD: gawsiashop.com.bd is the largest online shopping
          marketplace has been launched inseptember, 2011. Online shopping BD:
          gawsiashop.com.bd is the largest online shopping marketplace has been
          launched inseptember, 2011.Online shopping BD: gawsiashop.com.bd is the
          largest online shopping marketplace has been launched inseptember,
          2011.
        </p>
      </div>
      <div className="bg-slate-200 py-3">
        <p>
          <ul className="flex text-xs gap-2 justify-center items-center text-blue-700">
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">Order </a>
            </li>
            <li>
              <a href="#">Privacy policy </a>
            </li>
            <li>
              <a href="#">Address </a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>
        </p>

        <p className="flex justify-center items-center text-xs text-blue-700 pt-3">
          <div className="flex justify-center items-center">
            <pre className="flex justify-center items-center font-bold">
              Copyright <FaRegCopyright />{" "}
            </pre>
          </div>{" "}
          <pre>
            {" "}
            <a className="text-sm" href="https://ioniccorporation.com/">
              IONIC Corporation
            </a>{" "}
            2009
          </pre>
        </p>
      </div>
    </div>
  );
};

export default MobileFooter;

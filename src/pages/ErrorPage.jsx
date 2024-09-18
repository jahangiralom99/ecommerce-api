import errorImg from "../assets/errorImg.jpg";
import backImg from "../assets/back.avif";
import { Link } from "react-router-dom";
import Title from "../components/title/Title";

const ErrorPage = () => {
  return (
    <>
      <Title title="Error" />
      <div
        style={{ backgroundImage: `url(${errorImg})` }}
        className="relative bg-no-repeat lg:bg-cover bg-center lg:bg-right-top  h-[80vh] lg:m-20 m-5 text-white lg:text-6xl text-xl font-bold text-center xl:pt-44 lg:pt-32 pt-44"
      >
        You are searching something <br /> unavailable
        <Link to="/">
          <div className=" absolute right-10 bottom-20 xl:bottom-5 flex flex-col justify-center items-center">
            <img
              className="xl:w-40 lg:w-28 w-20 rounded-full  right-5 bottom-5"
              src={backImg}
              alt=""
            />
            <p>Back to Home</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

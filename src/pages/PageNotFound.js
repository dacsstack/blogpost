import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <section className="shadow-md border-1 rounded-md py-5 px-10">
      <p className="block mb-2 text-center text-lg font-medium text-gray-900 dark:text-white ">
        404 / Page Not Found
      </p>
      <img src={Logo} alt="Page Not Found" className="self-center" />
      <Link to="/">
        <button className="relative inline-flex self-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Back To Home
          </span>
        </button>
      </Link>
    </section>
  );
};

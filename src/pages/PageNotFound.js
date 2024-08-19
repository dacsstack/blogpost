import { Link } from "react-router-dom";
import Logo from "../assets/images/page-not-found.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <section className="flex flex-col rounded-md shadow-lg w-full max-w-[1280p] leading-1.5 p-4 m-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        404 / Page Not Found
      </p>
      <img src={Logo} alt="Page Not Found" />
      <Link to="/">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          Back To Home
        </button>
      </Link>
    </section>
  );
};

import { Link } from "react-router-dom";
import Logo from "../assets/images/page-not-found.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <section className="flex flex-col rounded-md shadow-lg w-full max-w-[1280p] leading-1.5 p-4 m-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <p>404 / Page Not Found</p>
      <img src={Logo} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};

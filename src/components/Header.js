import { signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { auth, provider } from "../firebase/config";

export const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      navigate("/");
      localStorage.setItem("isAuth", true);
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    navigate("/");
    localStorage.setItem("isAuth", false);
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blog Post Project
            </span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-sun"></span>
              ) : (
                <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-moon-fill"></span>
              )}
            </span>

            {isAuth ? (
              <>
                <Link
                  to="/create"
                  className="text-gray-700 dark:text-white mr-5"
                >
                  <span className="text-2xl bi bi-chat-right-text-fill relative">
                    <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full "></span>
                  </span>
                </Link>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span
                    onClick={handleLogout}
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                  >
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </span>
                </button>
              </>
            ) : (
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span
                  onClick={handleLogin}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  <i className="bi bi-google"></i> Login
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

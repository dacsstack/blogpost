import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const PostCard = ({ post, toggle, setToggle }) => {
  const { id, title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle(!toggle);
  }

  return (
    <div className="flex items-start py-8 gap-2.5 ">
      <img
        className="w-8 h-8 rounded-full  border-blue-700 focus:outline-none focus:ring-blue-300 font-medium  dark:border-blue-500 dark:focus:ring-blue-800 border-2"
        src={author.profile}
        alt="Profile"
      />
      <div className="flex flex-col rounded-md shadow-lg w-full max-w-[1280p] leading-1.5 p-4 m-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:45
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {description}
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {author.name}
        </span>
      </div>

      {isAuth && author.id === auth.currentUser.uid && (
        <span
          onClick={handleDelete}
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        >
          <i className="bi bi-trash3"></i>
        </span>
      )}
    </div>
  );
};

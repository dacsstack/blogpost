import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("Create Post");
  const postRef = collection(db, "posts");

  async function handleCreatePost(event) {
    event.preventDefault();
    // console.log(auth);
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      createdAt: serverTimestamp(),
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        profile: auth.currentUser.photoURL,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create py-40">
      <div className="divide-x-4 mb-4"></div>
      <h1 className="text-center text-lg block mb-2 font-medium text-gray-900 dark:text-white">
        Create Post
      </h1>
      <form
        className="shadow-md border-1 rounded-md py-5 px-10"
        onSubmit={handleCreatePost}
      >
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          className="block p-2.5 w-full mb-4 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          name="description"
          maxLength="600"
          required
        ></textarea>
        <button
          type="submit"
          className=" text-blue-700 hover:text-white border  border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </form>
    </section>
  );
};

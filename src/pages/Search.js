import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostCard, SkeletonCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [toggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: posts } = useFetch(apiPath, queryTerm);
  console.log(posts);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {posts.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section>
        {posts.map((post, index) =>
          post ? (
            <PostCard
              key={post.id}
              post={post}
              toggle={toggle}
              setToggle={setToggle}
            />
          ) : (
            <SkeletonCard key={index} />
          )
        )}
      </section>
    </main>
  );
};

import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const api = `http://localhost:8080/api/posts/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(api);
      const json = await response.json();
      setData(json.results);
    }
    fetchPost();
  }, [api]);

  return { data };
};

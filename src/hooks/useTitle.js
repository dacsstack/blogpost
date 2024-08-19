import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Blog Post`;
  }, [title]);

  return null;
};

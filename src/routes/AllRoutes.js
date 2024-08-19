import { Route, Routes } from "react-router-dom";
import { CreatePost, HomePage, PageNotFound } from "../pages";
import { Search } from "../pages/Search";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="create"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route path="search" element={<Search apiPath="search/post" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

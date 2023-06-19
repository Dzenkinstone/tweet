import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./SharedLayout";
import TweetPage from "../pages/TweetPage";
import ErrorPage from "../pages/ErrorPage";

const HomePage = lazy(() => import("../pages/HomePage"));

export const App = () => {
  return (
    <Routes basename="/tweet">
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetPage />} />
      </Route>
    </Routes>
  );
};

import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./components/SharedLayout";
import TweetPage from "./pages/TweetPage";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

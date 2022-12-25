import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../../pages/Page404/Page404";
import CardsPage from "../../pages/CardsPage/CardsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MainPage from "../../pages/MainPage/MainPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import Layout from "../Layout/Layout";
import RequireAuth from "../RequireAuth/RequireAuth";

export enum APP_ROUTES {
  LOGIN = "/login",
  MAIN = "/",
  CARDS = "/cards",
  PROFILE = "/profile",
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path={APP_ROUTES.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={APP_ROUTES.CARDS} element={<CardsPage />} />
          <Route path={APP_ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={"/*"} element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;

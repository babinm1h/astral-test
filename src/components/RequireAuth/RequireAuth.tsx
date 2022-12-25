import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { APP_ROUTES } from "../AppRoutes/AppRoutes";

const RequireAuth = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }

  return <Outlet />;
};

export default RequireAuth;

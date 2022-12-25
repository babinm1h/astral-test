import React from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../components/AppRoutes/AppRoutes";

const Page404 = () => {
  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>
      <strong>Страница не найдена</strong>
      <div>
        <NavLink to={APP_ROUTES.MAIN} style={{ color: "blue" }}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;

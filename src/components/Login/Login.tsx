import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { APP_ROUTES } from "../AppRoutes/AppRoutes";

import st from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  const user = useAppSelector((state) => state.auth.user);
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      nav(APP_ROUTES.MAIN);
    }
  }, [user]);

  return (
    <div className={st.wrapper}>
      <div className={st.box}>
        <h2>Вход в аккаунт</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

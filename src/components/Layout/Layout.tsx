import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { contacts } from "../../utils/mockedData";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import st from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      <Header authUser={user} />
      <main className={st.main}>
        <Outlet />
      </main>
      <Footer {...contacts} />
    </>
  );
};

export default Layout;

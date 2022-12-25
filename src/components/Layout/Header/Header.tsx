import { AppBar, Menu } from "@mui/material";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../../types/entities";
import { APP_ROUTES } from "../../AppRoutes/AppRoutes";

import st from "./Header.module.scss";
import UserMenu from "./UserMenu/UserMenu";

interface IProps {
  authUser: IUser | null;
}

const Header: FC<IProps> = ({ authUser }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" component={"header"}>
      <div className={st.inner}>
        <nav className={st.nav}>
          <NavLink to={APP_ROUTES.MAIN}>Главная</NavLink>
          <NavLink to={APP_ROUTES.CARDS}>Карточки</NavLink>
        </nav>
        <div>
          <div className={st.user} onClick={handleOpenUserMenu}>
            <span className={st.avatar} />
            <span className={st.userName}>{authUser?.login}</span>
          </div>
          <UserMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
        </div>
      </div>
    </AppBar>
  );
};

export default Header;

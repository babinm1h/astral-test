import React, { FC } from "react";
import { Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../AppRoutes/AppRoutes";

import st from "./UserMenu.module.scss";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { userLogout } from "../../../../redux/slices/authSlice";

interface IProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
}

const UserMenu: FC<IProps> = ({ anchorElUser, handleCloseUserMenu }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Menu
      sx={{ mt: "35px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <div className={st.menu}>
        <NavLink to={APP_ROUTES.PROFILE} className={st.item}>
          Профиль
        </NavLink>
        <div className={st.item} onClick={handleLogout}>
          Выйти из аккаунта
        </div>
      </div>
    </Menu>
  );
};

export default UserMenu;

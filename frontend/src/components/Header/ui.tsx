import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserPerformance } from "../UserPerformance/ui";
import "./style.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button } from "@mui/material";
import { Search } from "../../shared/component/Search/ui";
import { useStore } from "effector-react";
import { $user } from "../../shared/store/user/user";
import { ButtonFill } from "../../shared/component/ButtonFill";

export const Header = () => {
  const user = useStore($user);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__sidenav">
        <div className="header__burger">
          <Button variant="text">
            <MenuRoundedIcon />
          </Button>
        </div>
        <div className="header__logo">
          <NavLink to="/">
            appcurse<span className="header__logo-sub">_</span>
          </NavLink>
        </div>
      </div>
      <Search />
      {user ? (
        <UserPerformance />
      ) : (
        <ButtonFill onClick={() => navigate("auth")}>Войти</ButtonFill>
      )}
    </div>
  );
};

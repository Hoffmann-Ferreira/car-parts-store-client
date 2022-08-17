import * as Styled from "./styles";
import logo from "../../assets/images/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons/index";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { userAuth } from "../../contexts/auth";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate();

  const { logout } = userAuth()

  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo from site" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuButoon
            onClick={() => navigate("/")}
            active={path === "home"}
          >
            <HomeIcon />
          </Styled.MenuButoon>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuButoon onClick={() => navigate("/settings")} active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuButoon>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuButoon onClick={logout}>
          <LogoutIcon />
        </Styled.MenuButoon>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;

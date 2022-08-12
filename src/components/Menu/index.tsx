import * as Styled from "./styles";
import logo from "../../assets/images/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons/index";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ path, setLogged }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/login");
  };

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
        <Styled.MenuButoon onClick={handleLogout}>
          <LogoutIcon />
        </Styled.MenuButoon>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;

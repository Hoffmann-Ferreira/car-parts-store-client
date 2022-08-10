import * as Styled from "./styles";
import logo from "../../assets/images/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons/index";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo from site" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuButoon
            onClick={() => navigate("/login")}
            active={path === "home"}
          >
            <HomeIcon />
          </Styled.MenuButoon>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuButoon active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuButoon>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuButoon>
          <LogoutIcon />
        </Styled.MenuButoon>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;

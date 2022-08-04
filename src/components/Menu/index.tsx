import * as Styled from "./styles";
import logo from "../../assets/images/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons/index";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo from site" />
      <nav>
        <Styled.Menuitem>
        <button>
          <HomeIcon />
        </button>
        </Styled.Menuitem>
        <Styled.Menuitem>
        <button>
          <SettingsIcon />
        </button>
        </Styled.Menuitem>
      </nav>
      <Styled.MenuLogout>
        <LogoutIcon />
      </Styled.MenuLogout>
    </Styled.MenuContainer>
  );
};

export default Menu;

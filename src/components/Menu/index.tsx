import * as Styled from "./styles"
import logo from "../../assets/images/logo.png"
import  { HomeIcon, EditIcon, LogoutIcon } from "../../assets/icons/index"


const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src= {logo} alt="logo from site" />
      <div>
        <HomeIcon />
        <EditIcon />
      </div>
      <LogoutIcon/>
    </Styled.MenuContainer>
  );
};

export default Menu;

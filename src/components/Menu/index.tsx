import * as Styled from "./styles"
import logo from "../../assets/images/logo.png"
import {ReactComponent as HomeIcon } from "../../assets/icons/home.svg"


const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src= {logo} alt="logo from site" />
      <div>
        <img alt="home" />
        <img alt="config" />
      </div>
      <img alt="exit" />
    </Styled.MenuContainer>
  );
};

export default Menu;

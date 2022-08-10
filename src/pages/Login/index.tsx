import * as Styled from "./styles"
import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormeContainer>
        <Styled.LoginLogoContainer>
            <h1>Car-Parts-Store</h1>
            <img src={logo} alt="Logo"/>
        </Styled.LoginLogoContainer>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Enter" size="large"/>
      </Styled.LoginFormeContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;

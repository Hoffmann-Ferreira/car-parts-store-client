import * as Styled from "./styles";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
const navigate = useNavigate()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if(email ==="andrei@blue.com" && password === "admin") {
        setLogged(true);
        navigate("/")
    } else {
       toast.error("incorrect username or password!", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }) 
    }

    
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormeContainer>
        <Styled.LoginLogoContainer>
          <h1>Car-Parts-Store</h1>
          <img src={logo} alt="Logo" />
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <Button text="Enter" size="large" onClick={handleLogin} />
      </Styled.LoginFormeContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;

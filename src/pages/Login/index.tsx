import * as Styled from "./styles";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { userAuth } from "../../contexts/auth";


const Login = () => {
  const {login} = userAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };

      return axios
        .post("https://car-parts-store-api.herokuapp.com/auth/login", data)
        .then((res) => {
          login({token: res.data.token, user: res.data.user})
        })
        .catch(() => {
          toast.error("incorrect username or password!", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        });
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

import * as Styled from "./styles";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { userAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../assets/styles/globalStyles";
import { api } from "../../Services";
import {ErrorMessage} from "../../assets/styles/globalStyles"

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required("mandatory filling of the email field"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "User password, containing an uppercase letter, lowercase letter, number and a character"
    )
    .required("mandatory filling of the password field"),
});

const Login = () => {
  const { login } = userAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
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
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormeContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Car-Parts-Store</h1>
          <img src={logo} alt="Logo" />
        </Styled.LoginLogoContainer>

        <StyledInput placeholder="Email" {...register("email")} />

        <StyledInput
          placeholder="Senha"
          type="password"
          {...register("password")}
        />

        <ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </ErrorMessage>
        <Button text="Enter" size="large" type="submit" />
      </Styled.LoginFormeContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;

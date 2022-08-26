import styled, { css } from "styled-components";
import loginBackground from "../../assets/images/loginbackground.jpg";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${loginBackground});
    background-size: 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormeContainer = styled.form`
  ${({ theme }) => css`
    width: 24.5rem;
    height: 28.875rem;
    background-color: ${theme.colors.maincolor};
    border-radius: 8px;
    box-shadow: -1px 1px 5px #012654, 1px -1px 5px #0356c0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 1.625rem;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    font-family: "Bungee Shade", "cursive";

    img {
      width: 9rem;
    }

    h1 {
      width: 50%;
      font-family: "Bungee Shade", "cursive";
      text-transform: uppercase;
      font-size: 2em;
      line-height: 1.5em;
      padding: 0;
    }
  `}
`;

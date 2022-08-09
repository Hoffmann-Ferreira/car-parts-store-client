import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled" | "cancel" | false;
  size: "small" | "large" | false;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    width: 10.938rem;
    height: 3rem;
    border-radius: 8px;
    background-color: ${theme.colors.activeButtonColor};
    color: #ffffff;
    box-shadow: -1px 1px 5px #012654, 1px -1px 5px #0356c0;
    cursor: pointer;
    font-size: 1.2em;

    ${variant === "disabled" &&
    css`
      background: none;
      border: solid ${theme.colors.borderMenu};
      color: #000000;
    `};

    ${variant === "cancel" &&
    css`
      background: none;
      border: solid 2px ${theme.colors.cancelColor};
      color: ${theme.colors.cancelColor};
    `};

    ${size === "small" &&
    css`
      width: 7rem;
      height: 2.125rem;
      font-size: 1em;
    `};

    ${size === "large" &&
    css`
      width: 22.563rem;
      height: 3rem;
      font-size: 1.3em;
    `};
  `}
`;

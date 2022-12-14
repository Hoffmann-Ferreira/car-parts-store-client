import styled, { css } from "styled-components";

interface styledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<styledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    padding-left: 1rem;
    border-radius: 8px;
    width: 18.625rem;
    height: 3rem;
    background-color: #ffff;

    ${inputSize === "small" &&
    css`
      width: 10.75rem;
    `}

    ${inputSize === "large" &&
    css`
      width: 22.375rem;
    `}
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: #e63946;
    align-self: center;
    text-align: center;
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: #0000008f;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

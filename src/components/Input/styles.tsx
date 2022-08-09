import styled, { css } from "styled-components";

interface styledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<styledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    padding-left: 1rem;
    border-radius: 8px;
    width: 18.75rem;
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

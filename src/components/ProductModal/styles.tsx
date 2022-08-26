import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    width: 22.5rem;
    border-radius: 8px;
    background-color: ${theme.colors.inputBackground};
    padding: 1.5rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin-top: 1rem;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding-left: 1rem;
    border-radius: 8px;
    width: 18.625rem;
    height: 3rem;
    background-color: #ffff;
    display: flex;
    align-items: center;
  `}
`;

import styled, { css } from "styled-components";

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

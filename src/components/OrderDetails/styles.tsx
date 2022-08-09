import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh; /* 47rem */
    border-left: solid ${theme.colors.borderMenu};
    background-color: ${theme.colors.primaryColor};
    border-radius: 18px;
    padding: 1rem;
  `}
`;

export const OrderDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid ${theme.colors.borderMenu};

    div {
      width: 90%;
      height: 90%;
      border-top: solid ${theme.colors.borderMenu};
      border-bottom: solid ${theme.colors.borderMenu};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }
  `}
`;

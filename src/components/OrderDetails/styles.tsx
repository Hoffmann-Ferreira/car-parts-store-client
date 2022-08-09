import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh; /* 47rem */
    border-left: solid ${theme.colors.borderMenu};
    background-color: ${theme.colors.primaryColor};
    border-radius: 18px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
  `}
`;

export const OrderDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

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

export const CheckoutDetailsContainer = styled.div`
${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   /* align-content: center; */
`}
`;

export const CheckoutDetailsHeader = styled.div`
${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .itemH3 {
      margin-left: 6.75rem;
    }
`}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 23.500rem;
    /* height: 14.875rem; */
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;

    div{
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
    }

    button{
      margin-top: 1rem;
    }
`}
`;

export const CheckoutCardsContainer = styled.div`
  ${() => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `}
`;
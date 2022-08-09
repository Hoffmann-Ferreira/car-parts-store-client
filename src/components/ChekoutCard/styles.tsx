import styled, { css } from "styled-components";

export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    border-bottom: solid 2px #ffffff;
    margin-bottom: 1rem;
  `}
`;

export const CheckoutCardHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    margin-bottom: 0.625rem;

    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.625rem;
      border-radius: 5px;
    }

    div {
      width: calc(100% - 6.125rem);
      height: 100%;

      h5 {
        width: 10rem;
        height: 1.125rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    span {
      max-width: 2.5rem;
      margin-left: 3rem;
      padding: 1.6rem;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
    }
  `}
`;

export const ProductQuantityInput = styled.input`
  ${({ theme }) => css`
    all: unset;
    width: 3rem;
    height: 3rem;
    background-color: #ffffff;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  `}
`;

export const CheckoutCardCFooter = styled.input`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    background-color: #ffffff;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  `}
`;

export const CheckoutCardFooter = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
  `}
`;

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    width: 20%;
    height: 80%;
    color: ${theme.colors.cancelColor};
    background: none;
    cursor: pointer;
  `}
`;

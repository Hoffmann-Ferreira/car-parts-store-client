import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: 15rem;
    border-radius: 8px;
    background-color: #92bfe2;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      gap: 3rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 3rem;
    }
  `}
`;

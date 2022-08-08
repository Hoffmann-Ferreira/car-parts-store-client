import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 13rem;
    height: 15rem;
    border-radius: 10px;
    background-color: ${theme.colors.cardsBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 0.2rem;

    img {
      width: 9rem;
      height: 9rem;
    }
  `}
`;

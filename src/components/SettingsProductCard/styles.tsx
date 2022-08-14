import styled, { css } from "styled-components";

export const SettingsProductCardConainer = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border: solid 1px ${theme.colors.activeButtonColorOpacity};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    img{
        width: 10.25rem;
    }
  `}
`;


export const SettingsProductCardButton = styled.div`
  ${({ theme }) => css`
  height: 3.25rem;
  width: 100%;
  background-color: ${theme.colors.activeButtonColorOpacity};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0px 0px 8px 8px;
   
  `}
`;

import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${theme.colors.primaryColor};
  `}
`;

export const SettingsNavegationContainer = styled.div`
  ${({ theme }) => css`
    border-right: solid ${theme.colors.borderMenu};
    width: 17.188rem;
    height:calc(100%-5.25rem);
    margin: 0 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;

    h2 {
      margin-bottom: 1rem;
    }
  `}
`;

export const SettingsNavegationButtonList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 95%;
    padding: 1.5rem 0;
    border-radius: 8px;
    background-color: #ffffff;
    overflow: hidden;
  `}
`;

export const SettingsNavegationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.5rem;
    padding-left: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    cursor: pointer;

    p {
      font-size: 12px;
    }
    h4 {
      margin-right: 15%;
    }

    ${active &&
    css`
      background-color: ${theme.colors.activeButtonColorOpacity};
    `}
  `}
`;

export const SettingsNavegationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    svg {
      position: absolute;
      left: -1.4rem;
      margin-left: 2rem;
    }

    ${active && css``}
  `}
`;

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
  width: 71%;
  height:calc(100% - 5.10rem);
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  background-color: #FFFFFF;
  border-radius: 8px;

    h2{
      margin-top: 2.125rem;
      margin-left: 1.5rem;
    }

  `}
`;

export const EntitiesEditCategorySelector = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 2.5rem;;
  border-bottom: solid 1px ${theme.colors.activeButtonColorOpacity};
  padding: 0 1.5rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  `}
`;

export const EntitiesEditCategoryButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
  background-color: #FFFFFF;
  cursor: pointer;

  :hover{
    transform: scale(1.2);
  };

  ${active && css`
  border-bottom: solid 3px ${theme.colors.activeButtonColor};
  transform: scale(1.3);
  border-radius: 1px;
  margin-right: 1rem;
  `}

  `}
`;

export const EntitesEditList = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 68%;
  padding-left: 1.5rem;
  padding-top: 3.125rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-y: scroll;
  `}
`;

export const AddEntitesEditCard = styled.div`
  ${({ theme }) => css`
  width: 13.75rem;
 height: 18.75rem;
 border: dashed 1px ${theme.colors.activeButtonColorOpacity};
 border-radius: 8px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 :hover{
  cursor: pointer;
  transform: scale(1.1);
 }

  `}
`;

export const ConfirmationContainer = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 7.5rem;
  padding-left: 1.5rem;
  padding-top: 3.125rem;
  display: flex;
  gap: 1rem;
  `}
`;


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

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 71%;
    height: calc(100% - 5.1rem);
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    background-color: #ffffff;
    border-radius: 8px;

    h2 {
      margin-top: 2.125rem;
      margin-left: 1.5rem;
    }
  `}
`;

export const EntitiesEditCategorySelector = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    border-bottom: solid 1px ${theme.colors.activeButtonColorOpacity};
    padding: 0 1.5rem;
    display: flex;
    align-items: flex-end;
    gap: 1rem;
  `}
`;

export const EntitiesEditCategoryButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    background-color: #ffffff;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }

    ${active &&
    css`
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

    :hover {
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

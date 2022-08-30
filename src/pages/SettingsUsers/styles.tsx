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
    height: 10.75rem;
    border: dashed 1px ${theme.colors.activeButtonColorOpacity};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  `}
`;

export const EntitesCard = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 10.75rem;
    border: solid 1px ${theme.colors.activeButtonColorOpacity};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    gap: 2rem;

    div {
      display: flex;
      width: 100%;
    }

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  `}
`;

export const SettingsUserEditButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    background-color: ${theme.colors.activeButtonColorOpacity};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border-radius: 0px 0px 0px 8px;
  `}
`;

export const SettingsUsertDeleteButton = styled.button`
  ${({ theme }) => css`
  height: 3.25rem;
  width: 50%;
  color: ${theme.colors.cancelColor}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0px 0px 8px 0px;
   
  `}
`;

export const Modal = styled.button`
  ${({ theme }) => css``}
`;

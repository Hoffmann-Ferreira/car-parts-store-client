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
    height: 98vh;
    margin: 0 1.5rem;
    padding: 1rem;
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

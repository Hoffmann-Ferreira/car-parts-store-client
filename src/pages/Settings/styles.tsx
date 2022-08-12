import styled, { css } from "styled-components";

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
  border: solid red;
  width: 17.188rem;
  height: 90vh;
  margin: 0 1.5rem;
  padding: 1rem;

 `}
`;

export const SettingsNavegationButtonList = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 95%;
  border: solid ${theme.colors.borderMenu};
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-top: 1rem;
  overflow: hidden;

 `}
`;

export const SettingsNavegationButtonContainer = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 5.5rem;
  padding: 1.5rem;
  border: solid 2px;
  
  p {
    font-size: 12px;
  }

 
  

 `}
`;


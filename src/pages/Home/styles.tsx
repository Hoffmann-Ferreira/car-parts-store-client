import styled, { css } from "styled-components";

interface CategoriesNavegationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(#9abce2, #00ffee);

  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;

  
`;
export const TitleContainer = styled.div`
  h1 {
      font-family: "Bungee Shade", "cursive";
      color: #000814;
      :hover {
        color: #fefae0;
      }
    }

    p {
      text-transform: capitalize;
      font-size: 20px;
    };

`;

export const SearchInputContainer = styled.div`
  border-radius: 8px;
  width: 10.813rem;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 0.01%;
  background-color:#FFFFFF;

  svg{
    width: 20px;
    margin-left: 2%;
  }

  input{
    width: 120px;
    height: 4vh;
    text-align: center;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    outline: none;
    
  }
`;

export const CategoriesNavegationBar = styled.div`
  width: 93%;
  height: 4vh;
  margin-top: 2%;
  border-bottom: solid 2px #FFFFFF;
  display: flex;
`;

export const CategoriesNavegation = styled.button<CategoriesNavegationButtonProps>`
  border: 0;
  margin-right: 1.5rem;
  font-size: 18px;
  cursor: pointer;
  background-color: #7ACAE5;
  color: #000000;

  :hover{
    color: #FFFFFF;
    transform: scale(1.3);
    cursor: pointer;
  }

  ${({active}) => active && css`
    border-bottom: solid 4px #122d4f; 
    border-radius: 15px;
    cursor: pointer;
      `}
`;

export const ProductsHeaderContainer =  styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  
`;
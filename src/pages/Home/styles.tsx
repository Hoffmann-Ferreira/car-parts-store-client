import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(#9abce2, #00ffee);
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
  border: solid red;
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  border: solid yellowgreen;
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
  background-color:#ffff;
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
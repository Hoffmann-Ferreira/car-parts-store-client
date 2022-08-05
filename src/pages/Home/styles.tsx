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
  div {
    h1 {
      font-family: "Bungee Shade", "cursive";
      font-size: 2.5em;
      color: #000814;
      :hover {
        color: #fefae0;
      }
    }
  }
`;

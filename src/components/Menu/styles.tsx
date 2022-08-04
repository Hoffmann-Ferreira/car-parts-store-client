import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 6.5rem;
  background: #FFFFFF;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
  box-sizing: border-box;
  nav{
    width: 100%
  }
  img {
    width: 7rem;
    margin-bottom: 1rem;
  }
`;

export const Menuitem = styled.div `
  border: solid red;
  width: 6rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0px 0px 12px;
  margin-bottom: 1.5rem;
  margin-left: 0.2rem;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const MenuButoon = styled.button `
`;

export const MenuLogout = styled.button `
  border: solid red;
  width: 6rem;
  height: 5rem;
  cursor: pointer;
  margin-top: 16rem;
  margin-left: 0.5rem;
  background-color: #FFFFFF
`;
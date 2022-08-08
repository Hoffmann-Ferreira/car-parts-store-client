import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  width: 6.5rem;
  height: 100vh;
  background-color: linear-gradient(#9abce2, #00ffee);
  border-radius:  18px 0px 18px 0px;
  border: solid 2px #9abce2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
  box-sizing: border-box;
  nav {
    width: 100%;
  }
  img {
    width: 7rem;
    margin-bottom: 1rem;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  width: 5.75rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;

  ${({ logout }) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
    `}

  ${({ active }) =>
    active &&
    css`
      background: #00ffee;
    `}
`;

export const MenuButoon = styled.button<MenuItemButtonProps>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 15px;
  background: none;
  :hover {
    cursor: pointer;
    color: #ffffff;
    transform: scale(1.3);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #023e8a;
      cursor: pointer;
      color: #ffffff;
      box-shadow: -3px 3px 10px #012654, 3px -3px 10px #0356c0;
      :hover {
        background-color: #023e8a;
      }
    `}
`;

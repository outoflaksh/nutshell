import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #daecff;
  color: #5593bf;

  & > * {
    padding: 20px;
  }
`;

export const NavBrand = styled.img`
  height: 6rem;
  width: auto;
`;

export const NavLinkList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavLinkItem = styled.li`
  margin: 0 15px;
  font-weight: 600;
  font-size: 0.9rem;
`;

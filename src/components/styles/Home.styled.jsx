import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 20px 0;
  }
`;

export const Logo = styled.img`
  height: 20rem;
  width: auto;
`;

export const Heading = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  width: 65%;
  text-align: center;
`;

import styled from "styled-components";

export const MainContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    margin-top: 3rem;
  }
`;

export const Heading = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
`;

export const Illustration = styled.img`
  height: 10.5rem;
  width: auto;
`;

export const UploadButton = styled.input`
  background-color: #415f7e;
  padding: 15px 30px;
  border: 3px dashed #70d2d7;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Waves = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0%;
  pointer-events: none;
`;

export const Paragraph = styled.p`
  width: 60%;
  text-align: left;
  font-size: 1.1rem;
  & > * {
    margin: 10px 0;
  }
`;

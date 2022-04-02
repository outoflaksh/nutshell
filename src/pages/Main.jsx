import { Page } from "../components/styles/Common.styled";
import UploadForm from "../components/UploadForm";
import {
  MainContent,
  Heading,
  Illustration,
  UploadButton,
  Waves,
} from "../components/styles/Main.styled";
import { useState } from "react";

const Main = () => {
  const [display, setDisplay] = useState('main');//optn: main/summary

  return (
    <Page>
      <MainContent>
        {
          display == "main" ?
            <>
              <Heading>
                Summarise your recorded online classes in a few minutes.
              </Heading>
              <Illustration src="./illustration-upload.png" />
              <UploadButton>Upload your recorded video lecture</UploadButton>
            </> :undefined
            
        }
        <UploadForm display={display} setDisplay={setDisplay} />
        <Waves src="./waves.svg" />
      </MainContent>
    </Page>
  );
};

export default Main;

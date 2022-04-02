import { Page } from "../components/styles/Common.styled";
import {
  MainContent,
  Heading,
  Illustration,
  UploadButton,
  Waves,
} from "../components/styles/Main.styled";

const Main = () => {
  return (
    <Page>
      <MainContent>
        <Heading>
          Summarise your recorded online classes in a few minutes.
        </Heading>
        <Illustration src="./illustration-upload.png" />
        <UploadButton>Upload your recorded video lecture</UploadButton>
        <Waves src="./waves.svg" />
      </MainContent>
    </Page>
  );
};

export default Main;

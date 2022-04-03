import { Page, Button } from "../components/styles/Common.styled";
import { NavLink } from "react-router-dom";
import { Logo, Heading, Wrapper } from "../components/styles/Home.styled";

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Logo src="./illustration-home.svg" />
        <Heading>
          Whether it's for a quick revision, catching up on missed classes, or
          simply a reference for what happened, Nutshell helps students by
          providing them with the most important parts of the class without them
          having to watch a second of the recorded video.
        </Heading>
        <Button>
          <NavLink to="/app">Try it out</NavLink>
        </Button>
      </Wrapper>
    </Page>
  );
};

export default Home;

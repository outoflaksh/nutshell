import { Heading, Paragraph } from "./styles/Main.styled";
import { Button } from "./styles/Common.styled";

const Summary = ({ summary, setDisplay, setSummary }) => {
  const handleClick = (e) => {
    setDisplay("main");
    setSummary("");
  };

  return (
    <Paragraph>
      <h1>Here's your summary:</h1>
      {summary}
      <Button onClick={handleClick}>Go back</Button>
    </Paragraph>
  );
};

export default Summary;

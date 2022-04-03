import { Heading, Paragraph } from "./styles/Main.styled";

const Summary = ({ summary }) => {
  return (
    <Paragraph>
      <h1>Here's your summary:</h1>
      {summary}
    </Paragraph>
  );
};

export default Summary;

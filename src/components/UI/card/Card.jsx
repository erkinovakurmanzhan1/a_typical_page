import styled from "styled-components";

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;

const Container = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 10px 3px 28px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 3px 28px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 28px 1px rgba(0, 0, 0, 0.75);
  margin: 10px auto;
  width: 450px;
  min-width: 450px;
  border-radius: 10px;
`;



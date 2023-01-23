import React from "react";
import styled from "styled-components";
const Button = ({ children, bgcolor, disabled, onClick }) => {
  return (
    <StyledBtn bgcolor={bgcolor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button`
  padding: 5px;
  background-color: ${(props) => (props.bgcolor ? "#50015F" : "violet")};
  border-radius: 15px;
  border: none;
  color: white;
  outline: none;
  width: 30%;
  margin-top: 0.5rem;
  padding: 10px;


  :disabled {
    background-color: gray;
    width: 30%;
  }
`;

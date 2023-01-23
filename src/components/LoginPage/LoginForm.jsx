import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";

const LoginForm = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(email.includes("@"));
    setIsPasswordValid(password.trim().length >= 6);
  }, [email, password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(email.includes("@"));
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(password.trim().length >= 6);
  };

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler();
  };

  return (
    <Card>
      <form>
        <StyledContainer>
          <label htmlFor="">Email</label>
          <StyledInputCOntainer
            type="email"
            onChange={emailChangeHandler}
            value={email}
          />
        </StyledContainer>

        <label htmlFor="">Password</label>
        <StyledInputCOntainerSecond
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        />
        <ButtonCOntainer>
          <Button
            bgcolor={"success"}
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </ButtonCOntainer>
      </form>
    </Card>
  );
};

export default LoginForm;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledInputCOntainer = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
`;
const StyledInputCOntainerSecond = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  margin-left: 46px;
`;
const ButtonCOntainer = styled.div`
  text-align: center;
  border-radius: 10px;
  border: none;
`;

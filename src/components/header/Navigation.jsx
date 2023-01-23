import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

const Navigation = ({openTimerHandler, openUsersHandler, logoutHandler}) => {
  return  <NavStyled>
  <Button onClick={openUsersHandler}>Users</Button>
  <Button onClick={openTimerHandler}>Timer</Button>
  <Button  onClick={logoutHandler}>Logout</Button>
  </NavStyled>
};

export default Navigation;
const NavStyled = styled.nav`
  width: 25%;
  display: flex;
  gap: 20px;
`;
import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = ({
  isLoggedin,
  openTimerHandler,
  openUsersHandler,
  logoutHandler,
}) => {
  //   const logOutHandler = () => {
  //     setIsLoggedIn(false);
  //     localStorage.clear()
  //   };

  return (
    <HeaderStyled>
      <H1Styled>A Typical Page</H1Styled>

      {isLoggedin ? (
        <Navigation
          openTimerHandler={openTimerHandler}
          openUsersHandler={openUsersHandler}
          logoutHandler={logoutHandler}
        />
      ) : null}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  background-color: #700174;
  padding: 20px 10px;
  color: #ffff;
  display: flex;
  justify-content: space-between;
`;

const H1Styled = styled.h1`
  font-size: 20px;
  margin-top: 0.8rem;
`;

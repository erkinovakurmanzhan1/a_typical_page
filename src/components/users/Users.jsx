import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = ({}) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    
    <UserInfoStyled>
      < Outer>
      <UserStyled>Users!</UserStyled>
      <H4>(´｡• ᵕ •｡`)   ♡  </H4>
      </ Outer>
      <ul>
        {posts.map((post) => (
          <LiStyled key={post.id}>
            {post.username} {post.name} {post.email}
          </LiStyled>
        ))}
      </ul>
    </UserInfoStyled>
  );
};

export default Users;

const UserInfoStyled = styled.div`
  width: 600px;
  /* height: 600px; */
  background-color: #ffff;
  display: flex;
  margin: auto;
  margin-top: 3rem;
  padding-top: 3rem;
  box-shadow: 13px 0px 54px -16px rgba(20, 19, 19, 0.59) inset;
  -webkit-box-shadow: 13px 0px 54px -16px rgba(20, 19, 19, 0.59) inset;
  -moz-box-shadow: 13px 0px 54px -16px rgba(20, 19, 19, 0.59) inset;
`;

const LiStyled = styled.li`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  padding-top: 3.5rem;
`;

const UserStyled = styled.h1`
  font-size: 20px;
  position: relative;

`

const Outer = styled.div`
      position: relative;
      left: 45%;
`



const H4 = styled.h4`
  font-size: 16px;
  color: red;
`
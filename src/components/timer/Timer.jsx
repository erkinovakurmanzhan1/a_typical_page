import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../UI/card/Card";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => (prev += 1));
    }, 1000);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 60000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <Card>
      <Timerstyled>Timer:{timer}</Timerstyled>
    </Card>
  );
};

export default Timer;

const Timerstyled = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-top: 2rem;
  color:#50015F ;
`;

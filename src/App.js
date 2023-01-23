import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/LoginPage/LoginForm";
import Timer from "./components/timer/Timer";
import Users from "./components/users/Users";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(true);
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    const result = localStorage.getItem("AUTH");
    setIsLoggedIn(Boolean(result));
  }, []);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
    localStorage.setItem("AUTH", JSON.stringify(true));
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };
  const openUsersHandler = () => {
    setUsers(true);
    setTimer(false);
  };

  const openTimerHandler = () => {
    setUsers(false);
    setTimer(true);
  };
  const loginState = !users && !timer && isLoggedin;
  const seeUser = users && isLoggedin;
  const seeTimer = timer && isLoggedin;
  return (
    <div className="App">
      <Header
        isLoggedin={isLoggedin}
        setIsLoggedIn={setIsLoggedIn}
        openTimerHandler={openTimerHandler}
        openUsersHandler={openUsersHandler}
        logoutHandler={logoutHandler}
      />

      {!isLoggedin && <LoginForm loginHandler={loginHandler} />}
      {loginState && <Users />}
      {seeUser && <Users />}
      {seeTimer && <Timer />}
    </div>
  );
}

export default App;

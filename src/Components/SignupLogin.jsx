import React, { useState, useContext } from "react";
import "./SignUpLogin.css";
import { CASTIRON_COOKERY_API } from "../Store/Config";
import axios from "axios";
import AuthContext from "../Store/AuthContext";

const SignupLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [register, setRegister] = useState(true);

  const authCtx = useContext(AuthContext);

  const siginInChangeHandler = () => {
    setRegister(!register);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      username: username,
      password: password,
    };

    if (register === true) {
      if (password !== passwordCheck) {
        alert(`Whoops! Your password and paswword check don't match!`);
        return;
      }
      axios
        .post(`${CASTIRON_COOKERY_API}/register`, body)
        .then((response) => {
          console.log(`After auth`);
          authCtx.login(
            response.data.token,
            response.data.exp,
            response.data.userId
          );
          setUserName("");
          setPassword("");
          alert(`Thank you for signing up!`);
        })
        .catch((error) => {
          console.log(`error in return of then from post register`);
          console.log(error);
          setUserName("");
          setPassword("");
        });
    } else {
      console.log(`am i hitting this?`);
      axios
        .post(`${CASTIRON_COOKERY_API}/login`, body)
        .then((response) => {
          console.log(`After auth in login`);
          authCtx.login(
            response.data.token,
            response.data.exp,
            response.data.userId
          );
          setUserName("");
          setPassword("");
        })
        .catch((error) => {
          console.log(`error in return of then from post login`);
          console.log(error);
          setUserName("");
          setPassword("");
        });
    }
    setRegister(false);
    setUserName("");
    setPassword("");
  };

  return (
    <div className="form__container">
      <form className="form">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {register && (
          <input
            type="password"
            value={passwordCheck}
            placeholder="re-type password"
            onChange={(event) => setPasswordCheck(event.target.value)}
          />
        )}

        <button onClick={handleSubmit}>
          {register ? "Sign Up" : "Log In"}
        </button>
      </form>

      <button className="form__check" onClick={siginInChangeHandler}>
        Alreday a member?
      </button>
    </div>
  );
};

export default SignupLogin;

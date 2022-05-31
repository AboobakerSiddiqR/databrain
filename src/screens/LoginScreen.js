import React, { useState } from "react";
import {
  confirmValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
  phNumberValidator,
} from "../helper/validator";
import "../styles/Login.css";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  const [mail, setMail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirm, setConfirm] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  const [number, setNumber] = useState({ value: "", error: "" });
  const [checked, setChecked] = useState(false);

  const history = useHistory();

  const apiRedirect = () => {
    const emailError = emailValidator(mail.value);
    const passwordError = passwordValidator(password.value);
    const confirmError = confirmValidator(password.value, confirm.value);
    const numberError = phNumberValidator(number.value);
    const nameError = nameValidator(name.value);
    if (
      emailError ||
      passwordError ||
      confirmError ||
      numberError ||
      nameError
    ) {
      setMail({ ...mail, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirm({ ...confirm, error: confirmError });
      setName({ ...name, error: nameError });
      setNumber({ ...number, error: numberError });
      return;
    }
    if (checked === false) {
      alert("Please read the agreement and check-in the box");
    } else history.push("/home");
  };

  const filterRedirect = () => {
    const emailError = emailValidator(mail.value);
    const passwordError = passwordValidator(password.value);
    const confirmError = confirmValidator(password.value, confirm.value);
    const numberError = phNumberValidator(number.value);
    const nameError = nameValidator(name.value);
    if (
      emailError ||
      passwordError ||
      confirmError ||
      numberError ||
      nameError
    ) {
      setMail({ ...mail, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirm({ ...confirm, error: confirmError });
      setName({ ...name, error: nameError });
      setNumber({ ...number, error: numberError });
      return;
    }
    if (checked === false) {
      alert("Please read the agreement and check-in the box");
    } else history.push("/filter");
  };

  return (
    <div className="Login">
      {/* left__side */}
      <div className="left__img">
        <img
          alt=""
          className="login__img"
          src={require("../assets/login.png")}
        />
        <h2>Choose a date range</h2>
        <p className="line__one">Lorem ipsum dolor sit amet, consectetur</p>
        <p className="line__two">
          {" "}
          adipiscing elit. Mauris imperdiet bibendum.
        </p>
      </div>
      {/* login__side */}
      <div className="right__content">
        <div className="login__form">
          <h2>Create an account</h2>
          <div className="form__list">
            <p>Your email address</p>
            <input
              value={mail.value}
              onChange={(e) => setMail({ value: e.target.value, error: "" })}
              type="email"
            ></input>
            {mail.error ? (
              <p style={{ color: "tomato" }} className="error__text">
                {mail.error}
              </p>
            ) : (
              <p style={{ fontSize: "10px", color: "white" }}>None</p>
            )}
          </div>
          <div className="form__list">
            <p>Your password</p>
            <input
              value={password.value}
              onChange={(e) =>
                setPassword({ value: e.target.value, error: "" })
              }
              type="password"
            ></input>
            {password.error ? (
              <p style={{ color: "tomato" }} className="error__text">
                {password.error}
              </p>
            ) : (
              <p style={{ fontSize: "10px", color: "white" }}>None</p>
            )}
          </div>
          <div className="form__list">
            <p>Confirm your password</p>
            <input
              value={confirm.value}
              onChange={(e) => setConfirm({ value: e.target.value, error: "" })}
              type="password"
            ></input>
            {confirm.error ? (
              <p style={{ color: "tomato" }} className="error__text">
                {confirm.error}
              </p>
            ) : (
              <p style={{ fontSize: "10px", color: "white" }}>None</p>
            )}
          </div>
          <div className="form__list">
            <p>Your full name</p>
            <input
              value={name.value}
              onChange={(e) => setName({ value: e.target.value, error: "" })}
              type="name"
            ></input>
            {name.error ? (
              <p style={{ color: "tomato" }} className="error__text">
                {name.error}
              </p>
            ) : (
              <p style={{ fontSize: "10px", color: "white" }}>None</p>
            )}
          </div>
          <div className="form__list">
            <p>Your phone number</p>
            <input
              value={number.value}
              onChange={(e) => setNumber({ value: e.target.value, error: "" })}
              type="tel"
              style={{ width: "200px" }}
            ></input>
            {number.error ? (
              <p style={{ color: "tomato" }} className="error__text">
                {number.error}
              </p>
            ) : (
              <p style={{ fontSize: "10px", color: "white" }}>None</p>
            )}
          </div>
          <div className="agreement">
            <input
              type="checkbox"
              onChange={() => setChecked(!checked)}
              // onchange={setChecked((prevChecked) => !prevChecked)}
            />
            <p>I read and agree Terms and Conditions</p>
          </div>
          <button type="submit" onClick={apiRedirect}>
            GO TO API APP
          </button>
          <button
            style={{ marginLeft: "20px" }}
            type="submit"
            onClick={filterRedirect}
          >
            GO TO FILTER APP
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

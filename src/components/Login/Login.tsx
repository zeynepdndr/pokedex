import { useEffect, useReducer, useState } from "react";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
    default:
      return { value: "", isValid: null };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 5,
      };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 5,
      };
    default:
      return { value: "", isValid: null };
  }
};

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const signup = async () => {
    console.log("Signed up successfully!");
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Logged in successfully!");
  };

  useEffect(() => {
    setFormIsValid(passwordState.isValid && emailState.isValid);
  }, [emailState.value, passwordState.value]);

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);

    return () => clearTimeout(identifier);
  }, [isEmailValid, isPasswordValid]);

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          isValid={isEmailValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={isPasswordValid}
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button
            onClick={signup}
            className={styles.btn}
            disabled={!formIsValid}
          >
            LOGIN
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

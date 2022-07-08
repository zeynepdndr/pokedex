import { useContext, useEffect, useReducer, useState } from "react";
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
  // const [enteredEmail, setEnteredEmail] = useState("");

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
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });

    //not optimal solution for updating state, state update scheduling can be different. useEffect is nice solution
    // setFormIsValid(event.target.value.trim().length > 5 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //No need to add a value here, it is about that input lost focus
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

  //Refer to snapshot of the state. It will be run with latest state
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

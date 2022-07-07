import { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input type="email" id="email" label="Email" />
        <Input label="Password" type="password" id="password" />
        <div className={styles.actions}>
          <Button onClick={signup} className={styles.btn}>
            Register
          </Button>
          <Button type="submit" className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

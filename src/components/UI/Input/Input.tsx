import React from "react";
import styles from "./Input.module.css";

const Input: React.FC<any> = (props) => {
  const { id, isValid, type, value, onChange, onBlur } = props;
  return (
    <div
      className={`${styles.control}

       ${type === "password" ? styles.password : ""}`}
    >
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

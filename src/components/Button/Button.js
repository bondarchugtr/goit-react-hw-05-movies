import React from "react";
import s from "./Button.module.css";
const Button = ({ children, onClick }) => {
  return (
    <div className={s.block_button}>
      <button className={s.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;

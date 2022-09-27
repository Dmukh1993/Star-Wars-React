import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={s.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything{" "}
      </p>
    </>
  );
};
export default ErrorMessage;

import React from "react";
import { useLocation } from "react-router";
import img from "./img/not-found.png";
import s from "./NotFound.module.css";
const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <div className={s.img}>
        <img src={img} alt="not-found" />
      </div>
      <p className={s.text}>
        {" "}
        No mathc for <u>{location.pathname}</u>
      </p>
    </>
  );
};
export default NotFoundPage;

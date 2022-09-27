import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

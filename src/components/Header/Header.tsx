import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <NavLink to="/">
          <img src={logo} className="logo-img" alt="logo" />
        </NavLink>

        <NavLink to="/login">Logg inn</NavLink>
        <NavLink to="/play">Spill</NavLink>
        <NavLink to="/rules">Regler</NavLink>
      </nav>
    </header>
  );
}

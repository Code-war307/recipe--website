import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-text">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="text">
          <h1>Flavor Bite</h1>
          <p>Unlock the Joy of Cooking</p>
        </div>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#about">About</NavLink>
          </li>
          <li>
            <NavLink to="#services">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/save-recipe" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <div className="save">
                <i className="fa-solid fa-store"></i>
                <div className="save-count">
                  <p>{}</p>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

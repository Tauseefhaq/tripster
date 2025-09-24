import "../css/navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../contexts/MenuItems";
import { useState } from "react";
import Home from "../pages/home";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prev) => !prev);
  }
  return (
    <nav className="nav-main">
      <h3 className="brand">Tripster</h3>
      <div className="menu-items" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((items, index) => {
          return (
            <li key={index} className="item-list" >
              <Link onClick={() => setClicked(false)} className={items.cName} to={items.url}>
                <i className={items.icon}></i>
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

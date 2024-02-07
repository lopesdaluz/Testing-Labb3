// import react from "react";
import "../Styles/Hamburger.css";
import Ham from "../assets/bars-solid-1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <main className="header-hamburgare">
      <img src={Ham} alt="navigation-con" onClick={handleClick} />

      {isOpen && (
        <nav className={isOpen ? "hamburger-button" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gift/Men" onClick={closeMenu}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/gift/Women" onClick={closeMenu}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/gift/Children" onClick={closeMenu}>
                Children
              </Link>
            </li>
            <li>
              <Link to="/gift/Baby" onClick={closeMenu}>
                Baby
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </main>
  );
}

export default Hamburger;

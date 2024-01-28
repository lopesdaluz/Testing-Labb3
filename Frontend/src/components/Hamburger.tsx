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
              <Link to="/gift/Him" onClick={closeMenu}>
                Him
              </Link>
            </li>
            <li>
              <Link to="/gift/Her" onClick={closeMenu}>
                Her
              </Link>
            </li>
            <li>
              <Link to="/gift/Toddler" onClick={closeMenu}>
                Toddler
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

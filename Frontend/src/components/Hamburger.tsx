// import react from "react";
import "../Styles/Hamburger.css";
import Ham from "../assets/bars-solid-1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

// export interface HamburgerProps {
//   isInitiallyOpen?: boolean;
// }

export function Hamburger() {
  /*props: HamburgerProps*/

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    //om jag ska glömma den eller om den ska visas

    // if(isOpen === true){setIsOpen(false)}
    // else{setIsOpen(true)}

    setIsOpen(!isOpen);
    console.log("hamburger-button clicked" + isOpen, handleClick);
  };

  return (
    <main className="header-hamburgare">
      <img src={Ham} alt="navigation-con" onClick={handleClick} />

      {isOpen && (
        <nav className={isOpen ? "hamburger-button" : ""}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gift/card1">Him</Link>
            </li>
            <li>
              <Link to="/gift/card2">Her</Link>
            </li>
            <li>
              <Link to="/gift/card3">Toddler</Link>
            </li>
            <li>
              <Link to="/gift/card4">Baby</Link>
            </li>
          </ul>
        </nav>
      )}
    </main>
  );
}
export default Hamburger;

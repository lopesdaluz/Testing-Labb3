// import react from "react";
import "../Styles/Hamburger.css";
import Ham from "../assets/bars-solid-1.svg";
import { useState } from "react";

// export interface HamburgerProps {
//   isInitiallyOpen?: boolean;
// }

export function Hamburger() {
  /*props: HamburgerProps*/

  const { isInitiallyOpen } = useState<Boolean>(false); //props;
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen || false);

  const handleClick = () => {
    //om jag ska glömma den eller om den ska visas

    // if(isOpen === true){setIsOpen(false)}
    // else{setIsOpen(true)}

    setIsOpen(!isOpen);
    console.log("hamburger-button clicked" + isOpen, handleClick);
  };

  return (
    <main className="header-hamburgare">
      <div onClick={handleClick} className={isOpen ? "hamburger-button" : ""}>
        <img src={Ham} alt="navigation-con"></img>

        {isOpen && (
          <nav className="menu-list">
            <ul>
              <li>Home</li>
              <li>Him</li>
              <li>Her</li>
              <li>Toodler</li>
              <li>Baby</li>
            </ul>
          </nav>
        )}
      </div>
    </main>
  );
}
export default Hamburger;

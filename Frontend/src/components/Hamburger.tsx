// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGift } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../Styles/Hamburger.css";

export interface HamburgerProps {
  isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
  const { isInitiallyOpen } = props;
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const handleClick = () => {
    //om jag ska glömma den eller om den ska visas
    // setIsOpen((prev) => !prev);
    console.log("hamburger-button clicked", handleClick);
  };

  return (
    <div className="header">
      <div id="menu-Title">Your Suprise</div>
      <div onClick={handleClick} className="hamburger-button">
        <div className="hamburger-bar bar1" />
        <div className="hamburger-bar bar2" />
        <div className="hamburger-bar bar3" />
      </div>
    </div>
  );
}
export default Hamburger;

import { useState } from "react";
import "../Styles/Hamburger.css";

export interface HamburgerProps {
  isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
  const { isInitiallyOpen } = props;
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    console.log("hamburger-button clicked");
  };

  return (
    <div onClick={handleClick} className={`hamburger-button `}>
      <div className={`hamburger-bar bar1 `} />
      <div className={`hamburger-bar bar2 `} />
      <div className={`hamburger-bar bar3 `} />
    </div>
  );
}

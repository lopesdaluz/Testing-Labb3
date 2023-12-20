// import react from "react";
import "../Styles/Hamburger.css";
import Ham from "../assets/bars-solid-1.svg";

// export interface HamburgerProps {
//   isInitiallyOpen?: boolean;
// }

export function Hamburger() {
  /*props: HamburgerProps*/

  // const { isInitiallyOpen } = props;
  // const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const handleClick = () => {
    //om jag ska glömma den eller om den ska visas
    // setIsOpen((prev) => !prev);
    console.log("hamburger-button clicked", handleClick);
  };

  return (
    <main className="header-Hamburgare">
      <div onClick={handleClick} className="hamburger-button">
        <img src={Ham} alt="navigation-Icon"></img>
      </div>
      <nav>
        {/* <ul>
          <li>Home</li>
          <li>Gift</li>
        </ul> */}
      </nav>
    </main>
  );
}
export default Hamburger;

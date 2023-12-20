import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/gift-solid.svg";
import "../Styles/Hamburger.css";

export function Header() {
  return (
    <header className="header">
      <section className="suprise">
        <Hamburger />
        <p>Your Suprise</p>
        <nav className="navigation" aria-label="main-Navigation"></nav>
        <div id="picture-Logo">
          <img src={logo} alt="logo"></img>
        </div>
      </section>
      <hr id="line"></hr>
    </header>
  );
}
export default Header;

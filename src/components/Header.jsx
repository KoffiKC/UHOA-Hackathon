import * as React from "react";
import "../Header.css";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/source-sans-3/400.css"; 
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <h1 className="wordmark">UHOA</h1>
        <div className="line"></div>
        <h2 className="subtitle">Unheard Histories of America</h2>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;

import * as React from "react";
import "../Header.css";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/source-sans-3/400.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./Navbar";

function Header() {
  return (
     <>
     {/* Top Header - Now completely separate */}
     <div className="top-header">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="auth-links">
        <a href="/submit" className="submit-link"><i class="fa-solid fa-plus"></i> Submit</a>
          <a href="/signin" className="signin-link">
          <i className="fa-regular fa-circle-user"></i> Sign In
        </a>
        </div>
      </div>

      {/* Main Header Section */}
      <header className="header">
        <div className="branding">
          <h1 className="wordmark">UHOA</h1>
          <div className="line"></div>
          <h2 className="subtitle">Unheard Histories of America</h2>
        </div>

        {/* Navbar (now properly positioned under branding) */}
        <Navbar /> 
      </header>
    </>
  );
}

export default Header;

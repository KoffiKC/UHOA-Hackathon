import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/index">Index</Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
}

export default Navbar;

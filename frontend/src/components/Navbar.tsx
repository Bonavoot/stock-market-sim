import { Link } from "react-router-dom";
import "/src/Navbar.css";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/stock">
        <img
          src={logo}
          alt="logo"
          style={{ width: "35px", marginLeft: "25px" }}
        />
      </Link>
      <input type="text" placeholder="APPL, Apple, etc..." />
      <div className="links">
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/account">ACCOUNT</Link>
      </div>
    </div>
  );
};

export default Navbar;

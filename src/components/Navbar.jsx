import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when navigating to a different page
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Products
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-category">
              <Link to="/category/1" className="dropdown-item">Category 1</Link>
              <Link to="/category/2" className="dropdown-item">Category 2</Link>
              <Link to="/category/3" className="dropdown-item">Category 3</Link>
              {/* Add more categories as needed */}
            </div>
          </div>
        )}
      </div>
      
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/story" className="nav-link">Story</Link>
      <Link to="/concept" className="nav-link">Concept</Link>
    </nav>
  );
}

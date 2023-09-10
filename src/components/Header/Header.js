import { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showicons, setshowicons] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          <h2 className="spaceX logo">
            <span>N</span>SRGFX
          </h2>
        </a>
        <div className="nav_menu">
          <ul className={showicons ? "mobile_nav_list" : "nav_list"}>
            <li>
              <a href="index.html" className="nav_link">
                <i className="uil uil-home nav_icon"></i>
                <span className="nav_item">Home</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav_link">
                <i className="uil uil-bag nav_icon"></i>
                <span className="nav_item">Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav_link">
                <i className="uil uil-comment-alt-chart-lines nav_icons"></i>
                <span className="nav_item">Contact</span>
              </a>
            </li>
            <li>
              <a href="#skill" className="nav_link">
                <i className="uil uil-user nav_icon"></i>
                <span className="nav_item">Skills</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile_menu">
          <button onClick={() => setshowicons(!showicons)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

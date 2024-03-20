import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CgClose, CgMenu } from "react-icons/cg";
import { Link } from "react-scroll";
import resume from "../assets/Resume_NehaKennedy.pdf";
import ReactGA from 'react-ga4';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const closeMenu = () => setNav(false);
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1200}
              onClick={closeMenu}
            >
              <img src={Logo} alt="website logo" />
            </Link>
          </div>

          <ul className={nav ? "nav-list active" : "nav-list"}>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1200}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1200}
                onClick={closeMenu}
              >
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1200}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1200}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <a
                href="https://neha-blog.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </a>
            </li> */}
            <li>
              <a href={resume} download="Resume_NehaKennedy.pdf" onClick={()=>{
                ReactGA.event('resume-download', {
                  'download_file': 'Resume_NehaKennedy.pdf'
                })
              }}>
                <div className="cta">Resume</div>
              </a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {nav ? (
              <CgClose className="icon" size={28} />
            ) : (
              <CgMenu className="icon" size={28} />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

import React from 'react'
import {RiDribbbleFill,RiLinkedinFill, RiTwitterFill, RiGithubFill} from 'react-icons/ri'
import {SiFrontendmentor} from 'react-icons/si'
import Logo from '../assets/logo.png';
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer>
        <div className="top-content">
            <div className="footer-logo">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1200}
            >
                <img src={Logo} alt="logo" />
            </Link>
            </div>
            <div className="footer-social">
                <a href="https://github.com/nehanalinik" target="_blank" rel="noreferrer">
                <RiGithubFill size={26}/>
                </a>
                <a href="https://dribbble.com/nehanalinik" target="_blank" rel="noreferrer">
                <RiDribbbleFill size={26} />
                </a>
                <a href="https://www.frontendmentor.io/profile/nehanalinik" target="_blank" rel="noreferrer">
                <SiFrontendmentor size={24} />
                </a>
                <a href="https://twitter.com/KennedyNalini" target="_blank" rel="noreferrer">
                <RiTwitterFill size={26} />
                </a>
                <a href="https://www.linkedin.com/in/neha-nalini-aa447416b/" target="_blank" rel="noreferrer">
                <RiLinkedinFill size={26} />
                </a>
            </div>
        </div>
        <div className="bottom-content">
            <p>© Copyright 2022. Made by Neha Nalini K</p>
        </div>
    </footer>
  )
}

export default Footer
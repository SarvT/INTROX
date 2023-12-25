import React from "react";
import Typed from "typed.js";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Experience";
import Project from "./Projects";
import About from "./About";
import { animateScroll as scroll, scroller } from "react-scroll";

import {
  FiCode,
  FiFacebook,
  FiGithub,
  FiImage,
  FiInstagram,
  FiLinkedin,
  FiPercent,
} from "react-icons/fi";

export default function Homepage() {
  const el1 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el1.current, {
      strings: ["Hey, I am developer."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home-page">
        {/* Logo */}
        <div className="logo">
          <Link onClick={scroll.scrollToTop}>
            <FiCode size={56}/>
          </Link>
        </div>

        {/* NavBar */}
        <nav>
          <div className="top-nav">
            <Link
              className="nav-item"
              // to={"/homepage"}
              onClick={scroll.scrollToTop}
              activeClass="active"
              // to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Sarvesh Dhangar
            </Link>
            {/* <Link
              // to={"projects"}
              className="nav-item"
              onClick={scroll.scrollTo(111, {})}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="nav-item"
              onClick={scroll.scrollToBottom}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
            <Link
              className="nav-item"
              onClick={scroll.scrollToBottom}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link> */}
          </div>
        </nav>

        {/* Main Heading */}
        <div class="main">
          <div class="head-container">
            <p class="heading container sc-head">S</p>
            <p class="heading container sc-head">a </p>
            <p class="heading container sc-head">m</p>
            <p class="heading container sc-head">H</p>
            <p class="heading container sc-head">e</p>
            <p class="heading container sc-head">r</p>
            <p class="heading container sc-head">e</p>
            <p class="heading container sc-head">!</p>
          </div>
        </div>

        {/* Main Content */}
        <div class="main-txt container">
          <h2>
            <span ref={el1}></span>
          </h2>
        </div>

        {/* Bottom Nav */}
        <nav className="bottom-nav">
          <div className="nav-items">
            <Link className="nav-item" to={"https://github.com/sarvT"}>
              <FiGithub />
            </Link>
            <Link
              className="nav-item"
              to={"http://www.linkedin.com/in/sarvesh-mote-881818221"}
            >
              <FiLinkedin />
            </Link>
            <Link className="nav-item" to={"https://leetcode.com/sarveshmt_/"}>

              <FiCode />
            </Link>
          </div>
        </nav>
      </div>

      {/* <div style={{height:"100vh"}}></div> */}
      <Experience />
      {/* <div style={{height:"100vh"}}></div> */}
      <Project />
      {/* <div style={{height:"100vh"}}></div> */}
      <Contact />
      <About/>
    </>
  );
}

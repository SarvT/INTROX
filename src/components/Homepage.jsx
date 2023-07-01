import React from "react";
import Typed from "typed.js";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Experience from "./Experience";
import Project from "./Projects";
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
          <Link to={"/"}>
            <FiFacebook />
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
              Homepage
            </Link>
            <Link
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
              About
            </Link>
          </div>
        </nav>

        {/* Main Heading */}
        <div class="main">
          <div class="head-container">
            <h2 class="heading container">S</h2>
            <h2 class="heading container">a </h2>
            <h2 class="heading container">m</h2>
            <h2 class="heading container">H</h2>
            <h2 class="heading container">e</h2>
            <h2 class="heading container">r</h2>
            <h2 class="heading container">e</h2>
            <h2 class="heading container">!</h2>
          </div>
        </div>

        {/* Main Content */}
        <div class="main-txt container">
          <h2>
            <span ref={el1}></span>
          </h2>
        </div>

        {/* Bottom Nav */}
        <nav>
          <div className="nav-items">
            <Link className="nav-item" to={"/"}>
              <FiGithub />
            </Link>
            <Link className="nav-item" to={"/"}>
              {" "}
              <FiLinkedin />{" "}
            </Link>
            <Link className="nav-item" to={"/"}>
              {" "}
              <FiCode />
            </Link>
          </div>
        </nav>
      </div>

    <div id="projects" title="projects">

      <Project />
    </div>
      <Contact />
      <About />
    </>
    
  );
}
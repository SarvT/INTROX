import React from "react";
import Typed from "typed.js";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Contact from "./Contact"
import About from "./About"
import Experience from "./Experience"
import Project from "./Projects"

// import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
// import { FiPhoneCall } from "react-icons/fi";
// import { HiHome, HiOutlineLightBulb } from "react-icons/hi";
// import { BsPersonWorkspace } from "react-icons/bs";

import { FiCode, FiFacebook, FiGithub, FiImage, FiInstagram, FiLinkedin, FiPercent } from "react-icons/fi";

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

  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el2.current, {
      strings: [
        "I am Looking forward for opportunities in Application Development. and Web Development Experienced with Java, CPP and C Programming Languages. I have experience with development languages (Dart, JavaScript, Python). I am looking forward as Data Analyst in my career, Python is main tool with Data Analysis in this journey.",
      ],
      typeSpeed: 10,
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
              <FiFacebook/>
            </Link>
          </div>

          {/* NavBar */}
          <nav>
            <div className="top-nav">

            <Link className="nav-item" to={"/homepage"}> Homepage</Link>
            <Link className="nav-item" to={"/project"}> Projects</Link>
            <Link className="nav-item" to={"/experience"}> Experience</Link>
            <Link className="nav-item" to={"/contact"}> Contact</Link>
            <Link className="nav-item" to={"/about"}> About</Link>
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
            <p class="container-txt">
              <span ref={el2}></span>
            </p>
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

    <Experience/>
    <Project/>
    <Contact/>
    <About/>

    </>
  );
}

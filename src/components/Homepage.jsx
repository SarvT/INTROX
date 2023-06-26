import React from "react";
import Typed from 'typed.js';

import "./Homepage.css";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { HiHome, HiOutlineLightBulb } from "react-icons/hi";
import { BsPersonWorkspace } from "react-icons/bs";
export default function Homepage() {


  const el1 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el1.current, {
      strings: ['I am a developer.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el2.current, {
      strings: ['I am Looking forward for opportunities in Application Development. and Web Development Experienced with Java, CPP and C Programming Languages. I have experience with development languages (Dart, JavaScript, Python). I am looking forward as Data Analyst in my career, Python is main tool with Data Analysis in this journey.'],
      typeSpeed: 10,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>PORTFOLIO</title>
          {/* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script> */}
          
        </head>
        <body>
        


          {/* <div class="side-bar" style={{ width: "25%" }}>
            <ul>
              <li>
                <AiOutlineHome />
              </li>
              <li>
                <FiPhoneCall />
              </li>
              <li>
                <HiOutlineLightBulb />
              </li>
              <li>
                <HiOutlineLightBulb />
              </li>
              <li>
                <BsPersonWorkspace />
              </li>
            </ul>
          </div> */}

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
          <div class="main-txt container">
            <h2>
            <span ref={el1}>
            </span>
            </h2>
            <p class="container">
              <span ref={el2}>
              
              </span>
            </p>
          </div>
        </body>
      </html>
    </div>
  );
}

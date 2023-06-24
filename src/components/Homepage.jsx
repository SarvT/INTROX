import React from "react";
import "./Homepage.css";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { HiHome, HiOutlineLightBulb } from "react-icons/hi";
import { BsPersonWorkspace } from "react-icons/bs";
export default function Homepage() {
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
            <h2>I am devloper</h2>
            <p class="container">
              I used to create things with my gadgets and some logic. Let's see
              the example... Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ullam cum amet necessitatibus eos non aut, illo autem dolor
              illum consectetur, quisquam tenetur consequuntur fugit animi
              excepturi? Incidunt dolore recusandae architecto ea quasi,
              corporis ad.
            </p>
          </div>
        </body>
      </html>
    </div>
  );
}

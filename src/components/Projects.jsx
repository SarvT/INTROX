import React from "react";
import "./Apply.css"

import ph from "../assets/phone1.jpg";
import ph2 from "../assets/phone2.jpg";
import ph3 from "../assets/phone3.jpg";
import ph4 from "../assets/phone4.jpg";
import ph5 from "../assets/phone5.jpg";
import Carasoul from "./Carasoul";
import { FiCode, FiInstagram } from "react-icons/fi";

const slides = [
  // "../assets/phone5.jpg",
  // "../assets/phone5.jpg",
  "https://c.pxhere.com/photos/4f/f5/phone_iphone_telephone_hand_bokeh-128366.jpg!d",
  "https://c.pxhere.com/photos/4f/f5/phone_iphone_telephone_hand_bokeh-128366.jpg!d",
  "https://c.pxhere.com/photos/4f/f5/phone_iphone_telephone_hand_bokeh-128366.jpg!d",
  "https://c.pxhere.com/photos/4f/f5/phone_iphone_telephone_hand_bokeh-128366.jpg!d",
  "https://c.pxhere.com/photos/4f/f5/phone_iphone_telephone_hand_bokeh-128366.jpg!d",
  // "../assets/phone5.jpg",
  // "../assets/phone5.jpg",
];

// const slides=[
//   <FiInstagram/>,
//   <FiInstagram/>,
//   <FiInstagram/>,
//   <FiInstagram/>,
//   <FiInstagram/>,
// ]

export default function Projects() {
  return (
    <div>
      <div className="project">
        <h3 className="subhead">Projects</h3>

        <div className="projects-showcase">
        <div className="project-slide">
          <FiCode size={200}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            dolores tempore iste velit officiis quo corrupti blanditiis omnis?
            Voluptatem deleniti nemo dolore ullam.
          </p>
        </div>
        <div className="project-slide">
          <img src={ph} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            dolores tempore iste velit officiis quo corrupti blanditiis omnis?
            Voluptatem deleniti nemo dolore ullam.
          </p>
        </div>
        <div className="project-slide">
          <img src={ph} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            dolores tempore iste velit officiis quo corrupti blanditiis omnis?
            Voluptatem deleniti nemo dolore ullam.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

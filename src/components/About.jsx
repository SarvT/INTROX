import React from "react";
import "./Apply.css";
import compdesk from "../assets/comp-desk.jpg";

export default function About() {
  return (
    <div>
      <div id="about" className="about" style={{ marginTop: "20rem" }}>
        <h3 className="subhead">about</h3>

        

        <div className="about-img" style={{ width: "40vw",  }}>
          <img
            
            src={compdesk}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

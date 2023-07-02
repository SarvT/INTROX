import React from "react";
import "./Apply.css";
import compdesk from "../assets/comp-desk.jpg"

export default function About() {
  return (
    <div>
      <div id="about" className="about" style={{marginTop:"20rem"}}>
        <h3 className="subhead">about</h3>

        <div className="about-me" style={{width:"40vw", position:"absolute"}}>

        <span className="desc">
          <p>
            I am Looking forward for opportunities in Application Development.
            and Web Development Experienced with Java, CPP and C Programming
            Languages. I have experience with development languages (Dart,
            JavaScript, Python). I am looking forward as Data Analyst in my
            career, Python is main tool with Data Analysis in this journey.'
          </p>
        </span>
        </div>
      </div>

      {/* <div className="about-img" style={{width:"40vw", }}>
        <img style={{height:"22rem", right:"0", position:"absolute", margin:" 0 12rem"}} src={compdesk} alt="" />
      </div> */}
    </div>
  );
}


import React from "react";
import "./Apply.css";
import compdesk from "../assets/comp-desk.jpg";

export default function About() {
  return (
    <div>
      <div id="about" className="about" style={{ marginTop: "20rem" }}>
        <div className="form-div about-div">
          <h3 className="subhead">About me</h3>
          <p className="resume-intro">
          An Android Application developer with 1.5 years of experience in Web Development and Application Development, specialising in MERN and Android (Kotlin). My journey has been marked by both achievements and a commitment to continuous learning. Beyond my core development skills, I have a keen interest in Data Science, driven by the endless possibilities it offers.
<br />In addition to my technical expertise, I also possess strong UI/UX design skills, ensuring that the solutions I create are not only functional but also user-friendly and visually appealing. I thrive on the challenge of solving complex problems and approach each task with determination and creativity.
<br />My expertise lies in JavaScript Development, and I'm dedicated to creating innovative solutions that make a positive impact. Let's connect and explore how we can collaborate on exciting projects that drive positive change.
          </p>
            <button className="resume-btn" type=""  formAction="submit" id="submit" >

              <span>

              Resume
              </span>
            </button>
        </div>

        <div className="contact">
          <div className="contact-section">
            {/* <h3 className="subhead">contact</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}

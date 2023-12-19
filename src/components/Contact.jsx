import React from "react";
import "./Apply.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div className="contact" >

        <div className="contact-section">
        <h3 className="subhead">contact</h3>

        {/* <h4 className="subhead2">Phone</h4>
        <p>1800 203 203</p> */}
        <h4 className="subhead2" style={{}}>LinkdIn</h4>
        <Link to={"http://www.linkedin.com/in/sarvesh-mote-881818221"}>Click Here!</Link>
        <h4 className="subhead2">Email</h4>
        <a href="mailto:motesarv@gmail.com">motesarv@gmail.com</a>
          </div>

          
          <div className="form-div">
        <h3 className="subhead">contact form</h3>
            <form className="form" action="/" method="post">

              <div className="form-element">

              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" placeholder="your mail here!" />
              </div>
              <br />

              <div className="form-element">
              <label htmlFor="email">Phone</label>
              <br />
              <input type="number" id="phone" placeholder="your contact here!"/>
              </div>
              <br />

              <div className="form-element">
              <label htmlFor="email">Desscription</label>
              <br />
              <input type="text" id="desc" placeholder="related information!" />
              </div>

              <button type="submit" formAction="submit" id="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

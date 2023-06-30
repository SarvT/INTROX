import React from "react";
import "./Apply.css";

export default function Contact() {
  return (
    <div>
      <div className="contact">

        <div className="contact-section">
        <h3 className="subhead">contact</h3>

        <h4 className="subhead2">Phone</h4>
        <p>1800 203 203</p>
        <h4 className="subhead2">LinkdIn</h4>
        <p>Click Here!</p>
        <h4 className="subhead2">Email</h4>
        <p>example@gmail.com</p>
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

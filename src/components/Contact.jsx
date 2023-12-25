import React from "react";
import "./Apply.css";
import { Link } from "react-router-dom";
import { FiLinkedin, FiTwitter, FiMail,  } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
      <div className="contact" >

        <div className="contact-section">
        <h3 className="subhead">contact</h3>

        {/* <h4 className="subhead2">Phone</h4>
        <p>1800 203 203</p> */}
        <p className="contact-slogan">Sharing thoughts make good connections. Don't fill shy, Give a visit with just a click below!</p>
        {/* <h4 className="subhead2" style={{}}>One click Connect!</h4> */}
        <div className="icon-row">

        {/* <Link  to={"http://www.linkedin.com/in/sarvesh-mote-881818221"}><FiLinkedin size={24}/></Link> */}
        <Link to={"https://x.com/SarvT_3?"}>
          <div className="icon-container">
            <div className="icon-background">
          < FiTwitter size={24}/>

            </div>
          </div>
          </Link>
        <Link to={"http://www.linkedin.com/in/sarvesh-mote-881818221"}>
          <div className="icon-container">
            <div className="icon-background">
          <FiLinkedin size={24}/>

            </div>
          </div>
          </Link>
        <Link to={"mailto:motesarv@gmail.com"}>
          <div className="icon-container">
            <div className="icon-background">
          <FiMail size={24}/>

            </div>
          </div>
          </Link>
        {/* <Link to={"mailto:motesarv@gmail.com"}><FiMail size={24}/></Link> */}
        {/* <h4 className="subhead2">Email</h4> */}
        {/* <a href="mailto:motesarv@gmail.com">motesarv@gmail.com</a> */}
        </div>
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

              <button type="submit" formAction="submit" id="submit">
                <span>

                Submit
                </span>
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}

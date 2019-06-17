import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contactform">
        <form action="https://formspree.io/pauljlee94@gmail.com" method="POST">
          <div className="input">
            <label>Name</label>
            <br />
            <input id="name" name="name" type="text" />
            <br />

            <label>Email</label>
            <br />
            <input id="email" name="email" type="text" />
            <br />

            <label>Subject</label>
            <br />
            <input id="subject" name="subject" type="text" />
            <br />

            <label>Message</label>
            <br />
            <textarea id="message" name="message" />
            <br />
          </div>
          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

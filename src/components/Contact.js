import React from "react";

function Contact() {
  return (
    <section className="contactSection">
      <div className="contact">
        <div className="anchor" id="contact"></div>
        <div className="contactText">
          <h1>We can make your</h1>
          <h1>dreams come true.</h1>
          <hr/>
          <p>If you have any questions, feel free to reach out to us.</p> 
          <p>Someone will reach out to you soon.</p>
          <br/>
          <p className="address break">1234 Street Blvd.</p>
          <p className="address">Atlanta, GA 12345</p>
          <br/>
          <p className="address">(123)456-7890</p>
        </div>
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
    </section>
  );
}

export default Contact;

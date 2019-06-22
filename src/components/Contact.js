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
        <a className="mailButton" href="mailto:hello@monogramprojects.com">Send us an Email</a>
      </div>
    </section>
  );
}

export default Contact;

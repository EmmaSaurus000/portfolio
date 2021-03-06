import React from "react";
import "./Contact.css";
import ph from "../public/phone.gif";
import email from "../public/email.gif";
import num from "../public/num.png";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="contact-container">
        <h3 className="contact-title">
          Let's talk about how I can add value to your business
          <img className="gif" src={ph} style={{ maxWidth: 40 }} />
        </h3>
        <div>
          <div className="contact-col">
            <div className="contact-row">
              <div>
                <img className="gif" src={email} style={{ maxWidth: 50 }} />
              </div>
              <div>
                <p className="mailme">
                  <a className="mail" href="mailto:emmasaurus000@gmail.com">
                    Email me</a> <span className="black"> to arrange a chat or call  </span>
                                <img className="call" src={ num } /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

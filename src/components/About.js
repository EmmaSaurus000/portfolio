import React from "react";
import "./About.css";
import me from "../public/Pic_sm.png";
import me_new from "../public/me_new.jpg";
import mortarboard from "../public/mortarboard.gif";

export default function About() {
  return (
    <section id="about">
        <div className="about-container">
          <h3 className="about-title">
            Need a high-value junior dev?
            <img className="gif" src={mortarboard} style={{ maxWidth: 50 }} />
          </h3>
          <div className="about-row">
            <div className="about-div">
              <div>
                <img className="pic" alt="it's me" src={me_new} />
              </div>
              <div>
                <p>
                  Graduating in July '22 with a{" "}
                  <span className="about-span">
                    Diploma of Information Technology (Advanced Programming)
                  </span>{" "}
                  and holding an earlier{" "}
                  <span className="about-span">
                    Bachelor of Arts (Communication) with Distinction
                  </span>
                  , Emma has rapidly learned multiple programming languages and
                  frameworks while delivering projects to spec and on time. A
                  lifelong learner, Emma has also attained a certificate in{" "}
                  <span className="about-span">Big Data for Agri-Food </span>
                  via the University of Wageningen and has other courses in
                  progress on <span className="about-span">React</span>,{" "}
                  <span className="about-span">Rust </span>
                  and <span className="about-span">WebAssembly</span>. Her
                  technical writing skills add value for internal documentation,
                  client communication and project promotion.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

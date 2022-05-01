// src/components/Skills.js

import diagram from "../public/diagram.gif";
import clock from "../public/clock.gif";
import React from "react";
import "./Skills.css";
import python from "../public/python.png";
import C_pic from "../public/C.png";
import flutter from "../public/flutter.png";
import php from "../public/php.png";
import js from "../public/js.png";
import rust from "../public/rust.png";
import wasm from "../public/wasm.png";
import sql from "../public/sql.png";

export default function Skills() {
  return (
    <section id="skills">
        <div className="skills-container">
          <h3 className="skills-title">
            Skills — Languages and Frameworks
            <img className="gif" src={diagram} style={{ maxWidth: 40 }} />
          </h3>
          <div className="about-row">
            <div className="skills-col">
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={python}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  <span className="skills-span">Python </span> projects include:
                  <br></br>— big-data processing with{" "}
                  <span className="skills-span">Pandas</span> and{" "}
                  <span className="skills-span">OpenPyXl</span>
                  <br></br>— a multi-media player built in{" "}
                  <span className="skills-span">PyQt5</span> using{" "}
                  <span className="skills-span"> OOP </span> principles<br></br>
                  — a <span className="skills-span">NoSQL </span>database with
                  third-party authentication via GitHub using{" "}
                  <span className="skills-span"> Flask</span> and a{" "}
                  <span className="skills-span">MongoDB</span> back-end
                </p>
              </div>
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={C_pic}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  <span className="skills-span">C++</span> Internet of Things
                  projects using:<br></br>—{" "}
                  <span className="skills-span">Arduino</span> and{" "}
                  <span className="skills-span">ESP32</span>
                  <br></br>— <span className="skills-span">MQTT</span> message
                  broker
                </p>
              </div>
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={flutter}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  Mobile development with{" "}
                  <span className="skills-span">Dart</span> and{" "}
                  <span className="skills-span">Flutter</span>
                  <br></br>— working with a client to define problems and
                  develop an OOP solution<br></br>— producing a cross-platform app to
                  client specifications
                </p>
              </div>
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={php}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  {" "}
                  <span className="skills-span">PHP</span> and{" "}
                  <span className="skills-span">MySQL</span> projects:<br></br>—
                  Software as a Service development with{" "}
                  <span className="skills-span">role-based access control</span>{" "}
                  using the migrations-based{" "}
                  <span className="skills-span">Laravel</span> framework
                  <br></br>— invoicing software for Belmont Potters Group using
                  pure PHP and <span className="skills-span">MariaDB</span>
                </p>
              </div>
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={js}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  {" "}
                  <span className="skills-span">JavaScript</span> and{" "}
                  <span className="skills-span">React</span>:<br></br>— an
                  in-browser side-scrolling game using pure JavaScript<br></br>—
                  this web portfolio, which is built in React
                </p>
              </div>
              <div className="skills-row">
                <div>
                  <img
                    className="code-icon"
                    src={sql}
                    style={{ maxWidth: 50 }}
                  />
                </div>
                <p>
                  {" "}
                  <span className="skills-span">SQL</span><br></br>
                  — Used with MariaDB in my Belmont Potters' Group invoicing software. 
                  It might be surprising to include SQL here, but I genuinely love to work with it and with relational databases.
                  SQL's power, precision and stability over decades fill me with awe. It is a perfect tool for touching tables. 

                </p>
              </div>
              <div className="skills-row">
                <div className="spacer"></div>
                <p>
                  Other in-progress language learning:<br></br>
                  <div>
                    <img
                      className="inline-icon"
                      src={rust}
                      style={{ maxWidth: 100 }}
                    />
                    <img
                      className="inline-icon"
                      src={wasm}
                      style={{ maxWidth: 120 }}
                    />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

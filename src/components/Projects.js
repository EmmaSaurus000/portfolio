import React from "react";
import "./Projects.css";
import idea from "../public/idea.gif";
import pyqt from "../public/PyQT.png";
import lara from "../public/Laravel.png";
import auth from "../public/auth.png";
import del from "../public/deletions.png";
import bpg from "../public/bpg.png";
import rrr from "../public/RRR.png";
import chit from "../public/chittering.png";
import ada from "../public/Adafruit.png";
import todo from "../public/Todo_input.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h3 className="projects-title">
          Projects
          <img className="gif" src={idea} style={{ maxWidth: 40 }} />
        </h3>
        <div>
          <div className="projects-col">
            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={bpg}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">Invoicing software</span>
                <br></br> <span className="projects-span">PHP</span>,{" "}
                <span className="projects-span"> MySQL</span>
                <br></br>
                Invoicing software created in 2017 when I was treasurer of
                Belmont Potters' Group. I am beyond proud of creating this
                functional software, with which I migrated the club from
                haphazard on-paper book-keeping and coin-counting to digital
                invoices and payments.
              </p>
            </div>
            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={chit}
                  style={{ maxWidth: 150 }}
                />
              </div>
              <p>
                <span className="title">Shire Council mobile app</span>
                <br></br>
                <span className="projects-span">Dart</span>,{" "}
                <span className="projects-span">Flutter</span>,{" "}
                <span className="projects-span">OOP</span>
                <br></br>
                This mobile app is being made for a "client" — a local shire
                council — as part of my TAFE studies on Project Management.
                Having a complex real-world problem to solve is invaluable. The
                app will incorporate a rate-payment system, daily fire-rating
                information and an easy way for residents to report issues. The
                UI shown is a place-holder incorporating clickable areas.
              </p>
            </div>
          </div>

          <div className="projects-col">
            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={auth}
                  style={{ maxWidth: 250 }}
                />
                <img
                  className="proj-icon2"
                  src={del}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">To-Do List</span>
                <br></br>
                <span className="projects-span">Python</span>,{" "}
                <span className="projects-span">Flask</span>,{" "}
                <span className="projects-span">MongoDB</span>
                <br></br>
                This app implemented third-party authentication via GitHub and
                handled loosely structured NoSQL data.
              </p>
            </div>

            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={ada}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">Door Monitor</span>
                <br></br>
                <span className="projects-span">C++</span>,{" "}
                <span className="projects-span">MQTT</span>,{" "}
                <span className="projects-span">Internet of Things</span>
                <br></br>
                This fun project used an Arduino button to represent a reed contact-switch monitoring a door's state. 
                An Adafruit publisher-subscriber service was used with the MQTT protocol to provide real-time updates
                when the door was open. Sleep functions were also used to conserve device battery. 
                Electronics are a special kind of wizardry!
              </p>
            </div>

            
          </div>

          <div className="projects-col">
            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={pyqt}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">Multimedia Player</span>
                <br></br>
                <span className="projects-span">Python</span>,{" "}
                <span className="projects-span">PyQt5</span>,{" "}
                <span className="projects-span">OOP</span>
                <br></br>
                This desktop app displays images, loads and controls audio, and
                launches video using the Python adaptation of the Qt framework.
                Planning for this project involved creating data-flow diagrams.
                Building the application taught me about interacting with
                host-system files via loading mechanisms. The Qt framework is an
                OOP framework based around nested widgets.
              </p>
            </div>

            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={lara}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">Jukebox</span>
                <br></br>
                <span className="projects-span">PHP</span>,{" "}
                <span className="projects-span">Laravel</span>,{" "}
                <span className="projects-span">SQL</span>
                <br></br>
                This app is an example of software as a service, built to run in
                the cloud while providing a personalised user experience.
                Middleware was used to implement role-based access control and
                user authentication. CI/CD principles were followed to
                incrementally add functionality to the app.
              </p>
            </div>
          </div>

          <div className="projects-col">

          <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={rrr}
                  style={{ maxWidth: 250 }}
                />
              </div>
              <p>
                <span className="title">Red Running Hood</span>
                <br></br> <span className="projects-span">JavaScript</span>
                <br></br>
                Red Riding Hood is an in-browser game built purely with
                JavaScript, running in HTML Canvas. This project was especially
                fun to debug and improve, as testing involved playing to break
                its rules.
              </p>
            </div>

            <div className="projects-row">
              <div>
                <img
                  className="proj-icon"
                  src={todo}
                  style={{ maxWidth: 150 }}
                />
              </div>
              <p>
                <span className="title">Mobile To-Do List</span>
                <br></br>
                <span className="projects-span">Dart</span>,{" "}
                <span className="projects-span">Flutter</span>,{" "}
                <span className="projects-span">SQLite</span>,{" "}
                <span className="projects-span">Hive</span>
                <br></br>
                This OOP mobile app uses Google's cross-platform development framework Flutter. 
                While Flutter's web apps tend to be slow to load, its mobile apps are speedy both while running and in development.
              </p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

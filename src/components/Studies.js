import React from "react";
import "./Studies.css";
import uni from "../public/UniTranscript2.jpg";
import exam from "../public/exam.gif";
import py from "../public/python.png";
import tafe from "../public/TAFETranscript.png";
import ag from "../public/AgriFood.png";
import fe from "../public/ferris.png";

export default function Studies() {
  return (
    <section id="studies">
      <div className="skills-container">
        <h3 className="skills-title" style={{ paddingBottom: "1rem"}}>
          Studies — Qualifications and Course Information
          <img className="gif" src={ exam } style={{ maxWidth: 40 }} />
        </h3>
        <div className="about-row">
          <div className="skills-col">
            <div className="skills-row">
              <div>
                <img
                  className="proj-img"
                  src={tafe}
                  style={{ maxWidth: 400 }}
                />
              </div>
              <div>
                <p>
                  <span className="studies-span">
                    Diploma of Information Technology (Advanced Programming)
                  </span>
                  <br></br>Graduating July 2022
                </p>
                <p>
                  — Units in <span className="skills-span">programming </span>
                  include:<br></br>
                  Create and develop REST APIs Integrate databases with websites
                  (SQL and NoSQL units)<br></br>
                  Apply intermediate object-oriented language skills<br></br>
                  Implement and use a model-view-controller framework<br></br>
                  Build advanced user interfaces
                </p>
                <p>
                  — Units in <span className="skills-span">cybersecurity</span>
                  <br></br>
                  Implement security for applications<br></br>
                  Promote workplace cyber security awareness and best practices
                </p>
                <p>
                  — Units in <span className="skills-span"> big data </span> and <span className="skills-span"> machine learning</span>
                  <br></br>
                  Conduct significance tests<br></br>
                  Use unsupervised learning for clustering
                </p>
                <p>
                  — Units in{" "}
                  <span className="skills-span">project management</span>{" "}
                  include:<br></br>
                  Manage client problems<br></br>
                  Match ICT needs with the strategic direction of the
                  organisation<br></br>
                  Lead and facilitate a team
                </p>
                <p>
                  — Other units in{" "}
                  <span className="skills-span"> corporate privacy </span>
                  and programming{" "}
                  <span className="skills-span"> Internet of Things </span> devices
                </p>
              </div>
            </div>

            <div className="skills-row">
              <div>
                <img className="proj-img" src={ag} style={{ maxWidth: 400 }} />
              </div>
              <div>
                <p>
                  <span className="studies-span">
                    Certificate — Big Data for Agri-Food: Principles and Tools
                    (Advanced Programming)
                  </span>
                  <br></br>Achieved April 2022
                </p>
                <p>
                  Taught by Professor Ioannis Athanasiadis and Dr Sjoukje Osinga
                  of the University of Wageningen (Netherlands), this short
                  course introduced students to such concepts as: <br></br>— the
                  role of pure functions and immutable data<br></br>— the
                  ecosystem of commercial tools, with a focus on how Hadoop and
                  Apache Spark are used<br></br>— different big-data
                  architectures<br></br>— practical map-reduce exercises using
                  PySpark and creating dataframes<br></br>— data lakes and ETL
                  processing<br></br>— problems of volume, velocity, veriety and
                  veracity<br></br>— defining a data pipeline for a case study
                </p>
              </div>
            </div>

            <div className="skills-row">
              <div>
                <img
                  className="proj-img"
                  src={uni}
                  style={{ maxWidth: 400 }}
                />
              </div>
              <p>
                <span className="studies-span">
                  Bachelor of Arts (Communication){" "}
                </span>
                <br></br>— Top 1% of students on four occasions
                <br></br>— An exceptional course in critical thinking and
                persuasive writing
                <br></br>— A publishing practice major with a personal research
                project on digital publication before it was widespread
              </p>
            </div>

            <div >
              <div>
                <img className="code-icon" src={ fe } style={{ maxWidth: 50 }} />
              </div>
              <p>
                Other current online studies include <span className="skills-span"> Rust </span> and <span className="skills-span"> WebAssembly </span> with Kevin Hoffman and <span className="skills-span"> React </span> with Maximilian Schwarzmüller.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

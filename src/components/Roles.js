import React from "react";
import "./Roles.css";
import socialmedia from "../public/socialmedia.gif";
import books from "../public/books.gif";
import ear from "../public/support.gif";
import pen from "../public/pencil.gif";
import rcpt from "../public/reception.gif";
import pages from "../public/pages.gif";

export default function Roles() {
  return (
    <section id="roles">
      <div className="roles-container">
        <h3 className="roles-title">
          Roles — Work history
          <img className="gif" src={socialmedia} style={{ maxWidth: 40 }} />
        </h3>
        <div className="about-row">
          <div className="roles-col">
            <div className="roles-row">
              <div>
                <img
                  className="code-icon"
                  src={books}
                  style={{ maxWidth: 50 }}
                />
              </div>
              <p>
                <span className="roles-span">Owner</span>,
                <span className="roles-span"> The Word-Herder</span>
                <br></br>2005–2021
                <br></br>— Advanced document preparation services
                <br></br>— Proof-reading, editing and typesetting of academic
                journals, books, reports and doctoral theses
              </p>
            </div>
            <div className="roles-row">
              <div>
                <img className="code-icon" src={ear} style={{ maxWidth: 50 }} />
              </div>
              <p>
                <span className="roles-span">Audio-Transcriber </span> (remote),
                <span className="roles-span"> Auscript</span>
                <br></br>August 2020 – June 2021 (company sold to AI firm)
                <br></br>— Transcription of recordings of legal proceedings from
                a range of Australian jurisdictions, each of which required
                different, precise formatting
                <br></br>— Accuracy rating consistently above 99 per cent
              </p>
            </div>
            <div className="roles-row">
              <div>
                <img className="code-icon" src={pen} style={{ maxWidth: 50 }} />
              </div>
              <p>
                <span className="roles-span">Writer</span>,
                <span className="roles-span"> Offspring Magazine</span>
                <br></br>2016
                <br></br>— Parenting articles based on research and interviews
                with various experts and public figures
              </p>
            </div>
            <div className="roles-row">
              <div>
                <img
                  className="code-icon"
                  src={rcpt}
                  style={{ maxWidth: 50 }}
                />
              </div>
              <p>
                <span className="roles-span">Office Manager </span>/
                <span className="roles-span"> Receptionist</span>
                <br></br>September 2005 – June 2007
                <br></br>— Logistics (for remote mining-tenement visits and
                investor meetings) and administration
                <br></br>— Corporate documentation to meet ASIC requirements
              </p>
            </div>
            <div className="roles-row">
              <div>
                <img
                  className="code-icon"
                  src={pages}
                  style={{ maxWidth: 50 }}
                />
              </div>
              <p>
                <span className="roles-span">Associate Publisher </span>/
                <span className="roles-span"> Associate Editor</span>,
                <span className="roles-span">
                  {" "}
                  Australia Research Institute
                </span>
                ,
                <span className="roles-span">
                  {" "}
                  Curtin University of Technology
                </span>
                ,<br></br>October 2002 – December 2004, freelance 2005
                <br></br>— Coordinating the volunteer peer review, editing and
                publication of academic books and journals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./About.css";

export default function Credits() {
  return (
    <section id="about">
      <div className="about-container">
        <h3 className="about-title">Credits</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>Logos</span><br></br>
          Python: Sjef Vapess
          <a href="https://www.pngitem.com/middle/hThxTb_python-python-icon-png-transparent-png/"  target="_blank"> PNGitem</a>
          <br></br>
          Flutter: <a href="https://www.pngwing.com/en/free-png-hnzvd"  target="_blank"> PNGwing</a>    <br></br>
          SQL: <a href="https://commons.wikimedia.org/wiki/File:Sql_data_base_with_logo.png"  target="_blank">Wikimedia
          Commons</a>   </p><br></br>
          <p>
          <span style={{ fontWeight: "bold" }}>Gifs</span><br></br><a href="https://www.flaticon.com/free-animated-icons/education"  target="_blank">Freepik via Flaticon</a>
        </p>
      </div>
    </section>
  );
}

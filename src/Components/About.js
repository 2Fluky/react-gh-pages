import React from 'react';
import "../index.css";

function About() {

  window.scrollTo(0,0);

  return (
      <div className="blockY">
        <div className="row-container">
            <div className="item-card">
              <div className="img" id="uil"></div>
              <p id="card-title">Competitions</p>
              <p id="card-text">Through the club, you can apply with your peers to compete
                in UIL CS which hosts local comptuer-science related 
                competitions consisting of tests and programming (revolving 
                around java).
              </p>
            </div>
            <div className="item-card">
              <div className="img" id="codejam"></div>
              <p id="card-title">Code Jams</p>
              <p id="card-text">Code Jams are anywehre from a day to a week, in which everyone
                in the club are given the same prompt, and either in groups, 
                or individually, they work together to complete said prompt.</p>
            </div>
            <div className="item-card">
              <div className="img" id="lessons"></div>
              <p id="card-title">Lessons</p>
              <p id="card-text">Within the club, you will also have the 
              opportunity to learn about new aspects of programming and the 
              coding industry through instruction and guest speakers.
              </p>
            </div>
        </div>
        <div id="row2" className="row-container">
        </div>
      </div>
  );
}

export default About;
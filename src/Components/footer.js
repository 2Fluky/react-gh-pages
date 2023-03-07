import React from 'react';
import '../index.css';

function Footer() {

  return (
    <div className="footer">
       <a target="_blank" rel="noopener noreferrer" href="https://bowie.austinschools.org/"><img id="bowie-logo" alt="bowie logo" src="https://vipbranding.com/wp-content/uploads/2018/05/JamesBowieHS_PrimaryMark.png"></img></a>
       <div className="footer-info">
          <span id="footer-text">Club hours: Tuesday ~ 4:40 p.m. to 5:20 p.m.</span>
          <span id="footer-text">Location: Room F222</span>
       </div>
      <div className="footer-links">
        <a id="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.uiltexas.org/academics/stem/computer-science">UIL Resources</a>
        <a id="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://docs.oracle.com/javase/7/docs/api/">Java Documentation</a>
        <a id="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/">Codecademy (Courses)</a>
        <a id="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/">W3Schools (Documentation)</a>
      </div>
      <div className="vl"></div>
    </div>
  );
}

export default Footer;
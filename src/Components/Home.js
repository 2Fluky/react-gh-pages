import React from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

 
function Home() {

  window.scrollTo(0,0);

  const navigate = useNavigate();
  

  const navigateAbout = () => {
    setTimeout(() => {
      navigate('/about');
    }, "300")
  }

  return (
    <div className="home">
      <div className="blockY">
        <div className="Info">
          <div className="about-title">
          <span id="title-text">Coder Club</span>
          </div>
          <div className="basic-info">
            <p id="info-text">Welcome to the Bowie Coding Club! In this club you will have
            the opportunity to code independently, work on projects with 
            friends, prepare for coding competitions, and collaborate with your peers.
            The coder club is open to anyone who is interested in learning more about coding, or for 
            anyone who is simply looking to meet others with similar interests.</p>
          </div>
        </div>
      </div>
      <div className="blockW">
        <img id="home-img" alt="coding graphic"src="https://assets.materialup.com/uploads/4df327d7-79d7-41ba-a4c7-ac96b56366d4/preview.jpg"></img>
        <div className="info-box">
          <span id="button-title">Want to learn more?</span>
          <span>Click the button below to found out more about our club activities!</span>
            <button className="learn-more" href="blank_target" onClick={navigateAbout}>Learn more</button>
        </div>
      </div>
      <div className="blockY">
        <div className="faq-row">
          <div id="faq-title">
            <h1>Club FAQ</h1>
            <p>If you have an questions refer to the links below to
              adress any inquires you have.
            </p>
            <p>If you still have additional questions, feel free to join
              the discord and ask there.
            </p>
          </div>
          <img alt="faq" width="400rem" src="https://miro.medium.com/max/1400/0*fjAGp_YGPXNRI6Zo"></img>
        </div>
        <div className="faq-links">
          <span id="faq-link">Club time & location</span>
          <br></br>
          <span id="faq-link">Club activities, events, etc.</span>
          <br></br>
          <span id="faq-link">Club contact information</span>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
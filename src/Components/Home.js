import React from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

 
function Home() {

  // window.scrollTo(0,0);

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
      <div className="blockY" id="faq-block">
        <div className="faq-row1">
          <div id="faq-title">
            <h1>Club FAQ</h1>
            <p>If you have an questions, then refer to the prompts below to
              adress anything you may need further clarification on.
            </p>
            <p>If you still have additional questions, feel free to join
              the discord and ask there or stop by during a meeting.
            </p>
          </div>
          <img id="faq-picture" alt="faq" width="400rem" src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/how-to-identify-questions-optimize-your-site-for-qa-faq-more-5f4546ee46f53-1280x720.png"></img>
        </div>
        <div className="faq-row2">
          <div id="faq-links">
            <HashLink className="faq-link" smooth to="/#q1">Location & Time</HashLink>
            <HashLink className="faq-link" smooth to="/#q2">Sign up</HashLink>
            <HashLink className="faq-link" smooth to="/#q3">Events & Activites</HashLink>
            <HashLink className="faq-link" smooth to="/#q4">Eligibility</HashLink>
            <HashLink className="faq-link" smooth to="/#q5">Additional Questions</HashLink>
          </div>
          <div id="faq-answers">
            <div className="question" id="q1">
              <span className="answer-title">Location & Time</span>
              <p>Club Meetings are every Tuesday after school from 4:40 p.m. to 5:20 p.m.
                in room F222, unless otherwise specified. For meeting time or day changes 
                please refer to the club schedule or discord.
              </p>
            </div>
            <div className="question" id="q2">
            <span className="answer-title">Sign up</span>
              <p>No formal sign up is required to join the club. If you would like to join, or are planning on joining, 
                feel free to stop by for the next meeting or
                reach out through the discord if you need any clarification.
              </p>
            </div>
            <div className="question" id="q3">
            <span className="answer-title">Events & Activites</span>
              <p>Activities in the coding club include: code jams, UIL/competition opportunities, 
                lessons in specific coding topics, guest presentations, etc. Additionally, if you
                would like to suggest activities, you can either reach out to us in person
                or through our discord.
              </p>
            </div>
            <div className="question" id="q4">
            <span className="answer-title">Eligibility</span>
              <p>The code club is open to anyone regardless of coding experience or ability.
                So whether you are already experienced or if you are brand-new, you are welcome
                to join!
              </p>
            </div>
            <div className="question" id="q5">
            <span className="answer-title">Addtional Questions</span>
              <p>If you have any additional questions or concerns feel free to stop
                by during club hours to adress anything. Alternatively, you may also 
                reach out to use via our club discord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
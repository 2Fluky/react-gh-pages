import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Contacts() {

  window.scrollTo(0,0);

  // const navigate = useNavigate();

  // const navigateCalendar = () => {
  //   navigate('/calendar');
  // }

  return (
    <div className="contacts">
      <div className="blockY">
        <div id="contact-row">
          <div className="discord-back">
            <h1>Want to stay up to date with the Club?</h1>
            <span>Join the club discord.</span>
            <div id="discord-label">
              <img alt="discord logo" width="40rem" src="https://www.svgrepo.com/show/331368/discord-v2.svg"></img>
              <span id="discord-text">- Click the icon to join -</span>
            </div>
          </div>
          <img id="contact-us-img" alt="contact-us" width="400rem" src="https://o.remove.bg/downloads/1476dc62-efca-40da-ba1d-8546632c8d2b/contact-center-abstract-concept_335657-3032-removebg-preview.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
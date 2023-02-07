import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contacts() {

  window.scrollTo(0,0);

  const navigate = useNavigate();

  const navigateCalendar = () => {
    navigate('/calendar');
  }

  return (
    <div className="contacts">
      <div className="blockY">
        <div className="discord-back">
          <h1>Want to stay up to date with the Club?</h1>
          <span>Join the club discord.</span>
          <div id="discord-label">
            <img alt="discord logo" width="40rem" src="https://www.svgrepo.com/show/331368/discord-v2.svg"></img>
            <span id="discord-text">- Click the icon to join -</span>
          </div>
        </div>
        <div className="contact-info">
          {/* <img alt="discord-animation" width="100rem" src="https://cdn.dribbble.com/users/5242374/screenshots/16641455/media/0a74ea6b1d505b316ced8be139175fc3.gif"></img> */}
          <span id="contact-text">Join the club discord to stay up-to date with club activities 
            and to access club-related resources! Alternatively you can also
            refer to the 
            <span className="nav-item" id="calendar-link" onClick={navigateCalendar}>club-calendar</span> 
            in order to keep up with meeting dates
            and content.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
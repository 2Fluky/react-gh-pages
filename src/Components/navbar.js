import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  const navigateAbout = () => {
    navigate('/about');
  }

  const navigateContacts = () => {
    navigate('/contacts');
  }

  const navigateCalendar = () => {
    navigate('/calendar');
  }

  
  // const [ navVisibility, setNavVisibility ] = useState("navbar");

  // var userAtTop;
  // window.onscroll = function (e)
  // {
  //   userAtTop = true;
  //   if(userAtTop)
  //   {
  //   if(window.scrollY === 0){
  //      setNavVisibility('navbar');
  //   }else{
  //     setNavVisibility('navbar-show');
  //   }
  //   userAtTop = false;
  //   }
  // }

  return (
    <div className="navbar-show">
        {/* <img alt="coding logo" id="coding-logo" src={require('./images/BowieCodingLogo.png')}></img> */}
        <span className="nav-item" onClick={navigateHome}>Home</span>
        <span className="nav-item" onClick={navigateAbout}>About</span>
        {/* <span id="nav-item" onClick={navigateProjects}>Projects</span> */}
        <span className="nav-item" onClick={navigateContacts}>Contacts</span>
        <span className="nav-item" onClick={navigateCalendar}>Calendar</span>
    </div>
  );
}

export default Navbar;
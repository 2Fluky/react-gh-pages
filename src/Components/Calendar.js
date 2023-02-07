import React from 'react';

function Calendar() {

  window.scrollTo(0,0);

  return (
    <div className="contacts">
      <div className="blockY">
        <div className="backdrop">
          {/* <h1 id="calendar-text">Club Schedule</h1> */}
          <iframe id="calendar" width="800px" height="500px" src="https://embed.styledcalendar.com/#ufnGeLjdlgnwpuDme9a9" title="Styled Calendar" class="styled-calendar-container" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
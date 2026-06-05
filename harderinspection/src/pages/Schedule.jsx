import React, { useState } from 'react'; // 1. Added useState here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight, faPhone, faX, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Schedule = () => { 
  const [isOpen, setIsOpen] = useState(false); 

  const handleOpen = () => setIsOpen(true); 
  const handleClose = () => setIsOpen(false); 

  return ( 
    <> 
      {/* 2. Toggle backdrop display style based on isOpen state */}
      <div 
        id='scheduleDivBack' 
        style={{ display: isOpen ? 'flex' : 'none' }}
      > 
        <div id='scheduleDiv'> 
          <a href="mailto:ddharder4@yahoo.com"><button className='scheduleBtn'><FontAwesomeIcon icon={faPhone} /> Call</button></a>
          <a href="tel:3162843811"><button className='scheduleBtn'><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>
          {/* 3. Added a close button inside the modal */}
          <button className='scheduleBtnClose' onClick={handleClose}><FontAwesomeIcon icon={faX} /></button>
        </div> 
      </div> 

      <div className="landing-container"> 
        <section className="intro-section"> 
          <div className="container" style={{ textAlign: 'center' }}> 
            <h2>Schedule Your Inspection</h2> 
            
            {/* 4. Attached handleOpen by reference to the pill button */}
            <button className="contact-pill" onClick={handleOpen}>
              Let's Schedule 
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
            </button> 
          </div> 
        </section> 
      </div> 
    </> 
  ); 
}; 

export default Schedule;

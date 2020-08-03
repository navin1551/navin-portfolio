import React, { useEffect } from 'react';
import './Skill.css';

import Aos from 'aos';

const Skill = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className='skill-section' data-aos="fade-left">
      <img src={props.icon} alt='skill icons' className="icon-images" />
      <h3 id="skill-name">{props.name}</h3>
    </div>
  );
};

export default Skill;
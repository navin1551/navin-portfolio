import React from 'react';
import './Skill.css';

const Skill = (props) => {
  return (
    <div className='skill-section'>
      <img src={props.icon} alt='skill icons' className="icon-images" />
      <h3 id="skill-name">{props.name}</h3>
    </div>
  );
};

export default Skill;
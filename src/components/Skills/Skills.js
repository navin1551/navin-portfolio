import React from 'react';
import Skill from '../Skill/Skill';
import './Skills.css';

const Skills = (props) => {
  const Skills = props.skills.map(skill => <Skill name={skill.name} key={skill.id} icon={skill.icon} />)
  return (
    <section id='skills-section'>
      <h1 id='skills-title'>Skills</h1>
      <section id='skill-list'>
        {Skills}
      </section>
    </section>
  );
};

export default Skills;
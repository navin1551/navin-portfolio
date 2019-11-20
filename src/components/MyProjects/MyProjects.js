import React from "react";
import Project from "../Project/Project";

export default function MyProjects(props) {
  let myProjects = props.projects.map(project => (
    <Project
      title={project.title}
      description={project.description}
      tech={project.tech}
      img1={project.img1}
      img2={project.img2}
      img3={project.img3}
    />
  ));
  return (
    <section>
      <h2>Projects</h2>
      <ul>{myProjects}</ul>
    </section>
  );
}

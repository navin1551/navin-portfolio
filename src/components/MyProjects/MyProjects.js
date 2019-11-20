import React from "react";
import Project from "../Project/Project";
import "./MyProjects.css";

export default function MyProjects(props) {
  let myProjects = props.projects.map(project => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      tech={project.tech}
      img1={project.img1}
      img2={project.img2}
      img3={project.img3}
      client={project.clientRepo}
      api={project.apiRepo}
      app={project.app}
    />
  ));
  return (
    <section className="my-projects-section">
      <h2 className="projects-title">Projects</h2>
      <ul>{myProjects}</ul>
    </section>
  );
}

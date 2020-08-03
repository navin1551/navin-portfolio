import React from "react";
import Nav from "./components/Nav/Nav";
import Title from './components/Title/Title'
import Intro from "./components/Intro/Intro";
import Skills from './components/Skills/Skills';
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";
import FadeInSection from './HOC/FadeInSection';
import Store from "./Store";
import "./App.css";

export default class App extends React.Component {
  state = {
    skills: Store.skills,
    projects: Store.projects,
  };

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <main>
          <Title />
          <Intro />
          <Skills skills={this.state.skills} />
          <MyProjects projects={this.state.projects} />
        </main>
        <Contact />
      </div>
    );
  }
}

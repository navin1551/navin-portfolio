import React from "react";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";
import Store from "./Store";
import "./App.css";

export default class App extends React.Component {
  state = {
    projects: Store.projects
  };

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Intro />
          <MyProjects projects={this.state.projects} />
        </main>
        <Contact />
      </div>
    );
  }
}

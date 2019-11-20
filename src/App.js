import React from "react";
import Nav from "./components/NavBar/Nav";
import Intro from "./components/Intro/Intro";
import MyProjects from "./components/MyProjects/MyProjects";
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
      </div>
    );
  }
}

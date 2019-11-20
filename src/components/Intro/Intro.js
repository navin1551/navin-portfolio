import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro-section">
      <header className="headline" role="banner">
        <h1>Hi, I'm Navin. I'm a fullstack developer based in Los Angeles</h1>
      </header>
      <section id="bio-section">
        <p>
          I am a dedicated software developer and recent graduate of the Full
          Stack Software Development school at Thinkful. I also have a
          background in finance and accounting as well. I am proficient in front
          end and back end development using React.js, Node.js, Express.js and
          PostgreSQL as well as testing frameworks such as Mocha and Chai.
        </p>
        <br />
        <p>
          My interests outside of coding include fitness, sports, reading about
          new advances in artificial intelligence, and enjoying the beautiful
          beaches of Southern California. I am an avid learner who is always
          looking to expand my knowledge of anything in the tech and coding
          world!
        </p>
      </section>
    </section>
  );
}

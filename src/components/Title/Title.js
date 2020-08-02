import React from 'react';
import './Title.css';

export default class Title extends React.Component {
  state = {
    title: ['fullstack developer', 'front end developer', 'tech geek', 'beach lover', 'dog owner', 'fitness enthusiast', 'foodie fanatic']
  };

  componentDidMount() {
    this.setState({ title: this.state.title[0] })
    const title = this.state.title;
    setInterval(() => {
      this.setState({ title: title[title.push(title.shift()) - 1] });
    }, 2000);
  };

  render() {
    return (
      <section id="title-section">
        <div id="title-text-section">
          <h1 id="title-h1">Hi, I'm Navin</h1>
          <h2 id="title-h2">I'm a <span id='title-carousel'>{this.state.title}</span></h2>
        </div>
      </section>
    )
  };
};

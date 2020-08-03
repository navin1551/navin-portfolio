import React, { useState, useEffect } from 'react';
import Store from '../../Store';
import './Title.css';

export default class Title extends React.Component {
  state = {
    title: Store.titleCarousel
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

// export default function Title() {
//   const [title, setTitle] = useState(Store.titleCarousel[0])

//   useEffect(() => {
//     const newTitle = { title }
//     setInterval(() => {
//       setTitle({ newTitle: newTitle[newTitle.push(newTitle.shift()) - 1] })
//     }, 2000);
//   }, []);

//   return (
//     <section id="title-section">
//       <div id="title-text-section">
//         <h1 id="title-h1">Hi, I'm Navin</h1>
//         <h2 id="title-h2">I'm a <span id='title-carousel'>{title}</span></h2>
//       </div>
//     </section>
//   )
// };
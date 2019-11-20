import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/main.css";
import "react-responsive-carousel/lib/styles/main.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Project(props) {
  return (
    <div className="image-area">
      <Carousel dynamicHeight>
        <div>
          <img src={props.img1} className="thumbnail-pic" alt="img1" />
        </div>
        <div>
          <img src={props.img2} className="thumbnail-pic" alt="img2" />
        </div>
        <div>
          <img src={props.img3} className="thumbnail-pic" alt="img3" />
        </div>
      </Carousel>
      <ul className="project-info">
        <li>Title: {props.title}</li>
        <br />
        <li>Description: {props.description}</li>
        <br />
        <li> Technologies Implemented: {props.tech}</li>
        <br />
        <li>
          <a href={props.client} target="_blank" rel="noopener noreferrer">
            Client Repo
          </a>
        </li>
        <br />
        <li>
          <a href={props.api} target="_blank" rel="noopener noreferrer">
            API Repo
          </a>
        </li>
        <br />
        <li>
          <a href={props.app} target="_blank" rel="noopener noreferrer">
            Try App Here
          </a>
        </li>
      </ul>
    </div>
  );
}

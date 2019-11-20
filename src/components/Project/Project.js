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
          <img src={props.img1} className="thumbnail-pic" />
        </div>
        <div>
          <img src={props.img2} className="thumbnail-pic" />
        </div>
        <div>
          <img src={props.img3} className="thumbnail-pic" />
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
          <a href={props.client} target="_blank">
            Client Repo
          </a>
        </li>
        <br />
        <li>
          <a href={props.api} target="_blank">
            API Repo
          </a>
        </li>
        <br />
        <li>
          <a href={props.app} target="_blank">
            Try App Here
          </a>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/main.css";
import "react-responsive-carousel/lib/styles/main.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Project(props) {
  return (
    <li className="image-area">
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
      <div>
        <p>Title: {props.title}</p>
        <br />
        <p>Description: {props.description}</p>
        <br />
        <p> Technologies Implemented: {props.tech}</p>
        <br />
        <p>{props.client}</p>
        <br />
        <p>{props.api}</p>
        <br />
        <p>{props.app}</p>
      </div>
    </li>
  );
}

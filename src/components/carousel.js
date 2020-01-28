import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import groomed from "../../images/just-groomed.jpg";
import ginger from "../../images/ginger.png";
import lifeisgood from "../../images/life-is-good.jpg";
import hiking from "../../images/like-hiking.png";
import notdog from "../../images/not-really-adog.jpg";
import putmedown from "../../images/put-me-down.jpg";
import basket from "../../images/tracy-basket.jpg";
import eyes from "../../images/nice-eyes.jpg";
import who from "../../images/whos-there.jpg";
import whyme from "../../images/why-me.jpg";

const MyPups = () => {
  return (
    <div>
      <Carousel className="mx-auto center">
        <Carousel.Item className="images">
          <img className="d-block w-100" src={groomed} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ginger} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={lifeisgood} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hiking} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={notdog} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={notdog} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={putmedown} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={basket} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={eyes} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={who} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={whyme} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyPups;

import React from "react";
import { Link } from "react-router-dom";

export default function Trip() {
  return (
    <div class="stars">
      <div class="central-body">
        <img
          class="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px"
          alt="404"
        />
        <Link to="/">
          <a
            href="http://salehriaz.com/404Page/404.html"
            class="btn-go-home"
            target="_blank"
          >
            GO BACK HOME
          </a>
        </Link>
      </div>
      <div class="objects">
        <img
          class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
          alt="404"
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
            alt="404"
          />
          <img
            class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
            alt="404"
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt="404"
          />
        </div>
      </div>
      <div class="glowing_stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </div>
  );
}

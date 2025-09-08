import "./style.css";
import { createCarousel } from "./carousel";

import img1 from "./images/img1.avif";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.avif";

const container = document.querySelector("#carousel-container");
createCarousel(container, [img1, img2, img3, img4, img5]);

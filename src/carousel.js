
import "./style.css";

export function createCarousel(container, images = []) {
  if (!container) return; // check container exists

  let currentIndex = 0;

  // 1️⃣ Create carousel structure
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");

  const leftBtn = document.createElement("button");
  leftBtn.classList.add("carousel-button-left");
  leftBtn.textContent = "Left";

  const rightBtn = document.createElement("button");
  rightBtn.classList.add("carousel-button-right");
  rightBtn.textContent = "Right";

  const track = document.createElement("div");
  track.classList.add("carousel-track");

  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");

  // 2️⃣ Create slides and dots
  images.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");

    const img = document.createElement("img");
    img.src = src;

    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Append elements
  carouselContainer.appendChild(leftBtn);
  carouselContainer.appendChild(track);
  carouselContainer.appendChild(rightBtn);

  container.appendChild(carouselContainer);
  container.appendChild(dotsContainer);

  // 3️⃣ Carousel logic
  const allSlides = track.querySelectorAll(".carousel-slide");
  const dots = dotsContainer.querySelectorAll(".dot");
  const slideWidth = allSlides[0].getBoundingClientRect().width;

  function updateSlide() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function moveNext() {
    currentIndex = currentIndex + 1;
     if (currentIndex >= allSlides.length) {
    currentIndex = 0;
  }
    updateSlide();
  }

  function movePrev() {
    currentIndex = currentIndex - 1 
      if (currentIndex < 0) {
    currentIndex = allSlides.length - 1;
  }
    updateSlide();
  }

  leftBtn.addEventListener("click", movePrev);
  rightBtn.addEventListener("click", moveNext);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide();
    });
  });

  // 4️⃣ Automatic advance every 5s
  setInterval(moveNext, 5000);
}

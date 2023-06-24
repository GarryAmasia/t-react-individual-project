const carouselSlide = document.querySelector(".testimonials__right--slider");
const carouselDiv = document.querySelectorAll(
  ".testimonials__right--slider .testimonials__right--one"
);
// console.log(carouselDiv);
const prevBtn = document.querySelectorAll(".prevBtn");
const nextBtn = document.querySelectorAll(".nextBtn");

//initial counter set as 1
let counter = 1;
//get size of the div => .testimonial__right--one
const size = carouselDiv[0].clientWidth;

//initial display when the page load
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`prev button is clicked`);
    carouselSlide.style.transition = `all 300ms ease-in-out`;
    counter--;
    console.log(counter);
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  });
});

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`next button is clicked`);
    carouselSlide.style.transition = `all 300ms ease-in-out`;
    counter++;
    console.log(counter);
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    console.log(carouselDiv[counter]);
  });
});

//event happening when transition end => transitionend

carouselSlide.addEventListener("transitionend", () => {
  console.log(`transition done`);
  if (carouselDiv[counter].id === `david`) {
    carouselSlide.style.transition = "none";
    counter = carouselDiv.length - 3;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselDiv[counter].id === `garry`) {
    carouselSlide.style.transition = "none";
    counter = carouselDiv.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});

//accordion
const accordions = document.querySelectorAll(".accordion__wrapper .accordion");
console.log(accordions);

accordions.forEach((accordion) => {
  console.log(accordion);
  accordion.onclick = () => {
    accordion.classList.toggle("active");
  };
});

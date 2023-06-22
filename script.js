const carouselSlide = document.querySelector(".testimonials__right--slider");
const carouselDiv = document.querySelectorAll(
  ".testimonials__right--slider .testimonials__right--one"
);
const prevBtn = document.querySelectorAll(".prevBtn");
const nextBtn = document.querySelectorAll(".nextBtn");
// console.log(nextBtn);

//initial counter set as 1
let counter = 1;
//get size of the div
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
  });
});

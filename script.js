// Fade-in animation on scroll
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Smooth scroll for nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const fullTrack = document.querySelector('.fullwidth-carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showNextSlide() {
  index++;
  if (index < slides.length) {
    fullTrack.style.transform = `translateX(-${index * 100}%)`;
  } else {
    clearInterval(autoScroll); // stop scrolling after last slide
  }
}

// Auto scroll every 3 seconds, one time only
const autoScroll = setInterval(showNextSlide, 3000);




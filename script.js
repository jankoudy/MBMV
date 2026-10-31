(() => {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const indicators = Array.from(document.querySelectorAll(".indicator"));
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (slides.length > 1) {
    let current = 0;
    const interval = 4500;

    window.setInterval(() => {
      slides[current].classList.remove("is-active");
      if (indicators[current]) indicators[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
      if (indicators[current]) indicators[current].classList.add("is-active");
    }, interval);
  }
})();

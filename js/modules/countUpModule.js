import { CountUp } from "../library/countUp/countup.js";
export default function countUpModule() {
  let numElements = document.querySelectorAll(".countNum");

  function checkElements() {
    numElements.forEach((numElement) => {
      if (
        isElementInViewport(numElement) &&
        !numElement.classList.contains("counted")
      ) {
        numElement.classList.add("visible");
        let n = parseInt(numElement.textContent);
        const countUp = new CountUp(numElement, n, 3, 2.5, {
          useEasing: true,
          separator: "",
        });
        countUp.start();
        numElement.classList.add("counted");
      }
    });
  }

  window.addEventListener("scroll", () => {
    checkElements();
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Kiểm tra các phần tử khi tải trang
  window.addEventListener("DOMContentLoaded", () => {
    checkElements();
  });
}

import { CountUp } from "../library/countUp/countup.js";
export default function countUpModule() {
  let num = document.querySelectorAll(".countNum");
  num.forEach((v) => {
    let n = parseInt(v.textContent);
    const countUp = new CountUp(v, n, 3, 2.5, {
      useEasing: true,
      separator: "",
    });
    let check = true;
    countUp.start();
    window.addEventListener("scroll", () => {
      if (v.getBoundingClientRect().top < window.innerHeight && check) {
        check = false;
      }
    });
  });
}

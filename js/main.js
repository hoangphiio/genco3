import replaceTextModule from "./modules/replaceTextModule.js";
import aosModule from "./modules/aosModule.js";
import menuModule from "./modules/menuModule.js";
import popupModule from "./modules/popupModule.js";
import selectDropdownModule from "./modules/selectDropdownModule.js";
import smoothScroll from "./modules/smoothScroll.js";
import swiperModule from "./modules/swiperModule.js";

window.addEventListener("DOMContentLoaded", () => {
  replaceTextModule();
  aosModule();
  menuModule();
  popupModule();
  selectDropdownModule();
  smoothScroll();
  swiperModule();
});

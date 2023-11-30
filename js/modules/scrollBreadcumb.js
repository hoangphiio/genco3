export default function scrollBreadcumb() {
  window.addEventListener("DOMContentLoaded", function () {
    var scrollContainer = document.querySelector(".tab-wrapper");
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
  });
}

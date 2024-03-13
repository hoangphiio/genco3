export default function searchModule() {
  const hdSearch = document.querySelector(".search");
  const searchForm = document.querySelector(".openSearchForm");
  const searchClose = document.querySelector(".searchClose");
  const body = document.querySelector("body");

  const menuBtn = document.querySelector(".header-bar");
  const menuItems = document.querySelector(".header-mobile");

  function toggleMenu() {
    body.classList.toggle("onscroll");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }

  function openSearchForm(e) {
    e.stopPropagation();
    body.classList.toggle("onscroll");
    searchForm.classList.toggle("visible");
    if (menuItems.classList.contains("open")) {
      toggleMenu();
    }
  }

  function closeSearchForm() {
    body.classList.remove("onscroll");
    searchForm.classList.remove("visible");
    if (menuItems.classList.contains("open")) {
    }
  }

  if (hdSearch) {
    hdSearch.onclick = openSearchForm;
    searchClose.onclick = closeSearchForm;
  }
}

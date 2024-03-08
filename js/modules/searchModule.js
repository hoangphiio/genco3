export default function searchModule() {
  const hdSearch = document.querySelector(".search");
  const searchForm = document.querySelector(".searchForm");
  const searchClose = document.querySelector(".search-form-close");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const menuBtn = document.querySelector(".header-bar");
  const menuItems = document.querySelector(".header-mobile");

  function toggleMenu() {
    body.classList.toggle("onscroll");
    overlay.classList.toggle("active");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }

  function openSearchForm(e) {
    e.stopPropagation();
    body.classList.toggle("onscroll");
    searchForm.classList.toggle("active");
    overlay.classList.toggle("open");
    if (menuItems.classList.contains("open")) {
      toggleMenu();
    }
  }

  function closeSearchForm() {
    body.classList.remove("onscroll");
    searchForm.classList.remove("active");
    overlay.classList.remove("open");
    if (menuItems.classList.contains("open")) {
    }
  }

  if (hdSearch) {
    hdSearch.onclick = openSearchForm;
    searchClose.onclick = closeSearchForm;
  }

  $(document).ready(function () {
    var $showBtn = $("#show");
    var $projectNote = $(".project-note");

    $showBtn.click(function () {
      $projectNote.slideToggle("flow");

      if ($showBtn.hasClass("nw-link-detail")) {
        $showBtn
          .addClass("btn-collapse")
          .removeClass("nw-link-detail")
          .text("Thu gọn");
      } else {
        $showBtn
          .removeClass("btn-collapse")
          .addClass("nw-link-detail")
          .text("Xem thêm");
      }
    });
  });

  window.addEventListener("resize", function () {
    const addNavBarLeft = document.querySelector(".res-inner");
    if (window.innerWidth <= 1024) {
      addNavBarLeft.classList.add("active");
    } else {
      addNavBarLeft.classList.remove("active");
    }
  });
}

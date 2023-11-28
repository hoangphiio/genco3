export default function searchModule() {
  const hdSearch = document.querySelector(".hd-search");
  const searchForm = document.querySelector(".searchForm");
  const searchClose = document.querySelector(".search-form-close");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const menuBtn = document.querySelector(".hd-bar");
  const menuItems = document.querySelector(".hd-mobile");

  function Toggle() {
    body.classList.toggle("onscroll");
    // Dark background
    overlay.classList.toggle("active");
    // Add open class
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }

  if (hdSearch) {
    hdSearch.onclick = (e) => {
      e.stopPropagation();
      body.classList.toggle("onscroll");
      searchForm.classList.toggle("active");
      overlay.classList.toggle("open");
      if ($(".hd-mobile").hasClass("open")) {
        Toggle();
      }
    };

    searchClose.onclick = closeSearchForm;

    function closeSearchForm() {
      body.classList.remove("onscroll");
      searchForm.classList.remove("active");
      overlay.classList.remove("open");
    }
  }

  $(document).ready(function () {
    $("#show").click(function () {
      $(".project-note").slideToggle("flow");
      if ($(".nw-link-detail").length > 0) {
        $("#show").addClass("btn-collapse").removeClass("nw-link-detail");
        $("#show").text("Thu gọn");
      } else {
        $("#show").removeClass("btn-collapse").addClass("nw-link-detail");
        $("#show").text("Xem thêm");
      }
    });
  });
}

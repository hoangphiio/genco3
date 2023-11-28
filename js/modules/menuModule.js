export default function menuModule() {
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");
  const menuBtn = document.querySelector(".hd-bar");
  const menuItems = document.querySelector(".hd-mobile");
  const expandBtn = document.querySelectorAll(".expand");

  function toggle() {
    body.classList.toggle("onscroll");
    // Dark background
    overlay.classList.toggle("active");
    // Add open class
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
    if ($(".searchForm").hasClass("active")) {
      $(".searchForm").removeClass("active");
      overlay.classList.toggle("open");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  menuBtn.onclick = overlay.onclick = closeMenu();

  // mobile menu expand
  expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
    });
  });

  function closeMenu() {
    expandBtn.forEach((btnSub) => {
      btnSub.classList.remove("open");
    });
  }

  window.onkeydown = function (event) {
    const key = event.key; // const {key} = event; in ES6+
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
      toggle();
    }
  };

  document.addEventListener("click", (e) => {
    let target = e.target,
      its_menu = target === menuItems || menuItems.contains(target),
      its_hamburger = target === menuBtn,
      menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggle();
    }
  });

  // Scroll header add class
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $(".hd").addClass("in");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".hd").removeClass("in");
    }
  });
}

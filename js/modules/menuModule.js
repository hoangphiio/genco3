export default function menuModule() {
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");
  const menuBtn = document.querySelector(".header-bar");
  const menuItems = document.querySelector(".header-mobile");
  const expandBtn = document.querySelectorAll(".expand");
  const searchForm = document.querySelector(".searchForm");

  function toggleMenu() {
    body.classList.toggle("onscroll");
    overlay.classList.toggle("active");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
    overlay.onclick = closeMenu;
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
      overlay.classList.toggle("open");
      body.classList.toggle("onscroll");
    }
  }

  function closeMenu() {
    expandBtn.forEach((btnSub) => {
      btnSub.classList.remove("open");
    });
  }

  function handleKeyDown(event) {
    const key = event.key;
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
      toggleMenu();
    }
  }

  function handleClick(event) {
    const target = event.target;
    const its_menu = target === menuItems || menuItems.contains(target);
    const its_hamburger = target === menuBtn;
    const menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }
  }

  function handleScroll() {
    if (window.pageYOffset > 40) {
      $(".header").addClass("in");
    } else {
      $(".header").removeClass("in");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      $(this).next(".menu-box").stop().slideToggle();
    });
  });

  window.addEventListener("keydown", handleKeyDown);

  document.addEventListener("click", handleClick);

  window.addEventListener("scroll", handleScroll);
}

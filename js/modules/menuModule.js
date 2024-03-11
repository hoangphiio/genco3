export default function menuModule() {
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay-menu");
  const menuBtn = document.querySelector(".header-bar");
  const menuItems = document.querySelector(".header-mobile");
  const expandBtn = document.querySelectorAll(".expand");
  const searchForm = document.querySelector(".searchForm");

  function toggleMenu() {
    body.classList.toggle("onscroll");
    overlay.classList.toggle("active");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
      overlay.classList.toggle("open");
      body.classList.toggle("onscroll");
    }
  }

  function closeMenu() {
    expandBtn.forEach((btnSub) => btnSub.classList.remove("open"));
  }

  function handleKeyDown(event) {
    const key = event.key;
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
      toggleMenu();
    }
  }

  function handleClick(event) {
    const { target } = event;
    const its_menu = target === menuItems || menuItems.contains(target);
    const its_hamburger = target === menuBtn;
    const menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }
  }

  function handleScroll() {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 40) {
      header.classList.add("in");
    } else {
      header.classList.remove("in");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  expandBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("open");
      this.nextElementSibling.classList.toggle("open");
    });
  });

  window.addEventListener("keydown", handleKeyDown);
  document.addEventListener("click", handleClick);
  window.addEventListener("scroll", handleScroll);
}

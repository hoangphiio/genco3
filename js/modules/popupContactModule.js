export default function popupContactModule() {
  $(".btnOpenForm1").on("click", function (event) {
    event.preventDefault();
    $(".form-popup1").addClass("visible");
    $("body").addClass("onscroll");
  });

  $(".form-popup1").on("click", function (event) {
    if (
      $(event.target).is(".form-popup1") ||
      $(event.target).is(".btnCloseForm1") ||
      $(event.target).is(".searchClose1 .ic-close")
    ) {
      event.preventDefault();
      $(this).removeClass("visible");
      $("body").removeClass("onscroll");
    }
  });

  $(".btnOpenForm2").on("click", function (event) {
    event.preventDefault();
    $(".form-popup2").addClass("visible");
    $("body").addClass("onscroll");
  });

  $(".form-popup2").on("click", function (event) {
    if (
      $(event.target).is(".form-popup2") ||
      $(event.target).is(".btnCloseForm2") ||
      $(event.target).is(".searchClose2 .ic-close")
    ) {
      event.preventDefault();
      $(this).removeClass("visible");
      $("body").removeClass("onscroll");
    }
  });

  const $formPopup3 = $(".form-popup3");

  $formPopup3.addClass("active");

  if ($formPopup3.hasClass("active")) {
    $("body").addClass("onscroll");
  }

  $(".search-form-close").click(function () {
    $formPopup3.removeClass("active");
    $("body").removeClass("onscroll");
  });

  setTimeout(function () {
    $formPopup3.removeClass("active");
    $("body").removeClass("onscroll");
  }, 10000);

  $(".btnOpenForm3").on("click", function (event) {
    event.preventDefault();
    $(".form-popup3").addClass("active");
    $("body").addClass("onscroll");
  });
}

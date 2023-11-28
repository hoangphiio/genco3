export default function popupContactModule() {
  $(".btnOpenForm1").on("click", function (event) {
    event.preventDefault();
    $(".form-popup1").addClass("visible");
  });

  $(".form-popup1").on("click", function (event) {
    if (
      $(event.target).is(".form-popup1") ||
      $(event.target).is(".btnCloseForm1") ||
      $(event.target).is(".searchClose1")
    ) {
      event.preventDefault();
      $(this).removeClass("visible");
    }
  });

  $(".btnOpenForm2").on("click", function (event) {
    event.preventDefault();
    $(".form-popup2").addClass("visible");
  });

  $(".form-popup2").on("click", function (event) {
    if (
      $(event.target).is(".form-popup2") ||
      $(event.target).is(".btnCloseForm2") ||
      $(event.target).is(".searchClose2")
    ) {
      event.preventDefault();
      $(this).removeClass("visible");
    }
  });
}

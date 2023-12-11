export default function popupContactModule() {
  // Tham chiếu đến các phần tử DOM chỉ một lần
  var $formPopup1 = $(".form-popup1");
  var $formPopup2 = $(".form-popup2");
  var $body = $("body");

  // Sử dụng event delegation để xử lý sự kiện click
  $(document).on("click", function (e) {
    var $target = $(e.target);

    // Xử lý sự kiện cho form-popup1
    if ($target.is(".btnOpenForm1")) {
      e.preventDefault();
      $formPopup1.addClass("visible");
      $body.addClass("onscroll");
    } else if (
      $target.is(".form-popup1") ||
      $target.is(".btnCloseForm1") ||
      $target.is(".searchClose1 .ic-close")
    ) {
      e.preventDefault();
      $formPopup1.removeClass("visible");
      $body.removeClass("onscroll");
    }

    // Xử lý sự kiện cho form-popup2
    if ($target.is(".btnOpenForm2")) {
      e.preventDefault();
      $formPopup2.addClass("visible");
      $body.addClass("onscroll");
    } else if (
      $target.is(".form-popup2") ||
      $target.is(".btnCloseForm2") ||
      $target.is(".searchClose2 .ic-close")
    ) {
      e.preventDefault();
      $formPopup2.removeClass("visible");
      $body.removeClass("onscroll");
    }
  });
}

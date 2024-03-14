export default function popupModule() {
  function toggleForm($form) {
    $form.toggleClass("visible");
    $("body").toggleClass("onscroll");
  }

  $(".btnOpenForm").on("click", function (event) {
    event.preventDefault();
    toggleForm($(".openContactForm"));
  });

  $(".openContactForm").on("click", function (event) {
    const $this = $(this);
    if ($this.is(event.target) || $this.find(".searchClose").is(event.target)) {
      event.preventDefault();
      toggleForm($this);
    }
  });
}

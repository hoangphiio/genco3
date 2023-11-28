export default function aosModule() {
  AOS.init({
    duration: 1000,
    once: "true",
    disable: function () {
      return $(window).width() <= 1200;
    },
  });
}

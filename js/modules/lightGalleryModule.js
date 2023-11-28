export default function lightGalleryModule() {
  var elements = document.getElementsByClassName("gallery-link");
  for (let item of elements) {
    $(item).lightGallery({
      share: false,
      selector: ".gallItem",
      autoplayControls: false,
      flipHorizontal: true,
      flipVertical: true,
      rotate: false,
      share: false,
      fullScreen: false,
      actualSize: false,
      download: false,
      zoom: true,
      thumbnail: false,
    });
  }
}

export default function replaceTextModule() {
  (function () {
    var html = document.documentElement.innerHTML;
    var textToReplace = [
      "evngenco3",
      "evn genco3",
      "evn genco 3",
      "evngenco 3",
    ];
    var replacementHTML =
      '<span class="trademark"><span class="evn">EVN</span><span class="genco3">Genco3</span></span>';

    textToReplace.forEach(function (text) {
      var regex = new RegExp(text, "gi");
      html = html.replace(regex, function (match) {
        if (match.includes('<a href="">')) {
          return match;
        } else {
          return replacementHTML;
        }
      });
    });

    document.documentElement.innerHTML = html;
  })();
}

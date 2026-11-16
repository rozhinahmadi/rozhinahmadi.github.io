/* Single source for the site navigation.
   Loaded as a parser-blocking classic script (no async, no defer)
   so document.write inserts the bar before the page paints.
   Edit links here only — do not copy this markup into HTML files. */
(function () {
  if (document.readyState !== "loading") {
    console.error("nav.js must run during parsing. Remove async or defer.");
    return;
  }

  var src = document.currentScript.src;
  var root = src.replace(/js\/nav\.js(?:\?.*)?$/, "");
  var path = location.pathname;
  var onHome = /\/(?:index\.html)?$/.test(path);

  function href(hash) {
    return onHome ? hash : root + hash;
  }

  var items = [
    ["#work", "Work"],
    ["#tools", "Tools"],
    ["#experience", "Experience"],
    ["#education", "Education"],
    ["#presentations", "Presentations"],
    ["#about", "About"],
    ["#contact", "Contact"]
  ];

  var links = items.map(function (item) {
    return '<li><a href="' + href(item[0]) + '">' + item[1] + "</a></li>";
  }).join("");

  document.write(
    '<a class="skip" href="#main">Skip to content</a>' +
    '<header class="site-header">' +
      '<nav class="nav" aria-label="Primary">' +
        '<a class="nav-mark" href="' + root + '">' +
          '<span class="nav-mark-block" aria-hidden="true"></span>' +
          "<span>Rozhin Ahmadi</span>" +
        "</a>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">Menu</button>' +
        '<ul class="nav-links" id="nav-menu">' + links + "</ul>" +
      "</nav>" +
    "</header>"
  );
})();

/* Single source for the site footer. Parser-blocking on purpose. See nav.js. */
(function () {
  if (document.readyState !== "loading") {
    console.error("footer.js must run during parsing. Remove async or defer.");
    return;
  }

  document.write(
    '<footer class="site-footer">' +
      '<div class="wrap footer-inner">' +
        "<p>© 2026 Rozhin Ahmadi</p>" +
        "<p>Metro Vancouver, BC</p>" +
      "</div>" +
    "</footer>"
  );
})();

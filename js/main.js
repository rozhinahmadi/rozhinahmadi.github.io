/* Menu, escape-to-close, and scroll spy for the shared nav. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function setOpen(open) {
    if (!toggle || !menu) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setOpen(!menu.classList.contains("is-open"));
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.classList.contains("is-open")) return;
      if (event.target.closest(".nav")) return;
      setOpen(false);
    });
  }

  var sections = document.querySelectorAll("main section[id]");
  var links = document.querySelectorAll(".nav-links a");
  if (!sections.length || !links.length) return;

  function spy() {
    var current = null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top < 140) current = section;
    });
    links.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var match = current && (href === "#" + current.id || href.endsWith("#" + current.id));
      if (match) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  spy();
  window.addEventListener("scroll", spy, { passive: true });
})();

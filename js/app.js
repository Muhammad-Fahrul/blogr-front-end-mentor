const app = {
  $: {
    menuBtn: document.querySelector(".btn-menu"),
    menuCont: document.querySelector(".menu"),
    featureBtn: document.querySelectorAll(".features .feature"),
  },

  openMenufeature(elTarget) {
    const featureList = elTarget.querySelector(".feature-list");
    const height = elTarget.querySelectorAll("li").length;
    featureList.style.height = `${height * 32}px`;
    elTarget.querySelector("img").classList.toggle("rotate-up");
  },

  closeMenuFeature(elTarget) {
    const featureList = elTarget.querySelector(".feature-list");
    featureList.style.height = "0px";
    elTarget.querySelector("img").classList.toggle("rotate-up");
  },

  toggleMenu(e) {
    const isExpanded = JSON.parse(app.$.menuCont.getAttribute("aria-expanded"));
    app.$.menuCont.setAttribute("aria-expanded", !isExpanded);
    e.setAttribute("aria-expanded", !isExpanded);
  },

  init() {
    app.$.featureBtn.forEach((featureBtn) => {
      featureBtn.closest("li").addEventListener("mouseenter", (e) => {
        app.openMenufeature(e.target.closest("li"));
      });
      featureBtn.closest("li").addEventListener("mouseleave", (e) => {
        app.closeMenuFeature(e.target.closest("li"));
      });
    });

    app.$.menuBtn.addEventListener("click", (e) => {
      app.toggleMenu(e.target);
    });
  },
};

window.addEventListener("load", app.init);

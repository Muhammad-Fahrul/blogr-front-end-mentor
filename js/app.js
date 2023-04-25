const app = {
  $: {
    menuBtn: document.querySelector(".btn-menu"),
    menuCont: document.querySelector(".menu"),
    featureBtn: document.querySelectorAll(".features .feature"),
  },

  openMenuFeature(elTarget) {
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
    if (app.$.menuBtn.closest("header").clientWidth > 776) {
      console.log("oke");
    }
    app.$.menuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      app.toggleMenu(e.target);
    });

    app.$.featureBtn.forEach((feauBtn) => {
      feauBtn.closest("li").addEventListener("mouseenter", (e) => {
        e.preventDefault();
        app.openMenuFeature(e.target.closest("li"));
      });
      feauBtn.closest("li").addEventListener("mouseleave", (e) => {
        e.preventDefault();
        app.closeMenuFeature(e.target.closest("li"));
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init());

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  var loadingDiv = document.querySelector(".loading");
  var errorMessageDiv = document.querySelector(".error-message");
  var sentMessageDiv = document.querySelector(".sent-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    loadingDiv.style.display = "block";

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://script.google.com/macros/s/AKfycbyPaiI8-BOLWmOoaJuOpOP3L8RBsAuh2oxWyU78qu_iua26DkXksTnkgLosSFMC2zEjOA/exec"
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        if (response === "1") {
          loadingDiv.style.display = "none";
          sentMessageDiv.style.display = "block"; // Hiển thị thông báo "Sent message"
        } else {
          loadingDiv.style.display = "none";
          errorMessageDiv.style.display = "block";
        }
      } else {
        loadingDiv.style.display = "none";
        errorMessageDiv.style.display = "block";
      }
    };
    xhr.send(formData);
  });
});

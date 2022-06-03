"use strict";

//Codigo con media querys para el mene desplegable
const menuButton = document.querySelector(".c-nav__menu");
const menuDiv = document.querySelector(".c-menu");

const mediumBp = matchMedia("(max-width: 450px)");
const menuHidden = (mql) => {
  let flag = 0;
  menuButton.style.display = "flex";
  menuDiv.style.display = "none";
  if (mql.matches) {
    menuButton.addEventListener("click", function () {
      if (flag == 0) {
        menuDiv.style.display = "flex";
        flag = 1;
      } else {
        menuDiv.style.display = "none";
        flag = 0;
      }
    });
  } else {
    menuButton.style.display = "none";
    menuDiv.style.display = "flex";
  }
};

mediumBp.addListener(menuHidden);
menuHidden(mediumBp);

//Codigo para el carrusel
const carousel = document.querySelector(".c-carosel");
const point = document.querySelectorAll(".point");

point.forEach((cadaPunto, i) => {
  point[i].addEventListener("click", () => {
    let position = i;
    let operation = position * -33.3;

    carousel.style.transform = `translateX(${operation}%)`;
    point.forEach((cadaPunto, i) => {
      point[i].classList.remove("activo");
    });
    point[i].classList.add("activo");
  });
});

//widget GoogleMaps
function iniciarMap() {
  var coord = { lat: 4.6201846, lng: -74.1209328 };
  var map = new google.maps.Map(document.querySelector(".mapGoogle"), {
    zoom: 19,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}

// $(document).ready(main);

// var contador = 0;

// function main() {
//   $(".c-nav__menu").click(function () {
//     if (contador == 1) {
//       $(".c-menu").animete({
//         display: "none",
//       });
//       contador = 0;
//     } else {
//       ".c-menu".animete({
//         display: "block",
//       });
//     }
//   });
// }
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

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

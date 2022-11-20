const menuButton = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//portait function
const portraitButton = document.getElementById("portrait");
const mainImage = document.getElementsByClassName("main-img");

portraitButton.addEventListener("click", () => {
   
  for (let i = 0; i < 12; i++) {
    mainImage[i].setAttribute("src", "Portrait/portrait"+ i + ".jpg");
  };
});

//minimalism function

const minimalButton = document.getElementById("minimal");

minimalButton.addEventListener("click", () => {

  for (let i = 0; i < 12 ; i++) {
    mainImage[i].setAttribute("src" , "Minimalism/mini" + i + ".jpg");
  };
});

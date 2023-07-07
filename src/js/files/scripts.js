import { isMobile } from "./functions";
import { removeClasses } from "./functions";


window.addEventListener("load", function (e) {
  callcRosaryHeight()

});

window.addEventListener("resize", function () {
  callcRosaryHeight()

});

window.addEventListener("click", function(e) {
  function documentActions(e) {
    const targetElement = e.target;
  }
});


// fucntions
function callcRosaryHeight() {
  const header = document.querySelector(".header");
  const pageMysteries = document.querySelector(".page__mysteries");
  const rosaryBlock = document.querySelector(".prayer__rosary");
  const prayerContent = document.querySelector(".prayer__content");
  
  const takeAway = header.offsetHeight + pageMysteries.offsetHeight;
  rosaryBlock.style.height = `calc(100vh - ${takeAway}px)`;
  prayerContent.style.height = `calc(100vh - ${takeAway}px)`;
}


const beads = document.querySelectorAll('.rosary__bead');


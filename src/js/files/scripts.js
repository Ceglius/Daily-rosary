import { removeClasses } from "./functions";

removeClasses

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

function countArrayElements(arr) {
  return arr.length;
}

function addClass(obj) {
  return obj.classList.add("active");
}

function checkDayOfTheWeek() {
  const date = new Date();
  const day = date.toLocaleString("default", { weekday: "long" });
  return day;
}

function msyteryByDay(data, currentDay) {
  const mysteriesTitle = document.querySelector(".mysteries__title > p");
  const { mysteries } = data;
  switch (currentDay) {
    case "Monday":
    case "Saturday":
      mysteriesTitle.innerHTML = `${mysteries[0].mystery}`;

      break;
    case "Tuesday":
    case "Friday":
      mysteriesTitle.innerHTML = `${mysteries[2].mystery}`;

      break;
    case "Wednsday":
    case "Sunday":
      mysteriesTitle.innerHTML = `${mysteries[3].mystery}`;

      break;
    case "Thursday":
      mysteriesTitle.innerHTML = `${mysteries[1].mystery}`;
      break;
  }
}

function gloryBePrayer(data, arr, counts) {
  const prayerContainer = document.querySelector(".prayer__content");
  const prayerCount = document.querySelector(".prayer__count");
  const { prayers } = data;

  arr.forEach((el, i) => {
    const positions = [3, 13, 23, 33, 43];

    el.addEventListener("click", function(e) {
      const prayerItem = document.querySelectorAll(".prayer__item");
      const countItem = document.querySelectorAll(".count__item");

      if (positions.includes(i + 1)) {
        if (el.classList.contains("done") || prayerItem.length === 2) return;

        prayerContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="prayer__item">
              <h3 class="prayer__title">${prayers[3].prayer}</h3>
              <blockquote class="prayer__text">
                  <p>
                  ${prayers[3].text}
                  </p>
              </blockquote>
            </div>`
        );

        counts.gloryBe++;
        prayerCount.insertAdjacentHTML(
          "afterbegin",
          `<div class="count__item">
              <span class="prayer__left--extra">${counts.gloryBe}</span>
              <span>/</span>
              <div class="prayer__total--extra">5</div>
            </div>`
        );
      } else if (prayerItem.length > 1) {
        prayerItem[1].remove();
        countItem[0].remove();
      }
    });
  });
}

function prayerByClick(data, clicked, counts) {
  if (clicked.classList.contains("done")) return;

  const prayerTitle = document.querySelector(".prayer__title");
  const prayerText = document.querySelector(".prayer__text p");
  const prayerCount = document.querySelector(".prayer__count");
  const prayerLeft = document.querySelector(".prayer__left");
  const prayerTotal = document.querySelector(".prayer__total");
  const rosaryCross = document.querySelectorAll(".rosary__cross");
  const rosaryBead = document.querySelectorAll(".rosary__bead");
  const rosaryBeadLarger = document.querySelectorAll(".rosary__bead--larger");
  const prayerItem = document.querySelectorAll(".prayer__item");
  const countItem = document.querySelectorAll(".count__item");

  const { prayers } = data;

  if (clicked.classList.contains("rosary__cross")) {
    counts.prayerLeftCross++;
    prayerLeft.innerHTML = counts.prayerLeftCross;
    prayerTotal.innerHTML = countArrayElements(rosaryCross);

    addClass(prayerCount);
    handlePrayerClick(prayers[0]);
  } else if (clicked.classList.contains("rosary__bead--larger")) {
    counts.prayerLeftBeadLarger++;
    prayerLeft.innerHTML = counts.prayerLeftBeadLarger;
    prayerTotal.innerHTML = countArrayElements(rosaryBeadLarger);
    if (prayerItem.length > 1) {
      prayerItem[1].remove();
      countItem[0].remove();
    }

    addClass(prayerCount);
    handlePrayerClick(prayers[1]);
  } else if (clicked.classList.contains("rosary__bead")) {
    counts.prayerLeftBead++;
    prayerLeft.innerHTML = counts.prayerLeftBead;
    prayerTotal.innerHTML = countArrayElements(rosaryBead);
    addClass(prayerCount);
    handlePrayerClick(prayers[2]);
  }

  function handlePrayerClick(prayer) {
    if (!clicked.classList.contains("done")) {
      clicked.classList.add("done");
      prayerTitle.innerHTML = prayer.prayer;
      prayerText.innerHTML = prayer.text;
    }
  }
}

function mysteryEvents(data) {
  const dayTitle = document.querySelector(".mysteries__title > p").innerHTML;
  const mysteryEvent = document.querySelector(".mysteries__mystery");
  const largeBeads = document.querySelectorAll(".rosary__bead--larger");
  const { mysteries } = data;
  const filterMystery = mysteries.filter((x) => x.mystery === dayTitle);
  const { text } = filterMystery[0];

  largeBeads.forEach((el, i) => {
    el.addEventListener("click", () => {
      if (i === 0) return;
      else mysteryEvent.innerHTML = `${i}.${text[i - 1]}`;
    });
  });
}
function rosaryLeft(arr, clicked, totalRosaries) {
  if (clicked.classList.contains("done")) return;
  if (clicked.classList.contains("rosary__bead") || clicked.classList.contains("rosary__bead--larger") || clicked.classList.contains("rosary__cross")
  ) {

    const mysteriesTitle = document.querySelector(".mysteries__title > span");
    const elements = arr.length;
    const allDoneClasses = document.querySelectorAll(".done");
    const procent = ((allDoneClasses.length + 1) / elements) * 100;
    mysteriesTitle.style.width = `${procent}%`;

    if (procent === 100) {
      const headeaAmount = document.querySelector(".header__amount");
  


      setTimeout(() => {
        headeaAmount.classList.add("added")
        setTimeout(() => {
        headeaAmount.innerHTML = ++totalRosaries;
          headeaAmount.classList.remove("added")
        }, 200);
      }, 500);

    }
  }
}


window.addEventListener("load", function() {
  // data
  const data = "../assets/data/data.json";

  const totalRosaries = 0;

  // weekday
  const day = checkDayOfTheWeek();

  fetch(data)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const prayerCounts = {
        prayerLeftCross: 0,
        prayerLeftBead: 0,
        prayerLeftBeadLarger: 0,
        gloryBe: 0,
      };

      document.addEventListener("click", docEvent);

      function docEvent(e) {
        const elementTarget = e.target;

        rosaryLeft(
          document.querySelectorAll(".rosary__body > div"),
          elementTarget,
          totalRosaries
        );
        prayerByClick(data, elementTarget, prayerCounts);
      }
      gloryBePrayer(
        data,
        this.document.querySelectorAll(".rosary__bead"),
        prayerCounts
      );
      msyteryByDay(data, day);
      mysteryEvents(data);
      callcRosaryHeight();
    })
    .catch((error) => {
      throw new Error(`Error occurred during the request: ${error.message}`);
    });
});

window.addEventListener("resize", function() {
  callcRosaryHeight();
});

let menu = document.querySelector(".nav__bottom .left__side");
let menuPop = document.querySelector(".menu__popup");

menu.addEventListener("click", () => {
  menuPop.classList.toggle("active");
});

// slider
const nextBtn = document.querySelector(".slide-right-btn");
const prevBtn = document.querySelector(".slide-left-btn");

let currentColor = 0;

let colorsContainer = document.querySelector(".colors-container");
let colorNumbers = document.querySelector(".color-num-one");
let colorNumbersSec = document.querySelector(".color-num-sec");
let colorNumbersThird = document.querySelector(".color-num-third");
let colorNumbersFourth = document.querySelector(".color-num-fourth");
let arrowBtnSe = document.querySelector(".color-arrow-se");
let arrowBtnThird = document.querySelector(".color-arrow-third");
let colorsArr = [];

function showColors(data) {
  // console.log(data);
  data.forEach((color) => {
    let li = `
      <li><a href="#darkOcean">${color.name}</a></li>
      `;

    colorsContainer.insertAdjacentHTML("beforeend", li);
  });

  const allColorsName = document.querySelectorAll(".main .title li");
  allColorsName[currentColor].classList.add("active");

  nextBtn.addEventListener("click", () => {
    currentColor++;

    allColorsName.forEach((color) => color.classList.remove("active"));
    if (currentColor > allColorsName.length - 1) {
      currentColor = 0;
    }

    let colorHex = data[currentColor].colors[0];
    let colorHexSec = data[currentColor].colors[1];
    let colorHexThird = data[currentColor].colors[2];
    let colorHexFourth = data[currentColor].colors[3];

    if (colorHexThird == undefined) {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.style.display = "none";
      colorNumbersFourth.style.display = "none";
      arrowBtnSe.style.display = "none";
      arrowBtnThird.style.display = "none";
    } else if (colorHexFourth == undefined) {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.innerHTML = colorHexThird;
      colorNumbersThird.style.display = "block";
      colorNumbersFourth.style.display = "none";
      arrowBtnSe.style.display = "block";
      arrowBtnThird.style.display = "none";
    } else {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.innerHTML = colorHexThird;
      colorNumbersFourth.innerHTML = colorHexFourth;
      colorNumbersThird.style.display = "block";
      colorNumbersFourth.style.display = "block";
      arrowBtnSe.style.display = "block";
      arrowBtnThird.style.display = "block";
    }

    let clr1 = data[currentColor].colors[0];
    let clr2 = data[currentColor].colors[1];
    let clr3 = data[currentColor].colors[2];
    let clr4 = data[currentColor].colors[3];

    if (clr3 == undefined) {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2})`;
    } else if (clr4 == undefined) {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2}), ${clr3}`;
    } else {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2}, ${clr3}, ${clr4})`;
    }
    allColorsName[currentColor].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    currentColor--;

    let colorHex = data[currentColor].colors[0];
    let colorHexSec = data[currentColor].colors[1];
    let colorHexThird = data[currentColor].colors[2];
    let colorHexFourth = data[currentColor].colors[3];

    if (colorHexThird == undefined) {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.style.display = "none";
      colorNumbersFourth.style.display = "none";
    } else if (colorHexFourth == undefined) {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.innerHTML = colorHexThird;
      colorNumbersThird.style.display = "block";
      colorNumbersFourth.style.display = "none";
    } else {
      colorNumbers.innerHTML = colorHex;
      colorNumbersSec.innerHTML = colorHexSec;
      colorNumbersThird.innerHTML = colorHexThird;
      colorNumbersFourth.innerHTML = colorHexFourth;
      colorNumbersThird.style.display = "block";
      colorNumbersFourth.style.display = "block";
    }

    allColorsName.forEach((color) => color.classList.remove("active"));
    if (currentColor < 0) {
      currentColor = allColorsName.length - 1;
    }
    let clr1 = data[currentColor].colors[0];
    let clr2 = data[currentColor].colors[1];
    let clr3 = data[currentColor].colors[2];
    let clr4 = data[currentColor].colors[3];

    if (clr3 == undefined) {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2})`;
    } else if (clr4 == undefined) {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2}), ${clr3}`;
    } else {
      allColorsName[
        currentColor
      ].style.background = `linear-gradient(to right, ${clr1}, ${clr2}, ${clr3}, ${clr4})`;
    }
    allColorsName[currentColor].classList.add("active");
  });
}

// fetch
const fetchColors = () => {
  fetch("assets/gradients.json")
    .then((res) => res.json())
    .then((data) => {
      showColors(data);
      showPopGradientsClr(data);
    });
};

fetchColors();

let cards = document.querySelector(".menu__popup .cards");

function showPopGradientsClr(data) {
  console.log(data);
  data.forEach((colorSec) => {
    let card = `
      <div class="card" 
        style="background:linear-gradient(to right, ${colorSec.colors[0]}, ${colorSec.colors[1]})">
        <span class="gradient__name">${colorSec.name}</span>
      </div>
    `;
    cards.insertAdjacentHTML("beforeend", card);
  });
}

// copy Btn

let copyBtn = document.querySelector(".copy-btn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText();
});

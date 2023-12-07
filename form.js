const tabellaCassettiera = [];

const printNumberInp = function () {
  const tabelloneDiv = document.getElementById("tabellone-tombola");

  for (let i = 1; i < 77; i++) {
    const cellTombola = document.createElement("div");
    cellTombola.innerHTML = `<p>${[i]}</p>`;
    cellTombola.classList.add("cell");
    tabelloneDiv.appendChild(cellTombola);
  }
};
printNumberInp();

const pushTheButton = document.getElementById("lucky-button");
pushTheButton.addEventListener("click", function () {
  extractNumber();
});

const extractNumber = function () {
  const myNumber = Math.ceil(Math.random() * 76);
  const myResultSpan = document.querySelector("span");
  myResultSpan.innerText = myNumber;

  myLuckyNumber(myNumber);
};

const myLuckyNumber = function (x) {
  const allCells = document.getElementsByClassName("cell");
  for (let i = 0; i < allCells.length; i++) {
    if (x == allCells[i].innerText) {
    }
  }
};

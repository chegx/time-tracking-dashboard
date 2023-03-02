//assert isn't supported by firefox browser
import data from "./data.json" assert { type: "json" };

// create 6 cards and change CSS with For Loop
let allCards = "";
for (let i = 0; i < data.length; i++) {
  let title = data[i].title.toLowerCase().replace(/\s/, "-")
  allCards += `<article class="card card-${title}">
  <div class="card-content">
    <div class="title-box">
      <h2 class="title">${data[i].title}</h2>
      <button class="btn-switch">
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            fill="#BBC0FF"
            fill-rdive="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="timeframe">
      <p class="current"></p>
      <p class="previous"></p>
    </div>
  </div>
  </article>`;
}
document.getElementById("allCards").innerHTML = allCards;

for (let i = 0; i < data.length; i++) {
  let title = data[i].title.toLowerCase().replace(/\s/, "-");
  document.querySelectorAll(`.card`)[i].style.backgroundColor = `var(--${title})`;
  document.querySelectorAll(`.card`)[i].style.backgroundImage = `url("./images/icon-${title}.svg")`;
}

//view weekly stats by default and by clicking buttons
document.querySelectorAll("input").forEach(btn => {

  if (btn.checked) showStat();
  btn.onclick = () => showStat();

  function showStat() {
    let periodString = "";
    if (btn.value == "daily") periodString = "Yesterday - ";
    if (btn.value == "weekly") periodString = "Last Week - ";
    if (btn.value == "monthly") periodString = "Last Month - ";
    for (let i = 0; i < data.length; i++) {
      let currentString = "data[i].timeframes." + btn.value + ".current";
      let previousString = "data[i].timeframes." + btn.value + ".previous";
      document.querySelectorAll(".current")[i].textContent = eval(currentString) + "hrs";
      document.querySelectorAll(".previous")[i].textContent = periodString + eval(previousString) + "hrs";
    }
  }
});


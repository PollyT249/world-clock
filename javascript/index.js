function updateTime() {
  let tallinnElement = document.querySelector("#tallinn");
  if (tallinnElement) {
    let tallinnDateElement = tallinnElement.querySelector(".date");
    let tallinnTimeElement = tallinnElement.querySelector(".time");
    let tallinnTime = moment().tz("Europe/Tallinn");
    tallinnDateElement.innerHTML = tallinnTime.format("MMMM Do YYYY");
    tallinnTimeElement.innerHTML = tallinnTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    stockholmTime = moment().tz("Europe/Stockholm");
    stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

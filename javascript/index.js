function updateTime() {
  let tallinnElement = document.querySelector("#tallinn");
  let tallinnDateElement = tallinnElement.querySelector(".date");
  let tallinnTimeElement = tallinnElement.querySelector(".time");
  let tallinnTime = moment().tz("Europe/Tallinn");
  tallinnDateElement.innerHTML = tallinnTime.format("MMMM Do YYYY");
  tallinnTimeElement.innerHTML = tallinnTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  stockholmTime = moment().tz("Europe/Stockholm");
  stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
  stockholmTimeElement.innerHTML = stockholmTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

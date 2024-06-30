const clock = document.querySelector("#clock");
const ampm = document.querySelector("#ampm");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours === 0) {
    clock.innerText = `12:${minutes}:${seconds}`;
    ampm.innerText = "AM";
  } else if (hours === 12) {
    clock.innerText = `12:${minutes}:${seconds}`;
    ampm.innerText = "PM";
  } else if (hours > 12) {
    clock.innerText = `${hours - 12}:${minutes}:${seconds}`;
    ampm.innerText = "PM";
  } else {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    ampm.innerText = "AM";
  }
}

getClock();
setInterval(getClock, 1000);
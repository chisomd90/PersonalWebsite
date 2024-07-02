const day = document.getElementById("currentDay");
const time = document.getElementById("currentTimeUTC");

const currentDay = new Date();
day.innerHTML = currentDay.toLocaleDateString("en-US", { weekday: "long" });

const currentTime = new Date();
time.innerHTML = currentTime.toLocaleTimeString();

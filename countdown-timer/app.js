const endDate = "13 February 2024 12:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; //converting milliseconds to seconds
  if (diff < 0) return;
  // convert to days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // convert to hours
  inputs[1].value = Math.floor(diff / 3600) % 24;
  // convert to minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  // convert to seconds
  inputs[3].value = Math.floor(diff) % 60;
};

clock();

setInterval(() => {
  clock();
});

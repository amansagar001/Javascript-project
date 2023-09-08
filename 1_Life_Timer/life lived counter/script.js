const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay = document.getElementById("timer");
let intervalId;

function calculateTimeLived(dob) {
  const now = new Date();
  const birthDate = new Date(dob);
  const diff = now - birthDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

function updateTimer(dob) {
  const timeLived = calculateTimeLived(dob);

  timerDisplay.textContent = `${timeLived.years} years, ${timeLived.months} months, ${timeLived.days} days, ${timeLived.hours} hours, ${timeLived.minutes} minutes, ${timeLived.seconds} seconds`;
}

startButton.addEventListener("click", function () {
  const dobInput = document.getElementById("dob");
  const dobValue = dobInput.value;

  if (!dobValue) {
    alert("Please enter your date of birth.");
    return;
  }

  updateTimer(dobValue);

  intervalId = setInterval(function () {
    updateTimer(dobValue);
  }, 1000);

  startButton.disabled = true;
});

resetButton.addEventListener("click", function () {
  clearInterval(intervalId);
  timerDisplay.textContent = "";
  document.getElementById("dob").value = "";
  startButton.disabled = false;
});

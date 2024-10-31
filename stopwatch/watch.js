let startTime, updatedTime, difference, timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Start function
startButton.addEventListener('click', function() {
  if (!isRunning) {
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(updateDisplay, 1000);
    isRunning = true;
  }
});

// Pause function
pauseButton.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timerInterval);
    difference = Date.now() - startTime;
    isRunning = false;
  }
});

// Reset function
resetButton.addEventListener('click', function() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  difference = 0;
  isRunning = false;
});

// Update display function
function updateDisplay() {
  updatedTime = new Date(Date.now() - startTime);
  const minutes = String(updatedTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(updatedTime.getUTCSeconds()).padStart(2, '0');
  const hours = String(updatedTime.getUTCHours()).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

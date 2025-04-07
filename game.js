// Global variables for game logic
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalTitle = document.getElementById("modal-title");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const failsafeBtn = document.getElementById("failsafe-button");
const triviaSection = document.getElementById("trivia-section");
const numberGridSection = document.getElementById("number-grid-section");
const numberGridContainer = document.getElementById("number-grid");
let correctNumbers = [4, 12, 20]; // Die richtigen Zahlen: 4, 24, 40
let selectedNumbers = [];

// Open files like the quarterly report or client list
function openFile(type) {
  if (type === 'trivia') {
    showTriviaQuestions();
  } else if (type === 'numbergrid') {
    showNumberGrid();
  } else {
    modal.style.display = "block";
    modalContent.innerHTML = "";
    if (type === "backup") {
      modalTitle.textContent = "Legacy Backup";
      modalContent.innerHTML = "<p>Accessing legacy data...</p>";
    } else {
      modalTitle.textContent = type === "report" ? "Quarterly Report" : "Client Roster";
      modalContent.innerHTML = "<p>Nothing suspicious here... or is there?</p>";
    }
  }
}

function closeModal() {
  modal.style.display = "none";
}

// Show Trivia Questions
function showTriviaQuestions() {
  triviaSection.style.display = "block";
  numberGridSection.style.display = "none"; // Hide number grid when trivia is shown
}

// Show Number Grid
function showNumberGrid() {
  numberGridSection.style.display = "block";
  triviaSection.style.display = "none"; // Hide trivia section when number grid is shown
  numberGridContainer.innerHTML = "";  // Clear previous content

  for (let i = 1; i <= 25; i++) {
    const number = document.createElement("div");
    number.className = "number";
    number.textContent = i * 2;

    number.addEventListener("click", () => {
      if (selectedNumbers.includes(i * 2)) {
        number.classList.remove("correct");
        selectedNumbers = selectedNumbers.filter(num => num !== i * 2);
      } else {
        number.classList.add("correct");
        selectedNumbers.push(i * 2);
      }
    });

    numberGridContainer.appendChild(number);
  }
}

// Check if the selected numbers are correct
function checkNumberGrid() {
  const correctAnswersCount = correctNumbers.filter(num => selectedNumbers.includes(num)).length;

  if (correctAnswersCount === correctNumbers.length) {
    alert("Correct! You've selected the right numbers!");
    startCountdown();
  } else {
    alert("Incorrect selection. Please try again.");
  }
}

// Start the countdown timer
function startCountdown() {
  countdownEl.style.display = "block";
  failsafeBtn.style.display = "block";
  let time = 600;
  setInterval(() => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    timerEl.textContent = `${minutes}:${seconds}`;
    time--;
  }, 1000);
}

function submitTrivia() {
  alert("Trivia answers submitted! Proceeding to next challenge...");
  // Here you can add logic for trivia question validation.
}

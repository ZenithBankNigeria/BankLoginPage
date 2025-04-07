// Global variables for game logic
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalTitle = document.getElementById("modal-title");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const failsafeBtn = document.getElementById("failsafe-button");
const triviaSection = document.getElementById("trivia-section");
const triviaInput = document.getElementById("trivia-answer-input");
let correctAnswers = ["3", "17", "29"];  // For simplicity, let's assume these are the correct answers (numbered)
let currentAnswers = [];

// Open files like the quarterly report or client list
function openFile(type) {
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

function closeModal() {
  modal.style.display = "none";
}

// Show the Trivia Section
function showTriviaSection() {
  triviaSection.style.display = "block";
}

// Function to check if the trivia answers are correct
function checkAnswers() {
  const answers = triviaInput.value.split(",").map(answer => answer.trim());

  if (answers.length !== correctAnswers.length) {
    document.getElementById("trivia-error-msg").style.display = "block";
    return;
  }

  let isCorrect = true;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (answers[i] !== correctAnswers[i]) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    alert("Trivia Correct! Proceeding to next stage.");
    triviaSection.style.display = "none";
    startCountdown();
  } else {
    document.getElementById("trivia-error-msg").style.display = "block";
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

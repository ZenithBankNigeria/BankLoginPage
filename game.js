// Global variables for game logic
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalTitle = document.getElementById("modal-title");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const failsafeBtn = document.getElementById("failsafe-button");
const triviaSection = document.getElementById("trivia-section");
const triviaForm = document.getElementById("trivia-form");
const triviaErrorMsg = document.getElementById("trivia-error-msg");

let countdownInterval;

// Open file in modal
function openFile(type) {
  modal.style.display = "block";
  modalContent.innerHTML = "";

  if (type === "backup") {
    modalTitle.textContent = "Legacy Backup.zip";
    const grid = document.createElement("div");
    grid.className = "number-grid";
    const correctNumbers = [17, 23, 41];
    for (let i = 1; i <= 25; i++) {
      const number = document.createElement("div");
      number.className = "number";
      number.textContent = i * 2;
      if (correctNumbers.includes(i * 2)) {
        number.addEventListener("click", () => {
          number.classList.add("correct");
          if (document.querySelectorAll(".correct").length === correctNumbers.length) {
            triggerCountdown();
          }
        });
      } else {
        number.addEventListener("click", () => {
          number.style.opacity = "0.3";
        });
      }
      grid.appendChild(number);
    }
    modalContent.appendChild(grid);
  } else {
    modalTitle.textContent = type === "report" ? "Quarterly Report" : "Client Roster";
    modalContent.innerHTML = "<p>Nothing suspicious here... or is there?</p>";
  }
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Trigger countdown for failed attempts
function triggerCountdown() {
  closeModal();
  countdownEl.style.display = "block";
  failsafeBtn.style.display = "block";
  let time = 600;
  countdownInterval = setInterval(() => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    timerEl.textContent = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      clearInterval(countdownInterval);
      alert("System locked. Game over.");
    }
  }, 1000);
}

// Show trivia section
function showTriviaSection() {
  document.querySelector('.vault-container').style.display = 'none';
  triviaSection.style.display = 'block';
}

// Handle trivia form submission
triviaForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const question1Answer = parseInt(document.getElementById("question1").value);
  const question2Answer = parseInt(document.getElementById("question2").value);
  const question3Answer = parseInt(document.getElementById("question3").value);

  const correctAnswers = {
    question1: 3,
    question2: 11,
    question3: 29
  };

  if (question1Answer === correctAnswers.question1 &&
      question2Answer === correctAnswers.question2 &&
      question3Answer === correctAnswers.question3) {
    alert('Correct! You have unlocked more information.');
    // Continue to the next part of the game
  } else {
    triviaErrorMsg.style.display = 'block';
  }
});

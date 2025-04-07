document.addEventListener('DOMContentLoaded', function() {
    // The correct answers for the questions
    const correctAnswers = {
      question1: 3,
      question2: 11,
      question3: 29
    };
  
    const form = document.getElementById('questionForm');
    const questionErrorMsg = document.getElementById('questionErrorMsg');
  
    // Populate the grid with 3 input fields for answers (3, 11, 29)
    const grid = document.getElementById('grid');
    const answerSequence = [3, 11, 29];
  
    answerSequence.forEach((answer, index) => {
      const gridItem = document.createElement('div');
      gridItem.textContent = answer;
      gridItem.classList.add('grid-item');
      gridItem.setAttribute('data-answer', answer);
      grid.appendChild(gridItem);
    });
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the answers from the form
      const question1Answer = parseInt(document.getElementById('question1').value);
      const question2Answer = parseInt(document.getElementById('question2').value);
      const question3Answer = parseInt(document.getElementById('question3').value);
  
      // Validate the answers
      if (question1Answer === correctAnswers.question1 &&
          question2Answer === correctAnswers.question2 &&
          question3Answer === correctAnswers.question3) {
        // Answers are correct, reveal the grid
        questionErrorMsg.style.display = 'none';
        document.getElementById('submitGrid').style.display = 'block';
      } else {
        // Show error message if answers are incorrect
        questionErrorMsg.style.display = 'block';
      }
    });
  
    // Handle the grid submission
    document.getElementById('submitGrid').addEventListener('click', function() {
      const gridItems = document.querySelectorAll('.grid-item');
      let correctSequence = true;
      let currentIndex = 0;
  
      gridItems.forEach((gridItem) => {
        if (parseInt(gridItem.textContent) !== answerSequence[currentIndex]) {
          correctSequence = false;
        }
        currentIndex++;
      });
  
      if (correctSequence) {
        alert('Correct! You have unlocked the vault.');
        // Redirect or continue with the game
      } else {
        alert('Incorrect sequence. Try again.');
      }
    });
  });
  
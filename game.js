document.addEventListener('DOMContentLoaded', function() {
    const option4 = document.getElementById('option4');
    const questionsContainer = document.getElementById('questionsContainer');
    
    // The correct answers for the questions
    const correctAnswers = {
      question1: 3,
      question2: 11,
      question3: 29
    };
  
    const form = document.getElementById('questionForm');
    const questionErrorMsg = document.getElementById('questionErrorMsg');
  
    // Handle the click on the Biography Questions option
    option4.addEventListener('click', function() {
      // Hide all other sections
      document.querySelector('.options').style.display = 'none';
      
      // Show the trivia form
      questionsContainer.style.display = 'block';
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
        // Answers are correct, show success message or continue
        alert('Correct! You have unlocked more information.');
        // You could trigger next game phase or unlock another level
      } else {
        // Show error message if answers are incorrect
        questionErrorMsg.style.display = 'block';
      }
    });
  });
  
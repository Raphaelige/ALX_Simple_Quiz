// Function to check the answer
function checkAnswer() {
    const correctAnswer = "4"; // correct answer

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer first!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Check if answer is correct
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
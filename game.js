function find() {
    let randomNumber = Math.floor(Math.random() * 3) + 1; // 1 to 3 (rock, paper, scissor)
    return randomNumber;
}

// Get all the images for the click event
let images = document.querySelectorAll('img');

// Add event listeners to all images
images.forEach(function(img) {
    img.addEventListener('click', function(event) {
        // Get the parent's id (1, 2, or 3 corresponding to Rock, Paper, or Scissors)
        let parentId = event.target.parentElement.id;

        // Get the computer's choice (1, 2, or 3)
        let compValue = find(); 

        // Create the result message
        let resultMessage = document.createElement('p');
        
        // Determine the outcome of the game
        if (parentId === '1' && compValue === 2) {
            resultMessage.textContent = 'Computer won the game (Paper beats Rock)';
        } else if (parentId === '2' && compValue === 3) {
            resultMessage.textContent = 'Computer won the game (Scissors beats Paper)';
        } else if (parentId === '3' && compValue === 1) {
            resultMessage.textContent = 'Computer won the game (Rock beats Scissors)';
        } else if (parentId === '1' && compValue === 1) {
            resultMessage.textContent = 'It\'s a tie (Rock vs Rock)';
        } else if (parentId === '2' && compValue === 2) {
            resultMessage.textContent = 'It\'s a tie (Paper vs Paper)';
        } else if (parentId === '3' && compValue === 3) {
            resultMessage.textContent = 'It\'s a tie (Scissors vs Scissors)';
        } else {
            resultMessage.textContent = 'You won the game!';
        }

        // Append the result message
        let resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = '';  // Clear any previous result
        resultDiv.appendChild(resultMessage);
    });
});

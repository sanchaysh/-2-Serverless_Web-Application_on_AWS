// Get elements
const submitButton = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const greetingParagraph = document.getElementById('greeting');
// Add event listener to button
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const name = nameInput.value.trim();
    if (name) {
        greetingParagraph.textContent = `Hello, ${name}! Welcome to the Cloud! :barely_sunny:`;
        greetingParagraph.style.color = "#ffeb3b";
    } else {
        greetingParagraph.textContent = 'Please enter your name!';
        greetingParagraph.style.color = "#ff3f34";
    }
});

const positions = [
    "Software Engineer",
    "Web Designer",
    "Software Tester",
    "Cyber Security Graduate",
    "CTF Challenge Developer",
    "Graphic Designer",
    "Quick Learner",
    "Team Player"
];
let currentPosition = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 100;    // Speed of typing
const erasingSpeed = 50;    // Speed of deleting
const delayBetweenWords = 1500; // Delay before typing the next word

const typingTextElement = document.getElementById("typing-text");

function typeEffect() {
    // Get current position text
    const currentText = positions[currentPosition];

    if (isDeleting) {
        // Remove characters
        typingTextElement.textContent = currentText.substring(0, currentChar--);
        if (currentChar < 0) {
            isDeleting = false;
            currentPosition = (currentPosition + 1) % positions.length;
            currentChar = 0; // Reset character index for the next word
        }
    } else {
        // Add characters
        typingTextElement.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        if (currentChar === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords); // Delay before starting to delete
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => typeEffect());

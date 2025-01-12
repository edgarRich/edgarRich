// register.js
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const phone = document.getElementById('phone').value;
    const idNumber = document.getElementById('idNumber').value;
    const pin = document.getElementById('pin').value;
    const messageDiv = document.getElementById('message');

    // Simple validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        displayMessage("Please enter a valid 10-digit phone number.", "red");
        return;
    }
    if (idNumber.trim() === "") {
        displayMessage("ID number cannot be empty.", "red");
        return;
    }
    const pinPattern = /^\d{4}$/;
    if (!pinPattern.test(pin)) {
        displayMessage("PIN must be a 4-digit number.", "red");
        return;
    }

    // Simulate successful registration
    localStorage.setItem('registered', 'true'); // Save registration status
    displayMessage("Account registered successfully! Redirecting to login...", "green");

    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to Login page
    }, 2000);
});

// Function to display messages
const displayMessage = (message, color) => {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
};

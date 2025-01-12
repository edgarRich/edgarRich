// register.js
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const phone = document.getElementById('phone').value;
    const idNumber = document.getElementById('idNumber').value;
    const pin = document.getElementById('pin').value;
    const messageDiv = document.getElementById('message');

    // Simple validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        messageDiv.textContent = "Please enter a valid 10-digit phone number.";
        messageDiv.style.color = "red";
        return;
    }
    if (idNumber.trim() === "") {
        messageDiv.textContent = "ID number cannot be empty.";
        messageDiv.style.color = "red";
        return;
    }
    const pinPattern = /^\d{4}$/;
    if (!pinPattern.test(pin)) {
        messageDiv.textContent = "PIN must be a 4-digit number.";
        messageDiv.style.color = "red";
        return;
    }

    // Simulate successful registration (you might want to store in local storage or use a backend)
    localStorage.setItem('registered', 'true'); // Save registration status
    messageDiv.textContent = "Account registered successfully! Redirecting to login...";
    messageDiv.style.color = "green";

    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to Login page
    }, 2000);
});
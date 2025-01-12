// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
    const messageDiv = document.getElementById('message');

    // Check if the user is registered
    const isRegistered = localStorage.getItem('registered');

    if (isRegistered) {
        // Simulate successful login
        messageDiv.textContent = "Login successful! Redirecting to Home...";
        messageDiv.style.color = "green";

        // Redirect to Home page after a short delay
        setTimeout(() => {
            window.location.href = 'Home.html'; // Redirect to Home page
        }, 2000);
    } else {
        messageDiv.textContent = "You must register before logging in.";
        messageDiv.style.color = "red";
    }
});
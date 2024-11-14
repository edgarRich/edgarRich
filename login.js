document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    // Simple validation
    if (phone.length === 0 || pin.length !== 4) {
        document.getElementById('message').innerText = 'Please enter a valid phone number and a 4-digit PIN.';
        return;
    }

    // Simulate a successful login
    document.getElementById('message').innerText = 'Login successful! Redirecting...';
    setTimeout(() => {
        // Redirect to another page or perform further actions
        window.location.href = 'dashboard.html'; // Change to your desired page
    }, 2000);
});
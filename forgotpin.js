document.getElementById('forgotPinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const idNumber = document.getElementById('idNumber').value;
    const dob = document.getElementById('dob').value;
    const usedPin = document.getElementById('usedPin').value;

    // Simple validation
    if (idNumber.length === 0 || dob.length === 0 || usedPin.length === 0) {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Simulate a successful PIN recovery
    document.getElementById('message').innerText = 'PIN recovery successful! You will receive instructions via email.';
    setTimeout(() => {
        // Redirect to another page or perform further actions
        window.location.href = 'login.html'; // Change to your desired page
    }, 2000);
});
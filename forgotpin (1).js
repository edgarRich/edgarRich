document.getElementById('forgotPinForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const idNumber = document.getElementById('idNumber').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const usedPin = document.getElementById('usedPin').value.trim();
    const messageElement = document.getElementById('message');

    // Clear previous messages
    messageElement.innerText = '';

    // Validation function
    const validateInput = (input, fieldName) => {
        if (input.length === 0) {
            messageElement.innerText = `${fieldName} is required.`;
            return false;
        }
        return true;
    };

    // Validate inputs
    if (!validateInput(idNumber, 'ID Number') || 
        !validateInput(dob, 'Date of Birth') || 
        !validateInput(usedPin, 'Previously Used PIN')) {
        return;
    }
    
    // Simulate a successful PIN recovery
    messageElement.innerText = 'PIN recovery successful! You will receive instructions via email.';
    setTimeout(() => {
        // Redirect to another page or perform further actions
        window.location.href = 'login.html'; // Change to your desired page
    }, 2000);
});

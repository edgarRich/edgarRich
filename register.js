function validateForm() {
    const phone = document.getElementById("phone").value;
    const idNumber = document.getElementById("idNumber").value;
    const pin = document.getElementById("pin").value;
    const messageDiv = document.getElementById("message");

    // Validate phone number (example: must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        messageDiv.textContent = "Please enter a valid 10-digit phone number.";
        messageDiv.style.color = "red";
        return false;
    }

    // Validate ID number (example: must not be empty)
    if (idNumber.trim() === "") {
        messageDiv.textContent = "ID number cannot be empty.";
        messageDiv.style.color = "red";
        return false;
    }

    // Validate PIN (must be 4 digits)
    const pinPattern = /^\d{4}$/;
    if (!pinPattern.test(pin)) {
        messageDiv.textContent = "PIN must be a 4-digit number.";
        messageDiv.style.color = "red";
        return false;
    }

    // If all validations pass
    messageDiv.textContent = "Account registered successfully!";
    messageDiv.style.color = "green";
    return true; // Allow form submission
}
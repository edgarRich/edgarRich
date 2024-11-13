document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Correctly prevent the default form submission
    // You can add additional code here to handle the form submission, e.g., displaying a message
    document.getElementById('responseMessage').innerText = "Thank you for your message!";
});
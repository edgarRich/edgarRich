// STK1.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const idNumber = document.getElementById('idNumber').value;
        const pin = document.getElementById('pin').value;

        // Simulate form submission
        setTimeout(() => {
            responseMessage.innerHTML = `<p>Thank you, ${name}. Your registration is successful!</p>`;
            contactForm.reset();
        }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phoneNumber').value;
        const amount = document.getElementById('amount').value;
        const reason = document.getElementById('reason').value;

        if (validateInput(phoneNumber, amount)) {
            alert(`Requesting ${amount} from ${phoneNumber} for: ${reason}`);
            // Here you can add the code to send the request to the server
        }
    });

    function validateInput(phoneNumber, amount) {
        const phonePattern = /^[0-9]{10}$/; // Example pattern for a 10-digit phone number
        if (!phonePattern.test(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number.');
            return false;
        }
        if (amount <= 0) {
            alert('Please enter a valid amount.');
            return false;
        }
        return true;
    }
});

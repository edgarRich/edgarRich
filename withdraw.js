// withdraw.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const agentNumber = document.getElementById('agentNumber').value;
        const amount = document.getElementById('amount').value;
        const pin = document.getElementById('pin').value;

        if (validateInput(agentNumber, amount, pin)) {
            alert(`Withdrawal of ${amount} initiated for agent number ${agentNumber}.`);
            // Here you would typically send the data to the server
        } else {
            alert('Please ensure all fields are filled out correctly.');
        }
    });

    function validateInput(agentNumber, amount, pin) {
        return agentNumber.trim() !== '' && 
               amount > 0 && 
               pin.length === 4 && 
               !isNaN(amount);
    }
});

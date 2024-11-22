document.getElementById('balanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pin = document.getElementById('pin').value;
    const resultDiv = document.getElementById('result');

    // Simulated balance check
    if (phoneNumber === '1234567890' && pin === '1234') {
        resultDiv.innerHTML = `<p>Your balance is: $100.00</p>`;
    } else {
        resultDiv.innerHTML = `<p>Invalid phone number or PIN.</p>`;
    }
});

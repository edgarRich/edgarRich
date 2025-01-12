document.getElementById('sendMoneyForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = document.getElementById('amount').value;
    const authorizationCode = document.getElementById('authorizationCode').value;
    const pin = document.getElementById('pin').value;

    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
        document.getElementById('responseMessage').innerText = 'Please enter a valid amount.';
        return;
    }
    if (!authorizationCode) {
        document.getElementById('responseMessage').innerText = 'Authorization code is required.';
        return;
    }
    if (!pin || pin.length !== 4) { // Assuming PIN should be 4 digits
        document.getElementById('responseMessage').innerText = 'Please enter a valid 4-digit PIN.';
        return;
    }

    try {
        const response = await fetch('https://api.simbank.com/send-money', { // Replace with actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount,
                authorizationCode: authorizationCode,
                pin: pin
            })
        });

        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            document.getElementById('responseMessage').innerText = 'Received an invalid response from the server.';
            return;
        }

        if (response.ok) {
            document.getElementById('responseMessage').innerText = `Success: ${data.message}`; // Adjust as per API response
        } else {
            document.getElementById('responseMessage').innerText = `Error: ${data.message}`; // Adjust as per API response
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'An error occurred while sending money.';
    }
});

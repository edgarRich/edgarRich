document.getElementById('sendMoneyForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = document.getElementById('amount').value;
    const authorizationCode = document.getElementById('authorizationCode').value;
    const pin = document.getElementById('pin').value;

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

        const data = await response.json();

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
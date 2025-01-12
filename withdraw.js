document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const agentNumber = document.getElementById('agentNumber').value;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;

    // Here you can add your logic to process the withdrawal
    console.log(`Agent Number: ${agentNumber}, Amount: ${amount}, PIN: ${pin}`);

    // You can also add validation and further processing here
});

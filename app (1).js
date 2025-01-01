// Fetch example for connecting to the PHP backend
fetch('db_connect.php')
    .then(response => response.text())
    .then(data => {
        console.log(data); // This will log "Connected successfully" or an error message
    })
    .catch(error => console.error('Error:', error));

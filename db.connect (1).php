<?php
$servername = "localhost"; // Change if your database is hosted on another server
$username = "root@localhost"; // Your database username, "root" is default for local
$password = ""; // Your database password
$database = "simfund.db"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

// Close connection if not needed
// $conn->close();
?>

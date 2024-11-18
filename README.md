<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STK Financial Inclusion System</title>
    <style>body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background: linear-gradient(to right, #4CAF50, #2196F3); /* Greenish and bluish gradient */
    color: #fff;
}

header {
    background: rgba(0, 123, 255, 0.8);
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
    animation: fadeIn 1s; /* Animation effect for main content */
}

.service {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    background: rgba(255, 255, 255, 0.1); /* Slightly transparent background for services */
    transition: transform 0.3s; /* Animation effect on hover */
}

.service:hover {
    transform: scale(1.05); /* Scale effect on hover */
}

footer {
    text-align: center;
    padding: 10px 0;
    background: rgba(0, 123, 255, 0.8);
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin: 5px 0;
}

form input, form textarea {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
}

form button {
    padding: 10px;
    background: #007BFF;
    color: #fff;
    border: none;
    cursor: pointer;
}

form button:hover {
    background: #0056b3;
}

@media (max-width: 600px) {
    nav ul li {
        display: block; /* Stack navigation links on smaller screens */
        margin: 10px 0;
    }

    .service {
        margin: 5px 0; /* Reduce margin for services on small screens */
    }
}

/* Animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .contact-card {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .contact-card:hover {
    transform: scale(1.05);
  }
  
  .contact-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover; /* Maintain aspect ratio */
  }
  
  .contact-card h3 {
    margin-left: 1rem;
    font-weight: bold;
  }
  
  .contact-card p {
    margin-left: 1rem;
    font-size: 0.8rem;
    color: #888;
  }</style>
</head>
<body>
    <header>
        <h1>Welcome to STK Financial Inclusion System</h1>
        <div class="language-button">
            Select Language
            <div class="language-dropdown">
                <a href="language_en.html">English</a>
                <a href="language_sw.html">Kiswahili</a>
            </div>
        <nav>
            <ul>
                <li><a href="STK1.html" target="_self">Home</a></li>
                <li><a href="Home.html" target="_self">Main Page</a></li>
                <li><a href="services.html" target="_self">Services</a></li>
                <li><a href="about.html" target="_self">About Us</a></li>
                <li><a href="contact.html" target="_self">Contact</a></li>
            </ul>
        </nav>
        <div class="header-buttons">
            <button onclick="window.location.href='login.html'">Login</button>
            <button onclick="window.location.href='register.html'">Register</button>
            <button onclick="window.location.href='forgotpin.html'">Forgot Pin</button>
        </div>
    </header>

    <main>
        <section id="services">
            <h2>Our Services</h2>
            <div class="service">
                <h3>Getting Loans</h3>
                <p>We provide easy access to loans for individuals and businesses.</p>
            </div>
            <div class="service">
                <h3>Loaning Others</h3>
                <p>Facilitate peer-to-peer lending to help others in need.</p>
            </div>
            <div class="service">
                <h3>Saving Money</h3>
                <p>Encourage savings with attractive interest rates.</p>
            </div>
            <div class="service">
                <h3>Foreign Exchange Rates</h3>
                <p>Check live foreign exchange rates <a href="https://www.x-rates.com" target="_blank">here</a>.</p>
            </div>
            <div class="service">
                <h3>Crypto Exchange Rates</h3>
                <p>Check live crypto exchange rates <a href="https://www.coingecko.com" target="_blank">here</a>.</p>
            </div>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>At Simbank, we're here to make banking simple, secure and convenient.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <button class="large-button" onclick="window.location.href='contact.html'">
                Contact Us
            </button>
            

            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" required>

                <label for="Phone Number">Phone Number</label>
                <input type="Phone Number" id="Phone Number" required>

                <label for="idNumber">ID Number:</label>
                <input type="text" id="idNumber" required>

                <label for="pin">4 Digit Pin:</label>
                <input type="pin" id="pin" required>

                <button type="submit">Register</button>
            </form>

            <div id="responseMessage"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Simbank STK Inclusion System. All rights reserved.</p>
    </footer>

    <script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Correctly prevent the default form submission
    // You can add additional code here to handle the form submission, e.g., displaying a message
    document.getElementById('responseMessage').innerText = "Thank you for your message!";
});</script> 
    <script>
    // Fetch example for connecting to the PHP backend
fetch('db_connect.php')
    .then(response => response.text())
    .then(data => {
        console.log(data); // This will log "Connected successfully" or an error message
    })
    .catch(error => console.error('Error:', error));
</script>  
</body>
</html>

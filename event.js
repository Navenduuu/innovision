const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    console.log("New Registration: ${name}, ${email}");
    res.send(<h1>Thank you, ${name}, for registering!</h1>);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Set the date we're counting down to
const countdownDate = new Date("Feb 28, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the time difference between now and the countdown date
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

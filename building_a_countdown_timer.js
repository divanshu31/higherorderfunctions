function startCountdown(seconds) {
    let timeLeft = seconds;

    const intervalId = setInterval(() => {
        console.log(`Time left: ${timeLeft} seconds`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(intervalId);
            console.log("Countdown Complete!");
        }
    }, 1000);

    setTimeout(() => {
        let userInput = prompt("Press 's' to stop the countdown.");
        if (userInput && userInput.toLowerCase() === "s") {
            clearInterval(intervalId);
            console.log("Countdown Stopped by User!");
        }
    }, 100); 
}


const userSeconds = parseInt(prompt("Enter countdown time in seconds:"), 10);
if (!isNaN(userSeconds) && userSeconds > 0) {
    startCountdown(userSeconds);
} else {
    console.log("Please enter a valid number.");
}
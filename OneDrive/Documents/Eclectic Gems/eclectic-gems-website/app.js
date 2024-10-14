// Countdown Timer
const countdown = () => {
    const eventDate = new Date("October 25, 2024 15:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} dagen ${hours} uren ${minutes} minuten ${seconds} seconden`;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "Het feest is begonnen!";
    }
};

setInterval(countdown, 1000);

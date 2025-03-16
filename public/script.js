function updateClock() {
    const now = new Date();

    // Get current time
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Get current date
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);

    // Update HTML
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = formattedDate;

    // Reapply animation
    timeElement.classList.remove("fade-in");
    dateElement.classList.remove("fade-in");
    void timeElement.offsetWidth;  // Force reflow for restart animation
    void dateElement.offsetWidth;
    timeElement.classList.add("fade-in");
    dateElement.classList.add("fade-in");
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

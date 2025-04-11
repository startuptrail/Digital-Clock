function updateClock() {
    const now = new Date();

    // Convert to 12-hour format
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 -> 12

    // Set time and am/pm
    document.getElementById("clock-time").textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
    document.getElementById("ampm").textContent = ampm;

    // Set date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock();

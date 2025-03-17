function updateClock() {
    const now = new Date();
    
    // Get time
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

    // Get date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);

    // Change emoji every second
    const emojis = ["🔥", "⏰", "📢", "💡", "🌟"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("emoji").textContent = randomEmoji;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

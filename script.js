function updateUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const utcTimeString = now.toUTCString();
    utcTimeElement.innerHTML = `<i class="fas fa-clock"></i> ${utcTimeString}`;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);
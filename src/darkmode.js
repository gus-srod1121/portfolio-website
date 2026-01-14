function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function setupDarkMode() {
    const darkModeButton = document.getElementById("dark-mode-button");
    if (!darkModeButton) return;

    darkModeButton.addEventListener("click", toggleDarkMode);
}

setupDarkMode();


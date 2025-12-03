function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");
}

function setup()
{
    const darkModeButton = document.getElementById("dark-mode-button");
    darkModeButton.addEventListener("click", toggleDarkMode);
}

setup();
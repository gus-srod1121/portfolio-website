function setupNavScroll() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
        const currentY = window.scrollY;
        const scrollingDown = currentY > lastScrollY && currentY > 10;

        if (scrollingDown) {
            nav.classList.add("nav-hidden");
        } else {
            nav.classList.remove("nav-hidden");
        }

        lastScrollY = currentY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    });
}

setupNavScroll();


function updateScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

updateScrollbarWidth();

window.addEventListener('resize', updateScrollbarWidth);

/* Logo Change Animation !! */
document.addEventListener('DOMContentLoaded', function () {
    let navText = document.querySelector('.nav-text');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navText.style.opacity = 0;
                setTimeout(() => {
                    navText.textContent = 'Reuben Mattam';
                    navText.style.opacity = 1;
                }, 500);
            } else {
                navText.style.opacity = 0;
                setTimeout(() => {
                    navText.textContent = 'https://reubenmattam.me';
                    navText.style.opacity = 1;
                }, 500);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.not-start').forEach(section => {
        observer.observe(section);
    });
});
/* Logo Change Animation !! */
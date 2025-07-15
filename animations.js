  window.addEventListener('scroll', () => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  });

function updateScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

updateScrollbarWidth();

window.addEventListener('resize', updateScrollbarWidth);

/* home page animation via intersection observer api */

/* home page animation */

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

/* Hambuger (yum)*/
function toggleMenu() {
    const navRight = document.querySelector('.nav-right');
    navRight.classList.toggle('active');
}

function toggleMenu() {
    const navRight = document.querySelector('.nav-right');
    navRight.classList.toggle('active');
}
/* Hambuger (yum)*/

/* Resuize nav */
function updateNavText() {
    const navText = document.querySelector('.nav-text');
    if (window.innerWidth < 800) {
        navText.textContent = 'Reuben Mattam';
    } else {
        navText.textContent = 'https://reubenmattam.me';
    }
}

window.addEventListener('load', updateNavText);
window.addEventListener('resize', updateNavText);
/* Resuize nav */
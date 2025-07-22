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

// cursor pinging animation !!
const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let isOverRedCursor = false;
let pingInterval;

// Update cursor position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Create ping effect
function createPing() {
    if (isOverRedCursor) {
        const ping = document.createElement('div');
        ping.className = 'ping ping-animation';
        ping.style.left = mouseX + 'px';
        ping.style.top = mouseY + 'px';
        
        document.body.appendChild(ping);
        
        // Remove ping element after animation completes
        setTimeout(() => {
            if (document.body.contains(ping)) {
                document.body.removeChild(ping);
            }
        }, 800);
    }
}

// Handle hover over elements with red-cursor class
document.querySelectorAll('.red-cursor').forEach(element => {
    element.addEventListener('mouseenter', () => {
        isOverRedCursor = true;
        cursor.style.opacity = '1';
        // Start pinging immediately and then every 2 seconds
        createPing();
        pingInterval = setInterval(createPing, 2000);
    });

    element.addEventListener('mouseleave', () => {
        isOverRedCursor = false;
        cursor.style.opacity = '0';
        if (pingInterval) {
            clearInterval(pingInterval);
            pingInterval = null;
        }
    });
});

// Hide cursor when it leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    isOverRedCursor = false;
    if (pingInterval) {
        clearInterval(pingInterval);
        pingInterval = null;
    }
});
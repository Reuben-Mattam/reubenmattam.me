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

// On Page JS
// intro animation !!
function imageBuffer() {
    return new Promise((resolve) => {
        const images = document.querySelectorAll('img');
        
        if (images.length === 0) {
            resolve();
            return;
        }
        let loadedCount = 0;
        const totalImages = images.length;
        
        function checkAllLoaded() {
            loadedCount++;
            if (loadedCount === totalImages) {
                resolve();
            }
        }
        images.forEach(img => {
            if (img.complete) {
                checkAllLoaded();
            } else {
                img.addEventListener('load', checkAllLoaded);
                img.addEventListener('error', checkAllLoaded);
            }
        });
    });
}

async function introAnimation() {
    await imageBuffer();
    
    // animation starts here after all images are loaded in
    const originalScrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${originalScrollY}px`;
    document.body.style.width = '100%';

    setTimeout(() => {
        const maskedTitleText = document.getElementById('masked-title-text');
        
        const overlay = document.createElement('div');
        overlay.textContent = maskedTitleText.textContent;
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.color = '#e5e7e6';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1.1s ease-out';
        overlay.style.pointerEvents = 'none';
        
        const computedStyle = window.getComputedStyle(maskedTitleText);
        overlay.style.fontSize = computedStyle.fontSize;
        overlay.style.fontFamily = computedStyle.fontFamily;
        overlay.style.fontWeight = computedStyle.fontWeight;
        overlay.style.textAlign = computedStyle.textAlign;
        overlay.style.lineHeight = computedStyle.lineHeight;
        
        const parent = maskedTitleText.parentElement;
        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }
        
        parent.appendChild(overlay);
        
        setTimeout(() => overlay.style.opacity = '1', 50);
        
        setTimeout(() => {
            const homeIntro = document.getElementById('home-intro');
            homeIntro.style.transition = 'opacity 1s ease-out';
            homeIntro.style.opacity = '0';
            homeIntro.style.zIndex = '1';
            
            setTimeout(() => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
                window.scrollTo(0, originalScrollY);
            }, 2000);
            
        }, 2000);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', introAnimation);
// intro animation 

// intro moutains animation  !
const aboutStart = document.getElementById('about-start');
const layer1 = document.getElementById('img-layer1');
const layer2 = document.getElementById('img-layer2');
const layer3 = document.getElementById('img-layer3');

const layerRanges = {
    layer1: 30,
    layer2: -20,
    layer3: 10
};

function handleMouseMove(e) {
    const rect = aboutStart.getBoundingClientRect();
    const centerX = rect.width / 2;
    
    const mouseX = e.clientX - rect.left;
    const deltaX = (mouseX - centerX) / centerX;
    

    const layer1MoveX = deltaX * layerRanges.layer1;
    const layer2MoveX = deltaX * layerRanges.layer2;
    const layer3MoveX = deltaX * layerRanges.layer3;
    
    layer1.style.transform = `translate(${layer1MoveX}px, 0px)`;
    layer2.style.transform = `translate(${layer2MoveX}px, 0px)`;
    layer3.style.transform = `translate(${layer3MoveX}px, 0px)`;
}

function handleMouseLeave() {
    layer1.style.transform = 'translate(0px, 0px)';
    layer2.style.transform = 'translate(0px, 0px)';
    layer3.style.transform = 'translate(0px, 0px)';
}

aboutStart.addEventListener('mousemove', handleMouseMove);
aboutStart.addEventListener('mouseleave', handleMouseLeave);
// intro moutains animation !

/* services !! */
document.addEventListener('DOMContentLoaded', () => {
    const targets = ['#ds', '#webdev', '#design'].map(id => document.querySelector(id));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio === 1) {
                entry.target.classList.add('fullscreen');
            } else {
                entry.target.classList.remove('fullscreen');
            }
        });
    }, {
        threshold: 1
    });

    targets.forEach(target => {
        if (target) observer.observe(target);
    });
});
    /* services !! */

// break
document.addEventListener('DOMContentLoaded', () => {
const breakDiv = document.getElementById('break');
const interestedText = document.getElementById('interested-break');

if (!breakDiv || !interestedText) return; // safety

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        interestedText.classList.add('in-view');
    } else {
        interestedText.classList.remove('in-view');
    }
    });
}, { threshold: [0, 0.5, 1] });

io.observe(breakDiv);
});
// break



/*clicking animation for showcase-proj*/
const projectContainers = document.querySelectorAll('.showcase-proj');

function toggleAnimation(projectContainer) {
    const isExpanded = projectContainer.classList.contains('expanded');
    
    if (isExpanded) {
        projectContainer.classList.remove('expanded');
    } else {
        projectContainers.forEach(container => {
            if (container !== projectContainer) {
                container.classList.remove('expanded');
            }
        });
        projectContainer.classList.add('expanded');
    }
}

projectContainers.forEach(projectContainer => {
    const projBox = projectContainer.querySelector('.proj-box');
    const projDetails = projectContainer.querySelector('.proj-details');
    
    if (projBox) {
        projBox.addEventListener('click', () => {
            toggleAnimation(projectContainer);
        });
    }
    
    if (projDetails) {
        projDetails.addEventListener('click', () => {
            toggleAnimation(projectContainer);
        });
    }
});
/*clicking animation for showcase-proj*/

// initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("i6tv5noQxMthLrZ71");

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // form data
        const templateParams = {
            user_name: this.user_name.value,
            user_phone: this.user_phone.value,
            user_email: this.user_email.value,
            user_message: this.user_message.value
        };
    
        // send email using EmailJS
        emailjs.send('service_le101q2', 'template_77jh1gh', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});
/*emailjs*/

// QOL 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
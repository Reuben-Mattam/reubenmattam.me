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

/* nav bar animation */
const menu = document.getElementById("navbar");

Array.from(document.getElementsByClassName("nav-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });
/* nav bar animation*/
/*= ============== CHANGE BACKGROUND HEADER =============== */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*= ============== MIXITUP FILTER PORTFOLIO =============== */
const mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linework.forEach((L) => L.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((L) => L.addEventListener('click', activeWork));
/*= ============== SWIPER TESTIMONIAL =============== */

/*= ============== SCROLL SECTIONS ACTIVE LINK =============== */

/*= ============== LIGHT DARK THEME =============== */

/*= ============== SCROLL REVEAL ANIMATION =============== */

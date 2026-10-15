/*===== MENU SHOW & HIDE =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU ON MOBILE LINK CLICK ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1200,
        delay: 150,
        reset: false
    });

    sr.reveal('.home__data, .about__img, .section-title', {}); 
    sr.reveal('.home__img, .about__content', { delay: 250 }); 
    sr.reveal('.home__social-icon', { interval: 100 }); 
    sr.reveal('.experience__card', { interval: 150 });
    sr.reveal('.skills__group', { interval: 150 });
    sr.reveal('.work__card', { interval: 150 }); 
    sr.reveal('.contact__card, .contact__form', { interval: 150 });
}

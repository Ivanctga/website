/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*--- menu show ---*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*--- menu hidden ---*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home_swiper', {      
    loop: true,  
    grabCursor: true, // Corrigido: grabcursor → grabCursor
    slidesPerView: 'auto',
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: true, // Corrigido: 'auto' → true
        },
        1152: {
            slidesPerView: 3, // Adicionado slidesPerView
            centeredSlides: true, // Corrigido: 'auto' → true
            spaceBetween: -64,
        }
    }
  
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('bg-header') // Corrigido: this.scrollY → window.scrollY
                         : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,   
})

sr.reveal(`.home_swiper`)
sr.reveal(`.home_circle`, {scale: 1.5, delay: 300}) // Corrigido: deplay → delay
sr.reveal(`.home_subcircle`, {scale: 1.5, delay: 500}) // Corrigido: deplay → delay
sr.reveal(`.home_title`, {scale: 1, origin: 'bottom', delay: 1200}) // Corrigido: deplay → delay
sr.reveal(`.swiper-button-next, .swiper-button-prev`, {origin: 'right'})



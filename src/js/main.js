const burgerIcon = document.querySelector('nav .hamburger')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')
const footerYear = document.querySelector('.footer__year')
const navDesktop = document.querySelector('.nav__desktop')
const aboutUs = document.querySelector('.nav__desktop-item--cards')
const cards = document.querySelector('.cards')
const arrow = document.querySelector('.arrow')

const showNav = () =>{
burgerIcon.classList.toggle('is-active');
nav.classList.toggle('nav__active');

navLink.forEach(link =>{
    link.addEventListener('click', () =>{
        burgerIcon.classList.remove('is-active')
        nav.classList.remove('nav__active')
    })
})
}
const handleNav = () =>{
    if(window.scrollY>150){
        navDesktop.style.backgroundColor = "#030202"
    }
    else{
        navDesktop.style.backgroundColor = "transparent"
    }    
}
burgerIcon.addEventListener('click', showNav)
document.addEventListener('scroll', handleNav)
const handleYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleYear()
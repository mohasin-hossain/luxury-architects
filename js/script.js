hamburger = document.querySelector('.header__hamburger');
navList = document.querySelector('.nav__list');
navLinks = document.querySelectorAll('.nav__links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    })
})
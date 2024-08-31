document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.querySelector('.signUp__btn');
    const moreBtn = document.querySelector('.more__btn');
    const formTitle = document.querySelector('.footer__title');
    const courseTitle = document.querySelector('.section__title');
    const navList = document.querySelector('.navbar__list');
    const burger = document.querySelector('.burger__btn');
    const btnImg = document.querySelector('.mobile__open');

    // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.cards__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            641: {
            slidesPerView: 2,
            spaceBetween: 30,
            },
            1200: {
            slidesPerView: 3,
            spaceBetween: 46,
            },
        },
    });

    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    signUpBtn.addEventListener('click', () => {
        scrollToSection(formTitle);
    });

    moreBtn.addEventListener('click', () => {
        scrollToSection(courseTitle);
    });

    burger.addEventListener('click', () => {
        if (navList.classList.toggle('mobile__menu')) {
            btnImg.src = './assets/svg/nav-close.svg';
        } else {
            btnImg.src = './assets/svg/nav-open.svg';
        }
    });

    document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});

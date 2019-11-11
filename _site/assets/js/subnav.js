'use strict';

(() => {
    const obj = '.js-subnav';
    if (!exists(obj)) return;

    const node = document.querySelector(obj);
    const header = document.querySelector('.js-header');
    const content = document.querySelector('.js-content');

    header.style.position = 'absolute';
    content.style.marginTop = '120px';

    const scrolling = () => {
        (window.scrollY > 60) ? node.classList.add('is-sticky'): node.classList.remove('is-sticky');
    }
    scrolling();
    window.addEventListener('scroll', () => requestAnimationFrame(scrolling));

    ß('.js-subnav-toggle').map((el) => el.onclick = () => {
        el.classList.toggle('is-active');
        ß('.js-subnav, .js-subnav-items').map((el) => el.classList.toggle('is-active'));
    });
})()
'use strict';

(() => {
    const obj = '.js-subnav';
    if (!exists(obj)) return;

    const node = document.querySelector(obj);
    const header = document.querySelector('.js-header');
    const content = document.querySelector('.js-content');
    const toggle = document.querySelector('.js-subnav-toggle');
    const nav = ß('.js-subnav, .js-subnav-items, .js-subnav-toggle');

    header.style.position = 'absolute';
    content.style.marginTop = '120px';

    const scrolling = () => {
        (window.scrollY > 60) ? node.classList.add('is-sticky'): node.classList.remove('is-sticky');
        nav.map((el) => el.classList.remove('is-active'));
    }
    scrolling();
    
    window.addEventListener('scroll', () => requestAnimationFrame(scrolling));
    toggle.onclick = () => nav.map((el) => el.classList.toggle('is-active'));
})()
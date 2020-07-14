let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav_links li');
let toggler = document.querySelectorAll('.toggler');
let menu = document.querySelectorAll('.menu li');
let contain = document.querySelectorAll('.showcase-inner h1');
let icons = document.querySelectorAll('.social a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});
icons.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});
toggler.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});
menu.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});
contain.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-text');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-text');
    });
});





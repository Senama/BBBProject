const fade = document.querySelectorAll('.fade');


window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (window.scrollY > 250) {
        for (let i = 0; i < fade.length; i++) {
            fade[i].classList.remove('fade');
            fade[i].classList.add('fade-in');
        }
    } else {
        for (let i = 0; i < fade.length; i++) {
            fade[i].classList.add('fade');
            fade[i].classList.remove('fade-in');
        }
    }

});
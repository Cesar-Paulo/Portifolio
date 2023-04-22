let menubtn = document.querySelector('#menu-btn');
let menubar = document.querySelector('.menubar');

menubtn.onclick =() => {
    menubtn.classList.toggle('bx-x');
    menubar.classList.toggle('active');
}
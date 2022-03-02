function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    var content = document.getElementsByClassName('content');
    content[0].classList.toggle('hide')
}
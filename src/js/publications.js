function toggleDropDown(menu, year) {
    menu.classList.toggle('drop');
    var cards = document.getElementsByClassName(parseInt(year));
    for(var i = 0; i < cards.length; i++)
    {
        cards[i].classList.toggle('hide');
    }
}
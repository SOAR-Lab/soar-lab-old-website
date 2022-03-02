jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 877) {
        $('.info').addClass('hide');
        $('.tab').removeClass('active');
      } else if (ww >= 601) {
        $('.info').removeClass('hide');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

function toggleDropDown(menu, year) {
    menu.classList.toggle('drop');
    var cards = document.getElementsByClassName(parseInt(year));
    for(var i = 0; i < cards.length; i++)
    {
        cards[i].classList.toggle('hide');
    }
}

function toggleTab(tab) {
    if (tab.classList.contains('active')) return;
    var card = tab.closest('.card');
    var tabs = tab.closest('.tabs');
    var info = card.getElementsByClassName('infoelement');
    tabs = tabs.getElementsByClassName('tab');
    console.log(info)

    if (!tabs[0].classList.contains('active') && !tabs[1].classList.contains('active'))
    {
        tab.classList.toggle('active');
    }
    else
    {
        for(var i = 0; i < tabs.length; i++)
        {
            tabs[i].classList.toggle('active');
        }
    }

    for(var i = 0; i < info.length; i++)
    {
        info[i].classList.toggle('hide');
    }
}
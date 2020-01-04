$(window).on('load', function () {
  $(document).ready(function(){

    $("#burger-mobile").on('click', function(){
      let menu_slider = document.getElementById('menu-slider');
      menu_slider.classList.toggle('slide-box-trs');
      setTimeout(function(){
        let menu_icon_left = document.getElementsByClassName('menu-icon-left');
        let menu_icon_right = document.getElementsByClassName('menu-icon-right');
        menu_icon_left[0].classList.toggle('menu-icon-left-trs');
        menu_icon_left[1].classList.toggle('menu-icon-left-trs');
        menu_icon_right[0].classList.toggle('menu-icon-right-trs');
        menu_icon_right[1].classList.toggle('menu-icon-right-trs');
      },300);
    });
    let close_menu = document.getElementsByClassName('close-menu');
    for (var i = 0; i < close_menu.length; i++) {
      close_menu[i].addEventListener('click', function(){
        let menu_slider = document.getElementById('menu-slider');
        let menu_icon_left = document.getElementsByClassName('menu-icon-left');
        let menu_icon_right = document.getElementsByClassName('menu-icon-right');
        menu_slider.classList.remove('slide-box-trs');
        menu_icon_left[0].classList.remove('menu-icon-left-trs');
        menu_icon_left[1].classList.remove('menu-icon-left-trs');
        menu_icon_right[0].classList.remove('menu-icon-right-trs');
        menu_icon_right[1].classList.remove('menu-icon-right-trs');
      });
    }

  });
});

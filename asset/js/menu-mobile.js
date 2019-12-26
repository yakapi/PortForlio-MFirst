$(window).on('load', function () {
  $(document).ready(function(){

    $("#burger-mobile").on('click', function(){
      let menu_slider = document.getElementById('menu-slider');
      menu_slider.classList.toggle('slide-box-trs');
    });


  });
});

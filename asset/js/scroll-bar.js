$(window).on('load', function () {
  $(document).ready(function(){

    let about_content = document.getElementById('about-content');
    let page_contact = document.getElementById('page-contact');
    let menu_desk = document.getElementById('menu-desktop');
    let back_top_arrow = document.getElementById('back-top-arrow');
    let color_arrow = document.getElementById('color-arrow');
    let nav_d = document.getElementsByClassName('nav-d');
    let about_content_topSet = about_content.offsetTop;
    let page_contact_topSet = page_contact.offsetTop;

    $(window).on('scroll', function(){
      if ($(document.documentElement).scrollTop() >= about_content_topSet) {//&& $(document.documentElement).scrollTop() < page_contact_topSet
        menu_desk.classList.add('menu-desk-transition');
        back_top_arrow.classList.add('z-imax');
        color_arrow.classList.remove('clr-ar-tr');
        for (var i = 0; i < nav_d.length; i++) {
          nav_d[i].classList.remove('txt-nav');
        };
      }
      // else if ($(document.documentElement).scrollTop() >= page_contact_topSet - 5) {
      //   menu_desk.classList.remove('menu-desk-transition');
      //   color_arrow.classList.add('clr-ar-tr');
      //   for (var i = 0; i < nav_d.length; i++) {
      //     nav_d[i].classList.add('txt-nav');
      //   };
      // }
      else{
        menu_desk.classList.remove('menu-desk-transition');
        back_top_arrow.classList.remove('z-imax');
        color_arrow.classList.remove('clr-ar-tr');
        for (var i = 0; i < nav_d.length; i++) {
          nav_d[i].classList.add('txt-nav');
        };
      }
    });


  });
});

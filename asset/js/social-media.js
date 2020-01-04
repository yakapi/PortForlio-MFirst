$(window).on('load', function(){
  $(document).ready(function(){
    let body_element = document.getElementById('BodBod');
    let window_size = parseInt(window.getComputedStyle(body_element).getPropertyValue("width"));
    if (window_size < 1150) {
      let social_fx = document.getElementById('social-mobileFX');
      social_fx.addEventListener('click', function(){
          let span_media = document.getElementById('span-media');
          let social_icon = document.getElementsByClassName('social-icon');
          span_media.classList.add('span-media-fx');
          for (var i = 0; i < social_icon.length; i++) {
            social_icon[i].classList.add('social-icon-fx');
          }
      });
    }
    });
  });

$(window).on('load', function () {
  $(document).ready(function(){

    let loader = document.getElementById('loader');
    $('#loader').fadeIn(1000);
    setTimeout(function(){
      loader.remove();
    },1000);



  });
});

let form = document.querySelector("#port-form");
let nom_form = document.querySelector("#nameOf");
let mail = document.querySelector("#mailOf");
let message = document.querySelector("#messageOf");
let failed_message = document.querySelectorAll(".failed");
let contact_name_error = document.getElementById('contact-name-error');
let contact_mail_error = document.getElementById('contact-mail-error');
let contact_message_error = document.getElementById('contact-message-error');
let keydown_reload = document.querySelectorAll(".keydown-reload");
function validate_form(){
  if (!nom_form.value.match(/^[a-zA-Z]+$/) && !mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && !message.value.match(/^[a-zA-Z]+$/)) {
    contact_name_error.append ("Fail");
    contact_mail_error.append ("Fail");
    contact_message_error.append ("Fail");
  }else if (!nom_form.value.match(/^[a-zA-Z]+$/) && !mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && message.value.match(/^[a-zA-Z]+$/)) {
    contact_name_error.append ("Fail");
    contact_mail_error.append ("Fail");
  }else if (!nom_form.value.match(/^[a-zA-Z]+$/) && mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)&& !message.value.match(/^[a-zA-Z]+$/)) {
    contact_name_error.append ("Fail");
    contact_message_error.append ("Fail");
  }else if (nom_form.value.match(/^[a-zA-Z]+$/) && !mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)&& !message.value.match(/^[a-zA-Z]+$/)) {
    contact_mail_error.append ("Fail");
    contact_message_error.append ("Fail");
  }else if (!nom_form.value.match(/^[a-zA-Z]+$/)) {
    contact_name_error.append ("Fail");
  }else if(!mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    contact_mail_error.append ("Fail");
  }else if (!message.value.match(/^[a-zA-Z]+$/)) {
    contact_message_error.append ("Fail");
  }else {
    form.submit();// Voir pour inclure le fichier d'envoie ajax ici
  }
};

form.addEventListener("submit", function(e){
  e.preventDefault();
  validate_form();
});

keydown_reload[0].addEventListener('keydown',function(){
  if (nom_form.value.match(/^[a-zA-Z]+$/)) {
    failed_message[0].innerHTML = "";
  };

});
keydown_reload[1].addEventListener('keydown',function(){
  if (mail.value.match(/^[a-zA-Z]+$/)) {
    failed_message[1].innerHTML = "";
  }
  if (mail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    failed_message[1].innerHTML = "";
  }
});
keydown_reload[2].addEventListener('keydown',function(){
  if (message.value.match(/^[a-zA-Z]+$/)) {
    failed_message[2].innerHTML = "";
  }
});

<section id="page-contact">
  <div class="page-title">
    <h2 class="txt-c txt-pc fs-trois fw-b">My Contact :</h2>
  </div>
  <div class="contact-content">
    <div class="contact-content-left">
      <div class="contact-form-content">
        <h3 class="fs-trois txt-pc txt-c fw-b pall-15">Drop me a line !</h3>
        <form id="port-form" class="contact-form m-auto" action="sendMail_ez.php" method="post">
          <div class="ligne-form">
            <div class="section-form">
              <label for="nameOf">
                <div class="icon-form">
                  <?php require 'asset/img/contact-user.php'; ?>
                </div>
              </label>
              <input class="w-100" id="nameOf" type="text" name="nameOf" placeholder="Full Name :" value="">
            </div>
            <p id="contact-name-error" class="spc-contact error pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form">
            <div class="section-form">
              <label for="mailOf">
                <div class="icon-form">
                  <?php require 'asset/img/contact-mail.php'; ?>
                </div>
              </label>
              <input class="w-100" id="mailOf" type="text" name="mailOf" placeholder="Your e-Mail :" value="">
            </div>
            <p id="contact-mail-error" class="spc-contact error pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form">
            <div class="section-form">
              <label for="messageOf">
                <div class="icon-form">
                  <?php require 'asset/img/contact-message.php'; ?>
                </div>
              </label>
              <textarea id="messageOf" name="messageOf" placeholder="Your message :" rows="1" cols="80"></textarea>
            </div>
            <p id="contact-message-error" class="spc-contact error pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form flx-ac">
            <input id="send-mail" class="btn-send-mail" type="submit" name="send-mail" value="Send Mail">
          </div>
        </form>
        <p id="send-successfull" class="txt-pc txt-c spc-contact pall-15"></p>
      </div>
      <div class="more-contact">
        <div class="btn_wrap">
            <span>Social Media</span>
            <div class="container-share">
              <a class="cl-un" href="#"><i class="cl-trois fab fa-facebook"></i></a>
              <a class="cl-quatre" href="#"><i class="cl-quatre fab fa-instagram"></i></a>
              <a class="cl-trois" href="#"><i class="cl-un fab fa-linkedin"></i></a>
              <a class="cl-deux" href="#"><i class="cl-deux fab fa-github"></i></a>
            </div>
        </div>
        <a href="#">
          <div class="btn-cv">
              <span>Look CV</span>
          </div>
        </a>
      </div>
    </div>
    <div class="contact-content-right">
      <div class="content-right-block rltv">
        <div class="ablst h-100 w-100">
          <img class="h-100 w-100" src="asset/img/contact.gif" alt="contact-anim">
        </div>
      </div>
    </div>
  </div>
</section>

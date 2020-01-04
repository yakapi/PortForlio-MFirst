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
              <input class="w-100 keydown-reload" id="nameOf" type="text" name="nameOf" placeholder="Full Name :" value="">
            </div>
            <p id="contact-name-error" class="spc-contact cl-quatre failed  pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form">
            <div class="section-form">
              <label for="mailOf">
                <div class="icon-form">
                  <?php require 'asset/img/contact-mail.php'; ?>
                </div>
              </label>
              <input class="w-100 keydown-reload" id="mailOf" type="text" name="mailOf" placeholder="Your e-Mail :" value="">
            </div>
            <p id="contact-mail-error" class="spc-contact cl-quatre failed  pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form">
            <div class="section-form">
              <label for="messageOf">
                <div class="icon-form">
                  <?php require 'asset/img/contact-message.php'; ?>
                </div>
              </label>
              <textarea id="messageOf" name="messageOf" class="keydown-reload" placeholder="Your message :" rows="1" ></textarea>
            </div>
            <p id="contact-message-error" class="spc-contact cl-quatre failed pall-15"></p>
            <hr>
          </div>
          <div class="ligne-form flx-ac">
            <input id="send-mail" class="btn-send-mail" type="submit" name="send-mail" value="Send Mail">
          </div>
        </form>
        <p id="send-successfull" class="txt-pc txt-c failed error spc-contact pall-15"></p>
      </div>
      <div class="more-contact">
        <div id="social-mobileFX" class="btn_wrap">
            <span id="span-media">Social Media</span>
            <div class="container-share">
              <a class="cl-un" href="https://www.facebook.com/victor.barlier"><i class="social-icon cl-trois fab fa-facebook"></i></a>
              <a class="cl-quatre" href="https://www.instagram.com/d_cay.420/"><i class="social-icon cl-quatre fab fa-instagram"></i></a>
              <a class="cl-trois" href="https://www.linkedin.com/in/victor-barlier-ab4460174/"><i class="social-icon cl-un fab fa-linkedin"></i></a>
              <a class="cl-deux" href="https://github.com/yakapi/"><i class="social-icon cl-deux fab fa-github"></i></a>
            </div>
        </div>
        <a href="asset/img/CV-ACS.pdf" target="_blank" download>
          <div class="btn-cv">
              <span>My CV</span>
          </div>
        </a>
      </div>
    </div>
    <div class="contact-content-right">
      <div class="content-right-block rltv">
        <div class="contact-gif ablst h-100 w-100">
          <img class="h-100 w-100" src="asset/img/contact.gif" alt="contact-anim">
        </div>
        <div class="contact-map ablst h-100 w-100">
          <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Belfort+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

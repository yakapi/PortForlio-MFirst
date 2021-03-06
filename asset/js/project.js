$(window).on('load', function () {
  $(document).ready(function(){

    let project_screen = document.getElementById('project-screen');

    //Click Lucio icon
      let lucio_icon = document.getElementById('pjt-lucio');
      lucio_icon.addEventListener('click', function(){
        let lucio_icon_block = document.getElementById('Lucio-icon');
        let bomber_icon_block = document.getElementById('BomberMeuh-icon');
        let any_icon_block = document.getElementById('AnyTransfer-icon');
        let wish_icon_block = document.getElementById('eWishCard-icon');
        lucio_icon_block.classList.add('move-left');
        bomber_icon_block.classList.add('move-right');
        setTimeout(function(){
          any_icon_block.classList.add('move-left')
          wish_icon_block.classList.add('move-right')
        },500);
        setTimeout(function(){
          let lucio_pjt_screen = document.createElement('div');
          lucio_pjt_screen.classList.add('lucio-pjt-screen');
          lucio_pjt_screen.classList.add('ablst');
          lucio_pjt_screen.classList.add('h-100');
          lucio_pjt_screen.classList.add('z-iup');
          lucio_pjt_screen.classList.add('w-100');
          lucio_pjt_screen.innerHTML = '<div class="lucio-content rltv w-100 h-100">'
          + '<h3 class="fw-b txt-pc pol-un fs-deux">Lucio Pizzeria</h3>'
          + '<iframe class="frame-border logo-desk" src="http://victor.barlier.free.fr/lucio/" width="45%" height="45%"></iframe>'
          + '<div class="logo-mobile logo-project-size">'
          + '<img src="asset/img/lucio-mobile.png" alt="Lucio Pizzeria">'
          + '</div>'
          + '<div class="project-describe txt-pc">'
          + '<p class="pall-15"><span class="fw-b">Project:</span> Build a complete project from wireframe to website</p>'
          + '<ul class="list-pjt">'
          + '<li class="project-list">Create a wireframe with Adobe XD</li>'
          + '<li class="project-list">Create a graphic identity</li>'
          + '<li class="project-list">Build a mock-up with Adobe PhotoShop </li>'
          + '<li class="project-list">See with the client, if everythings is good.</li>'
          + '<li class="project-list">Time to integrate the mock-up into a website</li>'
          + '</ul>'
          + '</div>'
          + '<div class="button-box flx-ac">'
          + '<a class="da-blk btn-pjt" target="_blank" href="http://victor.barlier.free.fr/lucio/">Open New Tab</a>'
          + '<p id="close-lucio" class="btn-pjt curs-p">Close</p>'
          + '</div>'
          + '</div>';
          lucio_pjt_screen.setAttribute('id', 'lu-screen');
          project_screen.appendChild(lucio_pjt_screen);
          setTimeout(function(){
            lucio_pjt_screen.classList.add('opa-pj-screen-up');
            let close_lucio = document.getElementById('close-lucio');
            close_lucio.addEventListener('click', function(){
              lucio_pjt_screen.classList.remove('opa-pj-screen-up');
              setTimeout(function(){
                lucio_pjt_screen.remove();
              },800);
              lucio_icon_block.classList.remove('move-left');
              bomber_icon_block.classList.remove('move-right');
              setTimeout(function(){
                any_icon_block.classList.remove('move-left')
                wish_icon_block.classList.remove('move-right')
              },500);
            })
          },50);
        },1000)
      });

      //Click BomberMeuh icon
        let bomber_icon = document.getElementById('pjt-bomber');
        bomber_icon.addEventListener('click', function(){
          let lucio_icon_block = document.getElementById('Lucio-icon');
          let bomber_icon_block = document.getElementById('BomberMeuh-icon');
          let any_icon_block = document.getElementById('AnyTransfer-icon');
          let wish_icon_block = document.getElementById('eWishCard-icon');
          lucio_icon_block.classList.add('move-left');
          bomber_icon_block.classList.add('move-right');
          setTimeout(function(){
            any_icon_block.classList.add('move-left')
            wish_icon_block.classList.add('move-right')
          },500);
          setTimeout(function(){
            let bomber_pjt_screen = document.createElement('div');
            bomber_pjt_screen.classList.add('bomber-pjt-screen');
            bomber_pjt_screen.classList.add('ablst');
            bomber_pjt_screen.classList.add('h-100');
            bomber_pjt_screen.classList.add('z-iup');
            bomber_pjt_screen.classList.add('w-100');
            bomber_pjt_screen.innerHTML = '<div class="bomber-content rltv w-100 h-100">'
            + '<h3 class="fw-b txt-pc pol-un fs-deux">BomberMeuh</h3>'
            + '<iframe class="logo-desk frame-border" src="http://bombermeuh.ga" width="45%" height="45%"></iframe>'
            + '<div class="logo-mobile logo-project-size">'
            + '<img src="asset/img/bomber-mobile.png" alt="BomberMeuh Logo">'
            + '</div>'
            + '<div class="project-describe txt-pc">'
            + '<p class="pall-15"><span class="fw-b">Project:</span> Create a Game with Vanilla JS!</p>'
            + '<ul class="list-pjt">'
            + '<li class="project-list">Build a Screen for the game</li>'
            + '<li class="project-list">Create a Hero with capacity rules</li>'
            + '<li class="project-list">Create somes enemis with capacity rules</li>'
            + '<li class="project-list">Build Object hurdle to lock hero and ennmis</li>'
            + '<li class="project-list">Create Game Rules</li>'
            + '</ul>'
            + '</div>'
            + '<div class="button-box flx-ac">'
            + '<a class="da-blk btn-pjt" target="_blank" href="http://bombermeuh.ga">Open New Tab</a>'
            + '<p id="close-bomber" class="btn-pjt curs-p">Close</p>'
            + '</div>'
            + '</div>';
            bomber_pjt_screen.setAttribute('id', 'bomb-screen');
            project_screen.appendChild(bomber_pjt_screen);
            setTimeout(function(){
              bomber_pjt_screen.classList.add('opa-pj-screen-up');
              let close_bomber = document.getElementById('close-bomber');
              close_bomber.addEventListener('click', function(){
                bomber_pjt_screen.classList.remove('opa-pj-screen-up');
                setTimeout(function(){
                  bomber_pjt_screen.remove();
                },800);
                lucio_icon_block.classList.remove('move-left');
                bomber_icon_block.classList.remove('move-right');
                setTimeout(function(){
                  any_icon_block.classList.remove('move-left')
                  wish_icon_block.classList.remove('move-right')
                },500);
              })
            },50);
          },1000)
        });

        //Click AnyTransfer icon
          let any_icon = document.getElementById('pjt-any');
          any_icon.addEventListener('click', function(){
            let lucio_icon_block = document.getElementById('Lucio-icon');
            let bomber_icon_block = document.getElementById('BomberMeuh-icon');
            let any_icon_block = document.getElementById('AnyTransfer-icon');
            let wish_icon_block = document.getElementById('eWishCard-icon');
            lucio_icon_block.classList.add('move-left');
            bomber_icon_block.classList.add('move-right');
            setTimeout(function(){
              any_icon_block.classList.add('move-left')
              wish_icon_block.classList.add('move-right')
            },500);
            setTimeout(function(){
              let any_pjt_screen = document.createElement('div');
              any_pjt_screen.classList.add('any-pjt-screen');
              any_pjt_screen.classList.add('ablst');
              any_pjt_screen.classList.add('h-100');
              any_pjt_screen.classList.add('z-iup');
              any_pjt_screen.classList.add('w-100');
              any_pjt_screen.innerHTML = '<div class="any-content rltv w-100 h-100">'
              + '<h3 class="fs-deux pol-un txt-pc fw-b">AnyTransfer</h3>'
              + '<iframe class="logo-desk frame-border" src="http://anytransfer.tk" width="45%" height="45%"></iframe>'
              + '<div class="logo-mobile logo-project-size">'
              + '<img src="asset/img/logo2.png" alt="AnyTransfer Logo">'
              + '</div>'
              + '<div class="project-describe txt-pc">'
              + '<p class="pall-15"><span class="fw-b">Project:</span> Php Files-Mail Sender!</p>'
              + '<ul class="list-pjt">'
              + '<li class="project-list">Build a page to upload and send files using mail</li>'
              + '<li class="project-list">Build a Zipping file script to compress the file send</li>'
              + '<li class="project-list">Build an Eraser file script to delete file until a limited time</li>'
              + '<li class="project-list">Create a Custom Mail which include a link to download the file</li>'
              + '<li class="project-list">Build a download-page</li>'
              + '</ul>'
              + '</div>'
              + '<div class="button-box flx-ac">'
              + '<a class="da-blk btn-pjt" target="_blank" href="http://anytransfer.tk">Open New Tab</a>'
              + '<p id="close-any" class="btn-pjt curs-p">Close</p>'
              + '</div>'
              + '</div>';
              any_pjt_screen.setAttribute('id', 'any-screen');
              project_screen.appendChild(any_pjt_screen);
              setTimeout(function(){
                any_pjt_screen.classList.add('opa-pj-screen-up');
                let close_any = document.getElementById('close-any');
                close_any.addEventListener('click', function(){
                  any_pjt_screen.classList.remove('opa-pj-screen-up');
                  setTimeout(function(){
                    any_pjt_screen.remove();
                  },800);
                  lucio_icon_block.classList.remove('move-left');
                  bomber_icon_block.classList.remove('move-right');
                  setTimeout(function(){
                    any_icon_block.classList.remove('move-left')
                    wish_icon_block.classList.remove('move-right')
                  },500);
                })
              },50);
            },1000)
          });


          //Click Wish icon
            let wish_icon = document.getElementById('pjt-wish');
            wish_icon.addEventListener('click', function(){
              let lucio_icon_block = document.getElementById('Lucio-icon');
              let bomber_icon_block = document.getElementById('BomberMeuh-icon');
              let any_icon_block = document.getElementById('AnyTransfer-icon');
              let wish_icon_block = document.getElementById('eWishCard-icon');
              lucio_icon_block.classList.add('move-left');
              bomber_icon_block.classList.add('move-right');
              setTimeout(function(){
                any_icon_block.classList.add('move-left')
                wish_icon_block.classList.add('move-right')
              },500);
              setTimeout(function(){
                let wish_pjt_screen = document.createElement('div');
                wish_pjt_screen.classList.add('wish-pjt-screen');
                wish_pjt_screen.classList.add('ablst');
                wish_pjt_screen.classList.add('h-100');
                wish_pjt_screen.classList.add('z-iup');
                wish_pjt_screen.classList.add('w-100');
                wish_pjt_screen.innerHTML = '<div class="wish-content rltv w-100 h-100">'
                + '<h3 class="pol-un fw-b txt-pc fs-deux">eWishCard</h3>'
                + '<iframe class="logo-desk frame-border" src="https://ewish-card.victorbarlier.fr" width="45%" height="45%"></iframe>'
                + '<div class="logo-mobile logo-project-size">'
                + '<img src="asset/img/wish-mobile.png" alt="eWishCard Logo">'
                + '</div>'
                + '<div class="project-describe txt-pc">'
                + '<p class="pall-15"><span class="fw-b">Project:</span> Animate svg card send with Custom phpMail</p>'
                + '<ul class="list-pjt">'
                + '<li class="project-list">Create SVG with Software (Illustrator/Affinity Designer)</li>'
                + '<li class="project-list">Cleaning SVG Files to Web</li>'
                + '<li class="project-list">Animate SVG with CSS class to build an animated wish card</li>'
                + '<li class="project-list">Build a form to give the possibility to everyone to send your wish card</li>'
                + '<li class="project-list">Send Custom HTML Mail which include a link to open your card</li>'
                + '</ul>'
                + '</div>'
                + '<div class="button-box flx-ac">'
                + '<a class="da-blk btn-pjt" target="_blank" href="https://ewish-card.victorbarlier.fr">Open New Tab</a>'
                + '<p id="close-wish" class="btn-pjt curs-p">Close</p>'
                + '</div>';
                + '</div>';
                wish_pjt_screen.setAttribute('id', 'wish-screen');
                project_screen.appendChild(wish_pjt_screen);
                setTimeout(function(){
                  wish_pjt_screen.classList.add('opa-pj-screen-up');
                  let close_wish = document.getElementById('close-wish');
                  close_wish.addEventListener('click', function(){
                    wish_pjt_screen.classList.remove('opa-pj-screen-up');
                    setTimeout(function(){
                      wish_pjt_screen.remove();
                    },800);
                    lucio_icon_block.classList.remove('move-left');
                    bomber_icon_block.classList.remove('move-right');
                    setTimeout(function(){
                      any_icon_block.classList.remove('move-left')
                      wish_icon_block.classList.remove('move-right')
                    },500);
                  })
                },50);
              },1000)
            });



  });
});

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
          + '<h3 class="fs-deux">Lucio Pizzeria</h3>'
          + '<iframe src="http://victor.barlier.free.fr/lucio/" width="50%" height="50%"></iframe>'
          + '<p>Building a complete project from wireframe to website.</p>'
          + '<div class="button-box flx-ac">'
          + '<a class="da-blk btn-pjt" target="_blank" href="http://victor.barlier.free.fr/lucio/">Open New Tab</a>'
          + '<p id="close-lucio" class="btn-pjt curs-p">Close</p>'
          + '</div>';
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
            + '<h3 class="fs-deux">BomberMeuh</h3>'
            + '<iframe src="http://victor.barlier.free.fr/lucio/" width="50%" height="50%"></iframe>'
            + '<p>Create a Vanilla JS retro game only with DOM elements</p>'
            + '<div class="button-box flx-ac">'
            + '<a class="da-blk btn-pjt" target="_blank" href="http://victor.barlier.free.fr/lucio/">Open New Tab</a>'
            + '<p id="close-bomber" class="btn-pjt curs-p">Close</p>'
            + '</div>';
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
              + '<h3 class="fs-deux">AnyTransfer</h3>'
              + '<iframe src="http://victor.barlier.free.fr/lucio/" width="50%" height="50%"></iframe>'
              + '<p>Send Any File to Anyone</p>'
              + '<div class="button-box flx-ac">'
              + '<a class="da-blk btn-pjt" target="_blank" href="http://victor.barlier.free.fr/lucio/">Open New Tab</a>'
              + '<p id="close-any" class="btn-pjt curs-p">Close</p>'
              + '</div>';
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


          //Click AnyTransfer icon
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
                + '<h3 class="fs-deux">eWishCard</h3>'
                + '<iframe src="http://victor.barlier.free.fr/lucio/" width="50%" height="50%"></iframe>'
                + '<p>Send Beautifull and Personal eCard by Mail!</p>'
                + '<div class="button-box flx-ac">'
                + '<a class="da-blk btn-pjt" target="_blank" href="http://victor.barlier.free.fr/lucio/">Open New Tab</a>'
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

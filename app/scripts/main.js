$(document).ready(() => {
  // var isExpanded = false;

  $('#navbar .nav-item').on('click', function() {
    var parent = $(this).closest(' #navbar');
    parent.find('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // $('#navbar .c-search__input').on('focus', function() {
  //   if (!isExpanded) {
  //     var parent = $(this).closest('.c-search__wrapper');
  //     parent.addClass('focus');
  //   }
  // });

  $('#navbar .c-search__input').on('focusout', function() {
    var parent = $(this).closest('.c-search__wrapper');
    parent.removeClass('focus');
  });

  $('#js-btn-toggle').on('click', function() {
    $('#navbarCollapse').toggleClass('active');
    $('.c-menu__close').click(function() {
      $('#navbarCollapse').removeClass('active');
    });
  });

  $('.c-search__append button').click(function(ev) {

    // BLOCK SEARCH TO GO TO ANOTHER PAGE
    //IN MOBILE
    // let w = $(window).width();
    // if(w < 992) {
    //   ev.preventDefault();
    // }

    // isExpanded = true;
    $(this).closest('body').toggleClass('is-expanded');
    $('.c-search--toggle').find('span').toggleClass('icon-close icon-search ');
    // $('#navbar .c-search__input').focus();
  });

    
    $('.c-search--toggle').on('click', function(){
        $(this).find('span').toggleClass('icon-search icon-close');
        $('body').toggleClass('is-expanded');
        $('#navbar .c-search__input').focus();
    });

    // ACTIVE BG NAVBAR
    
    $(window).on({
      'load': navbarBg,
      'scroll': navbarBg
    }, '');

    function navbarBg() {
      const navBar = $('#navbar');
      const alertScroll=$('.alert-has-scroll');
      if ($(this).scrollTop() > navBar.height()) { 
        navBar.addClass('with-background');
        alertScroll.fadeOut();
      } else {
        alertScroll.fadeIn();
        navBar.removeClass('with-background');
      }
    }


});


// HAMMERJS
var w = window.innerWidth;

if (w <= 992) {
    // console.log(w);
    var myElement = document.getElementById('navbarCollapse'),
    myMenu = $('#navbarCollapse');
    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on('panleft panright tap press', function(ev) {
        if (ev.type == 'panleft') {
            //console.log('LEFT');
            myMenu.removeClass('active');
        }
    });
} 

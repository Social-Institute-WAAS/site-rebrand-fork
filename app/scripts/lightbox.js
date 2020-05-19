window.onload = function() {
  baguetteBox.run('.js-gallery--news', {
    animation: 'fadeIn',
    noScrollbars: true,
    bodyClass: 'baguetteBox-open',
    titleTag: false,
    async: false,
    preload: 2,
    animation: 'slideIn',
    buttons: 'auto',
    verlayBackgroundColor: 'rgba(0,0,0,.8)',
    captions: function(element) {
      console.log('TESTE');
      return element.getElementsByTagName('img')[0].alt;
    }
  });
};


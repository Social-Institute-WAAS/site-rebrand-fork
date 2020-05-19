try {
  var glide = new Glide('.glide-default', {
    type: 'carousel',
    autoplay: 4000,
    perView: 3,
    focusAt: 'center',
    animationTimingFunc: 'ease',
    animationDuration: 800,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  });
  glide.mount();
} catch(err) {
  err
}
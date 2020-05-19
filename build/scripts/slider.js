var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

  try {
    let currentSlide = slides[slideIndex-1];
    let currentTitleEl = currentSlide.querySelector('.c-card__title');
    let currentTitleText = currentTitleEl.textContent;
    currentSlide.style.display = 'flex';
    // slides[slideIndex-1].classList.add('in');
    dots[slideIndex-1].classList.add('active');
  typeWriter(currentTitleEl, currentTitleText, 0);
  } catch(err) {
    err
  }

}

setInterval(() => plusSlides(1), 15000); // Change image every 15 seconds


// TYPEWRITER

function typeWriter(currentTitle, text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < (text.length)) {
    // add next character to h1
   currentTitle.innerHTML = text.substring(0, i+1) +'<span class="typer" aria-hidden="true"></span>';

    // wait for a while and call this function again for next character
    setTimeout(function() {
      typeWriter(currentTitle, text, i + 1, fnCallback)
    }, 100);
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback == 'function') {
    // call callback after timeout
    setTimeout(fnCallback, 700);
  }
}
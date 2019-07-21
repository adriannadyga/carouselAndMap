'use strict'

//mustache
var templateCarousel = document.getElementById('carousel-template').innerHTML;
var carousel = document.querySelector('.main-carousel');
var carouselElements = '';

for (var i = 0; i < carouselData.length; i++){
  carouselElements += Mustache.render(templateCarousel, carouselData[i]);
}

carousel.innerHTML = carouselElements;

//flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true
});

//button restart
var restartButton = document.querySelector('.btnRestart');

restartButton.addEventListener( 'click', function() {
  flkty.select(0);
});

//progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });
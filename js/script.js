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
var carousel = document.querySelector('.main-carousel');
var flkty = new Flickity(carousel, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true
});

// Initialize and add the map
window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: carouselData[0].coords
    });
    for (var i = 0; i < carouselData.length; i++){
        var marker = new google.maps.Marker({
        position: carouselData[i].coords,
        map: map
        }); 
    }
}

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

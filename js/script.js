'use strict'
//flickity
var carousel = document.querySelector('.main-carousel');
var flkty = new Flickity(carousel, {
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

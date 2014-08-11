/* global $, document */
(function(){
  'use strict';

  var a = 3,
      b = 2;
  $(document).ready(initialize);

  function initialize(){
    console.log('the DOM is now ready');
    $('div').css('color', 'red');
    $('h2').css('font-size', '50px');
    $('h2').text('Kayla');
    $('h2').fadeOut(1500);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color-value').click(whatColor);
    $('#fadeIn').click(fadeIn);
    $('#fadeOut').click(fadeOut);

  }
  function fadeIn(){
    var speed = $('#mms').val();
    speed = parseInt(speed);
    $('footer').fadeIn(speed);
  }
  function fadeOut(){
    var speed = $('#mms').val();
    speed = parseInt(speed);
    $('footer').fadeOut(speed);
  }
  function makeRed(){
    $('body').css('background-color', 'red');
  }
  function makeYellow(){
    $('body').css('background-color', 'gold');
  }
  function whatColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    console.log('you clicked the color button');
  }
  console.log('the DOM is not ready');
  console.log(a, b);
})();


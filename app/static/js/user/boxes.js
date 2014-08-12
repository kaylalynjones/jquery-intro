/* global $, document */
(function(){
  'use strict';
  $(document).ready(function(){
    $('#add-boxes').click(addBoxes);

  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        i,
        $box,
        val,
        klass;

    $('#boxes').empty();
    for(i = 0; i < num; i++){
      $box = $('<div>');

      val = (i % 2) ? i * i * i : i * i;
      klass = (i % 2) ? 'odd' : 'even';

      $box.text(val);
      $box.addClass('box').addClass(klass);
      $('#boxes').append($box);
    }
    $('.box').click(function(){
      $(this).rotate({angle: 45});
      $(this).css('background-color', '#' + Math.floor(Math.random() * 16777215).toString(16));
    });

  }
})();

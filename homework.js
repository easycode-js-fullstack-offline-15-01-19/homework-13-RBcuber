// -------------------------- Home work --------------------------
// -------------------------- Кириченко Игорь --------------------------
;(function ($) {    
    $('.dropdown-menu li').hover(function () {
      $('ul',this).slideDown();
      $(this).css('background', '#9a59b5');
    }, function () { 
      $('ul',this).slideUp(); 
      $(this).css('background', 'transparent');  
    }); 
}(jQuery));
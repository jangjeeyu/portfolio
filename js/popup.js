$(document).ready(function(){
    $('#pop_up .close').click(function(){
      $('#pop_up').fadeOut(200)
    });
    $('article button').click(function(){
      $('#pop_up').fadeIn(200);
    })
})
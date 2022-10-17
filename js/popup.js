$(function(){
  $('#pop_up .close').click(function(){
    $('#pop_up').fadeOut(600)
  });
  $('#modal1').click(function(){
    $('.pop_up1').fadeIn(600);
  })

  $('.panel_images a').each(function(){
    $(this).click(function(){
      var href = $(this).attr('href');
      $('.pop').hide(); //열린 것을 전부 다 닫고 다시 열리게 하기 위함. 이게 없으면 계속 겹쳐져서 뜨고, 열린 상태이기 때문에 클릭시 창이 바뀐것으로 보이지 않음.
      $(href) .show();
      // #popup1 .show();
      // $('#popup1').show()
      //지정되어 있는 태그(단어)에는 $ 붙이면 안됨
      $('.modal_select a').removeClass('on');
      $(this).addClass('on');
    }) //this
  }) //modal
  $('.pop .close').click(function(){
    $('.pop').fadeOut(300);
    $('.panel_images a').removeClass('on');
  })
})//end
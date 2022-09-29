$(document).ready(function(){
    $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a');
        var this_panel = $(this).find('.panel');

        var anchor_on = $(this).find('.tabs a.on'); //초기 상태에 필요함
        var href_on = anchor_on.attr('href');
        $(href_on).show();

        /*var href = anchor.attr('href'); //#panel1-1 ==> href.show()*/
        anchor.each(function(){ // 생략시 $(this).click의 이름을 수정
            var href = anchor .attr('href');

            $(this).click(function(){
                href = $(this) .attr('href');
                anchor.removeClass('on');
                $(this).addClass('on');
                this_panel.hide();
                $(href).show();
            }) //click
        }) //anchor 
    })  //tabSet
}) //end

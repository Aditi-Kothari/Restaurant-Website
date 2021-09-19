$(document).ready(function(){

    $("#menu").click(function(){
      $(this).toggleClass("fa-times");
      $("header").toggleClass('toggle');
      $(".top").toggle();
    });

    $(window).on('scroll load',function(){
        $("#menu").removeClass("fa-times");
        $("header").removeClass('toggle');

        if($(window).scrollTop() >0){
          $('.top').show();
        }else{
          $('.top').hide();
        }

    });
    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'All'){
          $('.image').show(400);
        }else{
          $('.image').not('.'+filter).hide(200);
          $('.image').filter('.'+filter).show(400);
        }
    });
});
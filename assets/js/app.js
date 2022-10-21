
$('.imagineBlock img').on('click', function () {
    $(this).parents('.imagineBlock').addClass('squeeze')
    $(this).parent().siblings().addClass('squeeze_thumb')
    // $('.imagineBlock .textOverlay').fadeOut(500);

    $(this).siblings('video').fadeIn(1000);
    $(this).siblings('.closeButton').fadeIn(1000);
})



$('.imagineBlock .thumb_column .closeButton').on('click', function () { 
    $(this).fadeOut(1000);
    $(this).siblings('video').fadeOut(1000);
    $('.imagineBlock .thumb_column').removeClass('squeeze_thumb')
    $('.imagineBlock').removeClass('squeeze')
    
    $(this).siblings('video')[0].pause()   
    $(this).siblings('video')[0].currentTime = 0   
    // $('.imagineBlock .textOverlay').delay(300).fadeIn(300)
})
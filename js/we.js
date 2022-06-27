// console.log(
//     $('.ambient>ul>li:first')
// )
$('.ambient>ul>li:first').find('a').addClass('p')
$('.ambient>ul>li:first').find('.wrap').css({display:'block'});
$('.ambient>ul>li:first').find('.p1').css({display:'block'});

$('.ambient>ul>li').click(function(){
    $(this).siblings("li").find('a').removeClass('p')
    $(this).find('a').addClass('p')
    $(this).siblings("li").find('.wrap').css({display:"none"});
    $(this).siblings("li").find('.p1').css({display:"none"});

    $(this).find('.wrap').css({display:'block'})
    $(this).find('.p1').css({display:'block'})
})
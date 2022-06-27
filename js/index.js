// 专区1
var li = $('.Service>ul>li');
li.mouseover(function(){
        // animate
       var run = {width:'2.3rem',height:'2.3rem',};
//        var run2 = {marginTop:'5%'};
       var time = $.speed(500)
       $(this).animate(run,time) 
//        $('#arrondi2').animate(run2,time) 
})

li.mouseout(function(){
    // animate
   var run = {width:'2rem',height:'2rem'};
//        var run2 = {marginTop:'5%'};
   var time = $.speed(500)
   $(this).animate(run,time) 
//        $('#arrondi2').animate(run2,time) 
})
// $('.uav1').click(function(){
//    console.log( $(".Img1").aria-label)
// })

// console.log($('.header-center>ul>li:first>p'))
// $('.header-center>ul>li:first>p').toggleClass('active');
// $('.header-center>ul>li').click(function(){
//     $(this).siblings("li").find('p').toggleClass('active');
//     $(this).find('p').toggleClass('active')
// })
var n = 0;
// $('Img').each((i)=>{
//     console.log(i)
// })
$('.banner-li>ul>li').click(function(){
    // var id = $('.Img').index();
    $(this).siblings('li').removeClass('active1')
    $(this).addClass('active1')
})

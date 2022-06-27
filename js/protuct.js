// 产品
$('.cp-t>li:first').find('.a').removeClass('active')

$('.cp-t>li').click(function(){
        $(this).siblings("li").find('.a').addClass('active')
        $(this).find('.a').removeClass('active')
})

// 专区1
// setInterval
// var li = $('.arrondi>ul>li');
// li.mouseover(function(){
//         // animate
//        var run = {width:'110%',height:'2.2rem'};
// //        var run2 = {marginTop:'5%'};
//        var time = $.speed(300)
//        $(this).find('p').eq(0).animate(run,time) 
// //        $('#arrondi2').animate(run2,time) 
// })

// li.mouseover(function(){
//         // animate
//        var run = {width:'100%',height:'2rem'};
// //        var run2 = {marginTop:'0%'};
//        var time = $.speed(300)
//        $(this).find('p').eq(0).animate(run,time) 
// //        $('#arrondi2').animate(run2,time) 
// })



























// function run(){
//         li.show('slow')
//         .animate({width:'27%',height:'3rem'},2000)
// }
// li.mouseover(function(){
//         console.log(111)
//         run()
//         // $(this).css({width:'27%',height:'2.7rem'})
// })
// li.mouseout(function(){
//         li.show('slow')

//         .animate({width:'27%',height:'3rem'},2000)

// })

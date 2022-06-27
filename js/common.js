// 如果屏幕尺寸为 1034时 时间#zzsc 隐藏
// alert($(window).width())
var aa = parseInt(1017)
console.log($(window).width()==aa)
$(window).resize(function(){
    console.log('11')
if($(this).width()<=aa){
    $('#canvas').css({display:'none'})
}else if($(this).width()>aa){
        console.log(44)
    $('#canvas').css({display:'block'})

    }
})

function goTop()
{
    $(window).scroll(function(e) {
        //若滚动条离顶部大于20元素
        if($(window).scrollTop()>20)
            $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
        else
            $("#gotop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
    });
};
$(function(){
    //点击回到顶部的元素
    $("#gotop").click(function(e) {
            //以1秒的间隔返回顶部
            $('body,html').animate({scrollTop:0},1000);
    });
    $("#gotop").mouseover(function(e) {
        $(this).css("background","url(/images/backtop.png) no-repeat 0px 0px");
    });
    $("#gotop").mouseout(function(e) {
        $(this).css("background","url(/images/backtop.png) no-repeat -70px 0px");
    });
    goTop();//实现回到顶部元素的渐显与渐隐
});

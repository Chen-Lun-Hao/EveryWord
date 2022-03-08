$(function() {
    var $li = $("#c-ul > li");
    var screenWidth = $(window).width(); //屏幕的宽度
    var index = 0;
    var oneWidth = 0; //移动的宽度 
    var scrollSum = 0; //卷进去的总宽度
    var liSum = 0; //li总长度

    $("#right").click(function() {
        $("#left").show();
        index = index - 1;
        oneWidth = oneWidth + $li.eq(index).width();
        $("#c-ul").stop(true, false).animate({
            "margin-left": oneWidth
        }, 500);
        scrollSum = scrollSum - $li.eq(index).width();
        if (index <= 0) {
            $("#right").hide();
            return false;
        }
    })
    for (var i = 0; i < $li.length; i++) {
        liSum = $li.eq(i).width() + 2 + liSum;
    }
    $("#left").click(function() {

        $("#right").show();
        oneWidth = oneWidth - $li.eq(index).width();
        $("#c-ul").stop(true, false).animate({
            "margin-left": oneWidth
        }, 500);
        scrollSum = scrollSum + $li.eq(index).width();
        index = index + 1;
        if (liSum - scrollSum < screenWidth - 170) {
            $("#left").hide();
            return false;
        }
    })
    $("li").each(function() {
        $(this).mouseover(function() {
            $(this).find(".dropdown").stop(true, false).slideDown()
        })
        $(this).mouseout(function() {
            $(this).find(".dropdown").stop(true, false).slideUp()
        })
    })
})
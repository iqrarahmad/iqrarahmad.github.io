$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        $('li').each(function () {
            $(this).removeClass('active');
        })
        $(this).parent().addClass('active');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#main-navbar li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.children().attr("href"));
        if (refElement.position().top - 60<= scrollPos  && refElement.position().top + refElement.height() > scrollPos) {
            $('#main-navbar ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
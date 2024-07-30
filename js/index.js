$(function(){
    $(window).scroll(function(){
        $('header .headermenu').css({
            'background-color' : 'rgba(0, 0, 0, 0.8)'
        })
        if($(window).scrollTop() == '0'){
            $('header .headermenu').css({
                'background-color' : 'inherit'
            })
        }
    })
})
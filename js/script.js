$(function() {
    $(".slide-btn").click(function() {
        $('body').addClass('mybody');

    })

    $(".fa-times").click(function() {
        $('body').removeClass('mybody');

    })

    $(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $('.slide-navi').addClass('scroll');
        } else {
            $('.slide-navi').removeClass('scroll');
        }
    });
})



function menu_open() {
    document.getElementById("navi").style.display = "block";
    document.getElementById("close-menu").style.display = "block";
    document.getElementById("open-menu").style.display = "none";

}

function menu_close() {
    document.getElementById("navi").style.display = "none";
    document.getElementById("open-menu").style.display = "block";
    document.getElementById("close-menu").style.display = "none";


}

function slide_open() {
    document.getElementById("slide-navi").style.right = "17px";
    document.getElementById("slide-navi").style.position = "fixed";
}

function slide_close() {
    document.getElementById("slide-navi").style.right = "-350px";
}
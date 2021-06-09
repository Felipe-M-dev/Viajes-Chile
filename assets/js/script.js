$(document).ready(function () {

    var scrollLink = $('.scroll');

    /**Smooth Scroll**/
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1300);
    });

    /**Navbar Section highlight title by scroll**/
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 250;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

    });

    /**Change Navbar color**/
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    /**Tooltip Event**/
    $('[data-toggle="tooltip"]').tooltip()

    /**Featured Section Toggle Events**/
    $(".text-toggle-1").hide();
    $("#button-toggle-1").click(function () {
        var elem = $("#button-toggle-1").text();
        if (elem == "Ver más") {
            $("#button-toggle-1").text("Mostrar menos");
            $(".text-toggle-1").slideDown();
        } else {
            $("#button-toggle-1").text("Ver más");
            $(".text-toggle-1").slideUp();
        }
    });

    $(".text-toggle-2").hide();
    $("#button-toggle-2").click(function () {
        var elem = $("#button-toggle-2").text();
        if (elem == "Ver más") {
            $("#button-toggle-2").text("Mostrar menos");
            $(".text-toggle-2").slideDown();
        } else {
            $("#button-toggle-2").text("Ver más");
            $(".text-toggle-2").slideUp();
        }
    });

    $(".text-toggle-3").hide();
    $("#button-toggle-3").click(function () {
        var elem = $("#button-toggle-3").text();
        if (elem == "Ver más") {
            $("#button-toggle-3").text("Mostrar menos");
            $(".text-toggle-3").slideDown();
        } else {
            $("#button-toggle-3").text("Ver más");
            $(".text-toggle-3").slideUp();
        }
    });

    $(".text-toggle-4").hide();
    $("#button-toggle-4").click(function () {
        var elem = $("#button-toggle-4").text();
        if (elem == "Ver más") {
            $("#button-toggle-4").text("Mostrar menos");
            $(".text-toggle-4").slideDown();
        } else {
            $("#button-toggle-4").text("Ver más");
            $(".text-toggle-4").slideUp();
        }
    });

    /**Change opacity style and show up by scroll**/

    let ani_box = document.querySelectorAll(".ani_box");

    function showScroll() {
        let scrollTop =
            document.documentElement.scrollTop;
        for (var i = 0; i < ani_box.length; i++) {
            let height_animate = ani_box[i].offsetTop;
            if (height_animate - 400 < scrollTop) {
                ani_box[i].style.opacity = 1;
                ani_box[i].classList.add("show_up");
            }
        }
    }

    window.addEventListener('scroll', showScroll);

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
});
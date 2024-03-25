if ($(window).width() > 824) {
    AOS.init();
}

var currentTab = 0;

function showTab(t) {
    var e = document.getElementsByClassName("tab");
    (e[t].style.display = "block"),
        0 == t
            ? ((document.getElementById("prevBtn").style.display = "none"),
              (document.getElementById("signupBtn2").style.display = "none"),
              (document.getElementById("nextBtn").style.display = "inline"))
            : (document.getElementById("prevBtn").style.display = "inline"),
        t == e.length - 1
            ? ((document.getElementById("nextBtn").style.display = "none"),
              (document.getElementById("signupBtn2").style.display = "inline"))
            : (document.getElementById("nextBtn").innerHTML = "Next");
}

function nextPrev(t) {
    var e = document.getElementsByClassName("tab");
    if (1 == t && !validateForm()) return !1;
    (e[currentTab].style.display = "none"), showTab((currentTab += t));
}

function validateForm() {
    var t,
        e,
        a = !0;
    for (
        t = document
            .getElementsByClassName("tab")
            [currentTab].getElementsByTagName("input"),
            e = 0;
        e < t.length;
        e++
    )
        "" == t[e].value && ((t[e].className += " invalid"), (a = !1));
    return a;
}

$(document).ready(function () {
    $(".services-slider").owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-circle-left"></i>',
            '<i class="fas fa-arrow-circle-right"></i>',
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 1,
            },
            991: {
                items: 3,
            },
        },
    });
});

$(document).ready(function () {
    $(".testimonials").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            991: {
                items: 1,
            },
        },
    });

    $(".package_box .slider-pp")
        .not(".slick-initialized")
        .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            centerPadding: "0px",
            responsive: [
                {
                    breakpoint: 999,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

    $(".slides_ser").not(".slick-initialized").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "200px",
        asNavFor: ".sliders_services",
        arrows: false,
        centerMode: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        focusOnSelect: true,
    });

    $(".sliders_services").not(".slick-initialized").slick({
        centerMode: true,
        centerPadding: "180px",
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        asNavFor: ".slides_ser",
    });
    $(".packages_responsive_slider").not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 999,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    
});

$(document).ready(function () {
    $(".client-slider").owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-circle-left"></i>',
            '<i class="fas fa-arrow-circle-right"></i>',
        ],
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            991: {
                items: 1,
            },
        },
    });
});

$(".package_slider").owlCarousel({
    loop: !1,
    margin: 15,
    dots: !1,
    nav: !0,
    navText: [
        '<i class="fas fa-arrow-circle-left"></i>',
        '<i class="fas fa-arrow-circle-right"></i>',
    ],
    center: !1,
    autoplay: !1,
    autoplaySpeed: 2e3,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    },
});


if($(window).width() <= 991){
    
};

// responsive slider
if ($(window).width() <= 991) {
    $(".pricing_box .col-lg-4 .pricing_bx").addClass("active");

    $(".responsiveslider").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
    });

    $(".slides_ser").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px",
        asNavFor: ".sliders_services",
        arrows: false,
        centerMode: false,
        autoplay: true,
        vertical: false,
        verticalSwiping: false,
        adaptiveHeight: true,
        focusOnSelect: true,
    });
    $(".sliders_services").not(".slick-initialized").slick({
        centerMode: false,
        centerPadding: "0",
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        verticalSwiping: true,
        adaptiveHeight: true,
        asNavFor: ".slides_ser",
    });

    if (".responsive-slider1".length != 0) {
        $(".responsive-slider1").addClass("owl-carousel owl-theme");
        $(".responsive-slider1").owlCarousel({
            loop: false,
            margin: 0,
            rewind: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
            },
        });
    }
}

// slim-scroll initialization
$(".package-box ul").slimScroll({ height: "400px", color: "#f33f01" }),
    0 != $(".scroll").length &&
        $(".scroll").slimScroll({
            height: "200px",
            size: "6px",
            color: "#f33f01",
            alwaysVisible: !0,
            distance: "16px",
            railVisible: !0,
            railColor: " #f33f01",
            railOpacity: 1,
            railBorderRadius: "0px",
            wheelStep: 10,
            disableFadeOut: !1,
        });

// hide package word query

$(".main-hdg").each(function () {
    var text = $(this).text();
    $(this).html(text.replace("Package", ""));
});

function loopIt() {
    $("#topboxesmenu span").each(function (s) {
        var e = $(this);
        setTimeout(function () {
            e.addClass("current"),
                setTimeout(function () {
                    e.removeClass("current"),
                        s == $("#topboxesmenu span").length - 1 && loopIt();
                }, 1e3);
        }, 1100 * s);
    });
}
loopIt();

$(".portfolio1").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 5000,
    mouseDrag: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 2,
        },
        375: {
            items: 2,
        },
        481: {
            items: 3,
        },
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        992: {
            items: 5,
        },
        1200: {
            items: 5,
        },
        1366: {
            items: 6,
        },
        1600: {
            items: 8,
        },
    },
});

var owl = $(".portfolio2");
owl.owlCarousel({
    loop: true,
    items: 8,
    rtl: true,
    nav: false,
    margin: 15,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 2,
        },
        375: {
            items: 2,
        },
        481: {
            items: 3,
        },
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        992: {
            items: 5,
        },
        1200: {
            items: 5,
        },
        1366: {
            items: 6,
        },
        1600: {
            items: 8,
        },
    },
});

$(".get-brand-sec").on({
    mousemove: function (e) {
        e.stopPropagation(), e.preventDefault();
        let s = 0.05 * -e.clientX,
            a = 0.05 * -e.clientY;
        $(".banner-right-images-wrapper img").css(
            "transform",
            `translate(${s}px,${a}px)`
        ),
            $(".banner-right-images-wrapper img").css(
                "transform",
                ` translate(${-s}px,${-a}px)`
            ),
            $(".banner-right-images-wrapper img").css(
                "transform",
                `translate(${s}px,${a}px)`
            );
    },
    mouseleave: function () {
        $(".banner-right-images-wrapper img").css(
            "transform",
            "translate(0,0)"
        ),
            $(".banner-right-images-wrapper img").css(
                "transform",
                "translate(0,0)"
            ),
            $(".banner-right-images-wrapper img").css(
                "transform",
                "translate(0,0)"
            ),
            $(".cta-right-wrapper-images img").css(
                "transform",
                "translate(0,0)"
            );
    },
});

jQuery(document).ready(function () {
    if (document.querySelector(".hero-photos")) {
        document.querySelector(".hero-photos").removeAttribute("hidden");
        var i = 0;
        jQuery(".hero-marquee").last().addClass("last");
        jQuery(".hero-marquee").each(function () {
            var $this = jQuery(this);
            $this.css("top", i);
            i += $this.height();
            doScroll($this);
        });
    }
});

function doScroll($ele) {
    var top = parseInt($ele.css("top"));
    if (top < -200) {
        //bit arbitrary!
        var $lastEle = jQuery(".last");
        $lastEle.removeClass("last");
        $ele.addClass("last");
        var top = parseInt($lastEle.css("top")) + $lastEle.height();
        $ele.css("top", top);
    }

    $ele.animate({ top: parseInt(top) - 60 }, 2000, "linear", function () {
        doScroll(jQuery(this));
    });
}

$(".pkg_list ul").slimScroll({
    height: "230px",
    color: "#ffb900",
});




$(".combo-slider").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
});

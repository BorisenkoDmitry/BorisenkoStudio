$(document).ready(function() {
    if ($(window).width() > 1356) {
        $(".btn-nav-menu").click(function() {
            $(this).toggleClass("active");
            let texts = $(".right-sub .nav-menu__li span");
            if ($(this).hasClass("active")) {
                gsap.to(texts , 0.5, {
                    opacity: 1,
                    transform: "scale(1)",
                    ease: "elastic.out(1, 0.3)"
                });
            } else {
                gsap.to(texts , 1, {
                    opacity: 0,
                    transform: "scale(0.1)",
                    ease: "elastic.out(1, 0.3)"
                });

            }     
        });

        let d = 0;
        let circleback = "#7EDDF8";
        let circleback2 = "#fff";
        $(".right-sub .nav-menu__li").hover(function() {
            if ($(".btn-nav-menu").hasClass("active")) {
                circleback = "#9C52F2";
                    circleback2 = "#F208FD";
                    $(this).find("span").css({
                        "transition" : "0.3s ease-in-out",
                        "transform" : "scale(1.2) rotate(10deg)"
                    });
                    $(this).find("span").addClass("box-shadow");
                    
            }
        }, function() {
            if ($(".btn-nav-menu").hasClass("active")) {
                circleback = "#7EDDF8";
                circleback2 = "#fff";
                $(this).find("span").css({
                    "transition" : "",
                    "transform" : "scale(1) rotate(0deg)"
                });
                $(this).find("span").removeClass("box-shadow");
                
        }
        });


        $(".nav-menu__li").css({
            "background" : "radial-gradient(74.15% 59.52% at 69.95% 26.86%, " + circleback2 + " 21.87%, " + circleback + " 74.97%)"
        });

        $(".home").css({
            "background" : "linear-gradient(269.84deg, #00DBDE 1.07%, #FC00FF 100.74%)"
        });
        $("body").mousemove(function(e) {
            let x = e.pageX*0.012;
            let y = e.pageY*0.012;
            let tt = "radial-gradient(74.15% 59.52% at " + (x*3.5) + "% "+ y*10 + "%, " + circleback2 + " 21.87%," + circleback + " 74.97%)";
            let bb = "linear-gradient("+ (269.84+x*5) +"deg, #00DBDE 1.07%, #FC00FF 100.74%)";
            let el = $(".left-sub__h1");
            let el2 = $(".left-sub p");
            let fullCircles = $(".back-circles .full-circle");
            let emptyCircles = $(".back-circles .empty-circle");
            let rightSubCircle1 = $(".nav-menu__li:nth-child(1)");
            let rightSubAllcircles = $(".nav-menu__li");
            gsap.to(rightSubCircle1, 4, {
                translateX: x*2,
                translateY: 50+(y*2)
            });
            gsap.to(rightSubAllcircles, 5, {
                background: tt
            });
            gsap.to($(".home"), 5, {
                background: bb
            });
            gsap.to($(".nav-menu__li:nth-child(5)"), 4, {
                translateX: x*2-400,
                translateY: (y*2)-70
            });

            gsap.to($(".nav-menu__li:nth-child(4)"), 4, {
   
                translateX: x*12-200,
                translateY: (y*12)-500
            });

            gsap.to($(".nav-menu__li:nth-child(3)"), 3, {
                translateX: x*2+145,
                translateY: (y*2)+175
            });
            gsap.to($(".nav-menu__li:nth-child(2)"), 3, {
                translateX: -x*9-30,
                translateY: -(y*9)-150
            });
            // g7sap.to(rightSubAllcircles,3, {
            //     translateX: x*2,
            //     translateY: 50+(y*2)
            // });
            gsap.to(el , 10, {
                opacity: 1,
                translateY: y*2,
                translateX: x,
                ease: "elastic.out(1, 0.3)"
            });
            gsap.to(el2 , 10, {
                opacity: 1,
                translateY: y*2,
                translateX: -x,
                ease: "elastic.out(1, 0.3)"
            });

            gsap.to(fullCircles , 10, {
                opacity: 1,
                translateY: -x*3,
                translateX: y*5,
                ease: "elastic.out(1, 0.3)"
            });

            gsap.to(emptyCircles , 10, {
                opacity: 1,
                translateY: x,
                backgroundColor: 'rgb(255,255,255,' + x*0.02 + ')',
                translateX: -y,
                ease: "elastic.out(1, 0.3)"
            });
    
     
        });
    }
    

    let el = $(".left-sub__h1");
    let el22 = $(".left-sub p");

    gsap.to(el22 , 1.5, {
        opacity: 1,
        translateY: 0
    });
    gsap.to(el , 1.5, {
        opacity: 1,
        translateY: 0
    });
    
});


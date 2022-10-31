$("document").ready(function(){
        

    $('.lookbook .right').slick({
        asNavFor: '.lookbook .left .content-list'
    });
    $('.lookbook .left .content-list').slick({
        asNavFor: '.lookbook .right'
    });


    $(".main-slide-wrapper").slick({
        dir: true,
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500
    });

    $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
    let page = new fullpage(".fullpage", {
        anchors: ["header", "summer-collection", "forwomen", "formen", "NEW-FALL22LOOKBOOK", "Cosmeticsrecommendation", "video-footer"],
        navigation: true,
        navigationPosition: "left",
        slidesNavigation: true,
        onLeave: function(origin, destination, dirextion){
        // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
        // origin - 활성화된 구역
        // destination - 목적지 구역
        // dirextion - 마우스 휠 방향
        $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
    },
    afterLoad: function(origin,destination){
        if(destination.index == 0){
            $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
        }
        // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행
        if(destination.index == 1){
            $(".section").find('[data-aos]').addClass("aos-animate")
        }
        // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행
        },
    
    afterRender: AOS.init()
    })


    $(".menu-btn").click(function(){
        $(this).toggleClass("on")
        $(".nav").toggleClass("on")
    })
    $('.best-wrap').slick({
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 5,
        nextArrow: '<i class="fa solid fa-angle-right slick-next"></i>',
        prevArrow: '<i class="fa solid fa-angle-left slick-prev"></i>',
        responsive: [
        {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 3
        }
        }
        ]
    });

        



        
    $('.women-content-wrap').slick({
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 3,
        nextArrow: '<i class="fa solid fa-angle-right slick-next"></i>',
        prevArrow: '<i class="fa solid fa-angle-left slick-prev"></i>',
        responsive: [
        {
        breakpoint: 768,
        settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 3
        }
        }
        ]
    });



    $(".FORWOMEN-menu ul li").click(function(){
        let i = $(this).index();
        $(".men-content").removeClass("on").eq(i).addClass("on")
        $('.men-content-wrap').slick('setPosition');
    })



    
    $(".FORWOMEN-menu ul li:nth-child(1) a::after").addClass("on")

        $(".FORWOMEN-menu ul li").click(function(){
            i = $(this).index();
            $(".FORWOMEN-menu ul li").removeClass("on").eq(i).addClass("on")
            $(".women-content").removeClass("on").eq(i).addClass("on")
            $('.women-content-wrap').slick('setPosition');

        })

    // $(".FORWOMEN-menu ul li:nth-child(1)").click(function(){
    //     $(".shoes").addClass("on")
    //    
    // })
    // $(".FORWOMEN-menu ul li:not(:nth-child(1))").click(function(){
    //     $(".shoes").removeClass("on")
    // })
    // $(".FORWOMEN-menu ul li:nth-child(2)").click(function(){
    //     $(".bag").addClass("on")
    // })
    // $(".FORWOMEN-menu ul li:not(:nth-child(2))").click(function(){
    //     $(".bag").removeClass("on")
    // })
    // $(".FORWOMEN-menu ul li:nth-child(3)").click(function(){
    //     $(".acc").addClass("on")
    // })
    // $(".FORWOMEN-menu ul li:not(:nth-child(3))").click(function(){
    //     $(".acc").removeClass("on")
    // })
    // $(".FORWOMEN-menu ul li:nth-child(4)").click(function(){
    //     $(".sun").addClass("on")
    // })
    // $(".FORWOMEN-menu ul li:not(:nth-child(4))").click(function(){
    //     $(".sun").removeClass("on")
    // });





        $('.men-content-wrap').slick({
            centerMode: true,
            centerPadding: '1px',
            slidesToShow: 3,
            nextArrow: '<i class="fa solid fa-angle-right slick-next"></i>',
            prevArrow: '<i class="fa solid fa-angle-left slick-prev"></i>',
            responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '1px',
                slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '1px',
                slidesToShow: 3
                }
            }
            ]
        });
        $(".FORMEN-menu ul li").click(function(){
            let i = $(this).index();
            $(".men-content").removeClass("on").eq(i).addClass("on")
            $('.men-content-wrap').slick('setPosition');
            
        })

    
        $(".FORMEN-menu ul li:nth-child(1) a::after").addClass("on")

        $(".FORMEN-menu ul li").click(function(){
            i = $(this).index();
            $(".FORMEN-menu ul li").removeClass("on").eq(i).addClass("on")
            $(".men-content").removeClass("on").eq(i).addClass("on")
            $('.men-content-wrap').slick('setPosition');
        })



        // $(".FORMEN-menu ul li:nth-child(1)").click(function(){
        //     $(".shoes").addClass("on")
        // })
        // $(".FORMEN-menu ul li:not(:nth-child(1))").click(function(){
        //     $(".shoes").removeClass("on")
        // })
        // $(".FORMEN-menu ul li:nth-child(2)").click(function(){
        //     $(".bag").addClass("on")
        // })
        // $(".FORMEN-menu ul li:not(:nth-child(2))").click(function(){
        //     $(".bag").removeClass("on")
        // })
        // $(".FORMEN-menu ul li:nth-child(3)").click(function(){
        //     $(".belts").addClass("on")
        // })
        // $(".FORMEN-menu ul li:not(:nth-child(3))").click(function(){
        //     $(".belts").removeClass("on")
        // })
        // $(".FORMEN-menu ul li:nth-child(4)").click(function(){
        //     $(".sun").addClass("on")
        // })
        // $(".FORMEN-menu ul li:not(:nth-child(4))").click(function(){
        //     $(".sun").removeClass("on")
        // });
        


        
            $('.lookbook-left-slide-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                draggable: true,
                // fade: true,
                infinity: true,
                // asNavFor: '.lookbook-content-wrap.two'
            });
            $('.lookbook-content-wrap.two').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.lookbook-content-wrap.one',
                // centerMode: true,
                infinity: true,
                // focusOnSelect: true
            });







});
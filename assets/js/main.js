(function ($) {
  $(document).ready(function () {
    //mobile menu active
    if ($("#mobile-menu").length > 0) {
      //Mobile menu
      $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
      });

      $(".mobile-menu-bar").on("click", function () {
        $(".sidebar-main").addClass("active");
      });
      $(".sidebar-close").on("click", function () {
        $(".sidebar-main").removeClass("active");
      });
    }

    //Video poppup
    if ($(".play-btn").length > 0) {
      $(".play-btn").magnificPopup({
        type: "iframe",
      });
    }

       // counter-up
       $(".counter").countUp();

    //Post gallary slider
    const blog_gallary = $(".gallary-slider");
    if (blog_gallary.length > 0) {
      //Blog Gallary
      blog_gallary.owlCarousel({
        loop: true,
        autoHeight: true,
        nav: true,
        navText: [
          "<i class='fa-solid fa-angle-left'></i>",
          "<i class='fa-solid fa-angle-right'></i>",
        ],
        dots: false,
        items: 1,
      });
    }

    // sticky header active
    if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

    //demo sidebar active
    const demosIcon = $("#demosIcon, .demos");
    const demoSidebar = $("#demo-sidebar");
    demosIcon.on("click", function (e) {
      e.preventDefault();
      demoSidebar.toggleClass("active-sidebar");
    });
  });

      // pricing-plan-tab
      $("#ce-toggle").click(function (event) {
        $(".plan-toggle-wrap").toggleClass("active");
      });
  
      $("#ce-toggle").change(function () {
        if ($(this).is(":checked")) {
          $(".tab-content #yearly").hide();
          $(".tab-content #monthly").show();
        } else {
          $(".tab-content #yearly").show();
          $(".tab-content #monthly").hide();
        }
      });
  

  // owl-carousel-brend-logo
  $(".brand-images").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

    // owl-carousel-brend-logo
    $(".testimonial-slider-all").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      // autoplay: true,
      // autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    // owl-carousel-testimonial1
    $(".testimonial1-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });


  // owl-carousel-slider
  $(".testimonial2-slider-all").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2.5,
      },
    },
  });

    // about team
    $(".about-team-slider-all").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 4,
        },
      },
    });
  


    // owl-carousel-slider-home5
    $(".home5-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 3,
        },
      },
    });

     // sticky header active
     if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }


  $(".liting-slider-all").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 3,
      },
    },
  });


  $(".porpertice-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 4,
      },
    },
  });

  $(".about-slider-all").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });

  //liting-slider

  $(".property-slides-js").slick({
    centerMode: false,
    margin: "30",
    slidesToShow: 3,
    arrows: true,
    prevArrow: $(".testimonial-prev-arrow1"),
    nextArrow: $(".testimonial-next-arrow1"),
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });



    //liting-slider2

    $(".property-slides-js2").slick({
      centerMode: false,
      margin: "30",
      slidesToShow: 3,
      arrows: true,
      prevArrow: $(".testimonial-prev-arrow2"),
      nextArrow: $(".testimonial-next-arrow2"),
      draggable: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });


    // home page slider

    $('.homepage-slides').owlCarousel({
      items: 1,
      dots: true,
      nav: false,
      loop: true,
       autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      slideSpeed: 600,
      // animateOut: 'slideOutUp',
      // animateIn: 'slideInUp',
       //animateOut: 'slideOutDown',
       //animateIn: 'flipInX',
      navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
          
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
          
        },
        768: {
          items: 1,
          
        },
        1100: {
          items: 1,					
        }
      }
    });
  
    $(".homepage-slides").on("translate.owl.carousel", function () {
      $(".single-slide-item h3")
              .removeClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item h1")
              .removeClass("animated fadeInDown")
              .css("opacity", "1");        
          $(".single-slide-item p")
              .removeClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item .main-btn")
              .removeClass("animated fadeInDown")
              .css("opacity", "1");
      });
  
      $(".homepage-slides").on("translated.owl.carousel", function () {
      $(".single-slide-item h3")
              .addClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item h1")
              .addClass("animated fadeInDown")
              .css("opacity", "1");        
          $(".single-slide-item p")
              .addClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item .main-btn")
              .addClass("animated fadeInDown")
              .css("opacity", "1");
      });
  


    

  // home4-header-video
  new ModalVideo(".video-action-btn1");

  // pricing-plan-tab
  $("#ce-toggle").click(function (event) {
    $(".plan-toggle-wrap").toggleClass("active");
  });

  $("#ce-toggle").change(function () {
    if ($(this).is(":checked")) {
      $(".tab-content #yearly").hide();
      $(".tab-content #monthly").show();
    } else {
      $(".tab-content #yearly").show();
      $(".tab-content #monthly").hide();
    }
  });

  // nice-select
  

    // page-progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    

    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
      disable: "mobile",
    });


    $('select').niceSelect();


     // preloader
  // $(window).on("load", function (event) {
  //   setTimeout(function () {
  //     $("#preloader").fadeToggle();
  //   }, 1500);
  // });

  $(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});

  function _drawAnimated(v) {
    $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v }, $.extend({}, options.animation, {
          step: function(p) {
              _draw(p);
              $(canvas).trigger('circle-animation-progress', [p / v, p]);
          },
  
          complete: function() {
              $(canvas).trigger('circle-animation-end');
          }
      }));
  }
  

  




  // preloader
  // $(window).on("load", function (event) {
  //   setTimeout(function () {
  //     $("#preloader").fadeToggle();
  //   }, 1500);
  // });

  // $("select").niceSelect();
  
})(jQuery);


// line progress bar

let progress = $('#progress1').LineProgressbar({
  percentage: 100
});

let progress2 = $('#progress2').LineProgressbar({
  percentage: 98
});

let progress3 = $('#progress3').LineProgressbar({
  percentage: 97
});


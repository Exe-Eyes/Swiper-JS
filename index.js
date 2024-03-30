// INDEX PAGE JS
// PORTFOLIO SLIDER
$(".slider_main-component-wrapper").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: "auto",
      updateOnWindowResize: true,
      loop: false,
      speed: 400,
      keyboard: true,
      grabCursor: true,
      allowTouchMove: true,
      navigation: {
        nextEl: $(this).find(".slider_main_button-next")[0],
        prevEl: $(this).find(".slider_main_button-prev")[0],
        disabledClass: "is-disabled"
      },
    });
  });
  
// TESTIMONIAL SLIDER
let textSwiper = new Swiper(".swiper.is-testimonial", {
    slidesPerView: 1,
    updateOnWindowResize: true,
    loop: true,
    speed: 400,
    keyboard: true,
    grabCursor: true,
    navigation: {
      nextEl: ".slider_testimonial_button-next",
      prevEl: ".slider_testimonial_button-prev",
    }
  });
let personSwiper = new Swiper(".swiper.is-person", {
    slidesPerView: 1,
    updateOnWindowResize: true,
    loop: true,
    speed: 400,
    followFinger: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
  });
textSwiper.controller.control = personSwiper;
personSwiper.controller.control = textSwiper;
// ABOUT PAGE JS
// MILESTIONE SLIDER
let contentSwiper = new Swiper(".swiper.is-milestone", {
    slidesPerView: 'auto',
    updateOnWindowResize: true,
    loop: false,
    speed: 400,
    keyboard: true,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
        nextEl: ".slider_milestone_button-next",
        prevEl: ".slider_milestone_button-prev",
        disabledClass: "is-disabled"
    }
  });
let dateSwiper = new Swiper(".swiper.is-date", {
    slidesPerView: 3,
    updateOnWindowResize: true,
    direction: 'vertical',
    centeredSlides: 'true',
    loop: false,
    speed: 400,
  });
contentSwiper.controller.control = dateSwiper;
dateSwiper.controller.control = contentSwiper;
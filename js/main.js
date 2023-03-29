const handleSlidersDraw = () => {
  var swiperProps = {
    // slidesPerView: 3,
    // spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },
  
  };
  const smBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  };
  const lgBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  };
  var newCoursesSlider = new Swiper('.new-courses-slider', {...swiperProps, breakpoints: smBreakpoints});
  var graphicيesignSlider = new Swiper('.graphic-design-courses-slider', {...swiperProps, breakpoints: smBreakpoints});
  var programmingؤoursesSlider = new Swiper('.programming-courses-slider', {...swiperProps, breakpoints: smBreakpoints});
  var artsCoursesSlider = new Swiper('.arts-courses-slider', {...swiperProps, breakpoints: smBreakpoints});
  var tabsLatestSlider = new Swiper('.tabs-latest-slider', {...swiperProps, breakpoints: lgBreakpoints});
  var startLearnSlider = new Swiper('.start-learn-slider', {...swiperProps, breakpoints: lgBreakpoints});
  var sessionsInterestYouSlider = new Swiper('.sessions-interest-you-slider', {...swiperProps, breakpoints: lgBreakpoints});
}


$(document).ready(() => {
  handleSlidersDraw();
})

import Swiper, {Pagination, Keyboard, Autoplay, EffectFade} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'




const bannerSlider = new Swiper('.banner__slider', {
  modules: [Pagination, Keyboard, Autoplay, EffectFade],
  speed: 800,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.banner__slider-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})




const serviceSlider = new Swiper('.service__slider', {
  modules: [Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    992: {
      slidesPerView: 3.2,
    },
    420: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.service__slider-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})




const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.reviews__slider-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})
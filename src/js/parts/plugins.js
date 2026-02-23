import "slick-carousel";

export class Plugins {

  init() {
    this.FooterSlider();
    this.ExploreTreatmentSlider();
    this.TestimonialSlider();
    this.LogoSlider();
  }

  FooterSlider() {
    $('.footer-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2 } }
      ]
    });
  }

  ExploreTreatmentSlider() {
    $('.explore-treatment-slider').slick({
      slidesToShow: 3.5,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: false,
      prevArrow: '.treatment-slider-section .prev-arrow',
      nextArrow: '.treatment-slider-section .next-arrow',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  TestimonialSlider() {
    $('.testimonial-slider').slick({
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow: '.testimonial-section .prev-arrow',
      nextArrow: '.testimonial-section .next-arrow',
    });
  }

  LogoSlider() {
    $('.logo-slider-wrapper').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      cssEase: 'linear',
      arrows: false,
      dots: false,
      infinite: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2 } },
      ]
    });
  }
}

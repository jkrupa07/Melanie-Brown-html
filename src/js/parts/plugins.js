import "slick-carousel";

export class Plugins {

  init() {
    this.ExploreTreatmentSlider();
    this.TestimonialSlider();
  }

  ExploreTreatmentSlider(){
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
  TestimonialSlider(){
    $('.testimonial-slider').slick({
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow: '.testimonial-section .prev-arrow',
      nextArrow: '.testimonial-section .next-arrow',
    });
  }

}

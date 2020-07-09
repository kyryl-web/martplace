$(function(){
    $('.select__inner').on('click', function(){
        $('.wrapper').toggleClass('wrapper-active');
    });

    $(".resume__item-rating").rateYo({
        rating: 5,
        starWidth: "16px",
        spacing: "5px",
        readOnly: true
      });

      $('.products__resume').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/arrow-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/arrow-next.png" alt=""></button>'
      });
});




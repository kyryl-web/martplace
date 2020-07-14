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

    $('.feed__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/arrow-prev.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow arrow-next"><img src="images/arrow-next.png" alt=""></button>'
    });

      $('.products__resume').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/arrow-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/arrow-next.png" alt=""></button>'
      });

      $('.navigation__btn-color').on('click', function(){
        $(this).addClass('active');
        $('.navigation__btn-color-1').removeClass('active');
      });
      $('.navigation__btn-color-1').on('click', function(){
        $(this).addClass('active');
        $('.navigation__btn-color').removeClass('active');
      });

      $('.icon-th-list').on('click', function(){
        $('.icon-th-large').removeClass('active');
        $(this).addClass('active')
      });
      $('.icon-th-large').on('click', function(){
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
      });

      var mixer = mixitup('.release__inner');

      
});




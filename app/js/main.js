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

      $(".content__item-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        spacing: "4px",
        readOnly: true
      });
      $(".info__rating-star").rateYo({
        starWidth: "15px",
        spacing: "4px",
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
        $('.goods__content-item').removeClass('list');
      });

      $('.icon-th-list').on('click', function(){
        $('.goods__content-item').addClass('list')
      });

      $('.title-category').on('click', function(){
        $('.goods__item-list').toggleClass('drop');
        $('.goods__item-category').toggleClass('drop')
      });

      $('.title-filter').on('click', function(){
        $('.goods__item-radiolist').toggleClass('down');
        $('.goods__item-filter').toggleClass('down')
      });

      $('.title-range').on('click', function(){
        $('.range-slider').toggleClass('slide');
        $('.goods__item-range').toggleClass('slide')
      });
      

      $(".rangeslider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
 
      });

      $('.header__btn-menu').on('click', function(){
        $('.header__items').toggleClass('active')
      });

      $('.header__bot-btn').on('click', function(){
        $('.header__menu .menu-list').slideToggle()
      });


      $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

        $('input[type="radio"]').styler();

      $('.active-check').on('click', function(){
        $('.info').addClass('active')
        $('.info-2').removeClass('active')
        $('.active-check').addClass('focused');
        $('.active-check-2').removeClass('focused');
        $(this).addAttr(checked)
      }); 

      $('.active-check-2').on('click', function(){
        $('.active-check').removeClass('focused');
        $('.info').removeClass('active')
        $('.info-2').addClass('active')
        $('.active-check-2').addClass('focused');
        $(this).addAttr(checked)
      });
        
      
      
      if ($('.release__inner').length) {
        var mixer = mixitup('.release__inner');
      }

      if ($('.goods__content-box').length) {
        var mixer = mixitup('.goods__content-box');
      }
  

});




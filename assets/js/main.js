$(function () {

  // гамбургер меню
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('header .menu').toggleClass('active');
  });

  // Фильтры в каталоге(catalog.html)

  $('.filter h3.title').on('click', function () {

    $(this).toggleClass('open')
    $(this).siblings('.inner').slideToggle();

  });

  $('.filters .close').on('click', function () {
    $('.catalog_page .filters').toggleClass('open');
  });

  $('.filters_btn button').on('click', function () {
    $('.catalog_page .filters').toggleClass('open');
  });



  // Слайдеры
  $('.orders_slider').slick({
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.png" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.png" alt="">',
    fade: true,
    speed: 1000
  });

  $('.popular_products_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="products_slider-arrows products_slider-arrows_left" src="img/Popular product/product-arrow-left.png" alt="">',
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/Popular product/product-arrow-right.png" alt="">',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.questions_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="products_slider-arrows products_slider-arrows_left" src="img/NEWS_SECTION/new-arrow-left.png" alt="">',
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/NEWS_SECTION/new-arrow-right.png" alt="">',
  });

  $('.reviews_slider').slick({
    infinite: true,
    prevArrow: '<img class="products_slider-arrows products_slider-arrows_left" src="img/Popular product/product-arrow-left.png" alt="">',
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/Popular product/product-arrow-right.png" alt="">',
    responsive: [{
      breakpoint: 620,
      settings: {
        arrows: false
      }
    }]
  });

  $('.certificates_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="products_slider-arrows products_slider-arrows_left" src="img/NEWS_SECTION/new-arrow-left.png" alt="">',
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/NEWS_SECTION/new-arrow-right.png" alt="">',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.similar_products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<img class="products_slider-arrows products_slider-arrows_left" src="img/NEWS_SECTION/new-arrow-left.png" alt="">',
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/NEWS_SECTION/new-arrow-right.png" alt="">',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.set_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    prevArrow: false,
    nextArrow: '<img class="products_slider-arrows products_slider-arrows_right" src="img/cart_product-sliderarrow.png" alt="">',
  });

  // меню при ресайзе
  let mobile = false;
  let searchClass = false;

  let ourShops = $('.our_shop'),
    topLinks = $('.top_links'),
    searchForm = $('.search_form'),
    social = $('.social');

  if ($(window).width() < 1150) {

    mobile = true;

    $('header .menu').append(topLinks);
    $('.top').append(ourShops);
    $('.header_bottom').append(searchForm);

    $('.parameters>ul>li .drop').addClass('mob');
    $('.parameters>ul>li').on('click', function (e) {

      e.preventDefault();

      if ($(this).hasClass('_switch')) {
        $(this).find('.drop.mob').slideUp();
        $(this).removeClass('_switch');
      } else {
        $(this).addClass('_switch');
        $(this).find('.drop.mob').slideDown();
      }

    });

  }

  if ($(window).width() < 611) {

    searchClass = true;

    $('.search_form').addClass('switch');
    $('.search_form.switch .lupa.fake').on('click', function (e) {
      $('.search_form.switch').addClass('open')
    });

    $('.footer .container').append(social);

  }

  $(window).on('resize', function () {

    if ($(window).width() < 1150 && !mobile) {

      mobile = true;

      $('header .menu').append(topLinks);
      $('.top').append(ourShops);
      $('.header_bottom').append(searchForm);

      $('.parameters>ul>li .drop').addClass('mob');
      $('.parameters>ul>li').on('click', function (e) {

        e.preventDefault();

        if ($(this).hasClass('_switch')) {
          $(this).find('.drop.mob').slideUp();
          $(this).removeClass('_switch');
        } else {
          $(this).addClass('_switch');
          $(this).find('.drop.mob').slideDown();
        }

      });

    }

    if ($(window).width() >= 1150 && mobile) {

      mobile = false;

      $('.top .container').append(topLinks);
      $('.header_top .logo').after(searchForm);
      $('.header_top .personal').before(ourShops);

      $('.parameters>ul>li .drop.mob').removeClass('mob');
      $('.parameters>ul>li .drop').removeAttr('style');
      $('.parameters>ul>li').removeAttr('class');

    }

    if ($(window).width() < 611 && !searchClass) {

      searchClass = true;

      $('.search_form').addClass('switch');
      $('.search_form.switch .lupa.fake').on('click', function (e) {
        $('.search_form.switch').addClass('open')
      });

      $('.footer .container').append(social);

    }

    if ($(window).width() >= 611 && searchClass) {

      searchClass = false;

      $('.search_form').removeClass('switch');

      $('.bottom .container').append(social);

    }

  });

  // + -, Выбор количества товара
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  // Модалка
  document.querySelectorAll("[data-btn]").forEach(item => {

    item.addEventListener('click', function () {

      document.body.style.overflow = "hidden";

      let dataValue = this.getAttribute("data-btn");

      let modal = document.querySelector('.' + dataValue)

      modal.style.display = 'flex';

    });

  });

  document.querySelectorAll('.modal').forEach(function (item) {

    item.addEventListener('click', function (e) {

      if (e.target === this || e.target.classList.contains('close')) {

        document.body.style.overflow = "visible";
        this.style.display = "none";

      }

    });

  });

  // Аккордион меню

  $('.accordion_item .accordion_content').slideUp();
  $('.accordion_item ._currentAccordion_item .accordion_content').slideDown();

  $('.accordion_header').on('click', function () {

    let orderContent = $(this).closest('.accordion_item').find('.accordion_content');

    orderContent.slideToggle();

  });
  

  $('[data-switch]').on('click', function (e) {

    $('[data-switch], [data-switched]').removeClass("active");

    let s = $(this).attr("data-switch");

    $(this).addClass("active");

    $(this).closest('.element').find('[data-switched=' + s + ']').addClass("active")

  });

  // Аккордеон заказов в личном кабинете
  $('.cabinet_orders .order_content').slideUp();
  $('.cabinet_orders ._currentOrder .order_content').slideDown();

  $('.order_title .aside_arrow').on('click', function () {

    let orderContent = $(this).closest('.order').find('.order_content');

    orderContent.slideToggle();

  });

});
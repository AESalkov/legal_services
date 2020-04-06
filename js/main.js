$(function(){

  $('.slider__inner, .news__slider__inner').slick({                             /* для слайдера */
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>', /* описание кнопки слайдера "next" */
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>', /* описание кнопки слайдера "prev" */
    infinite: false  /* писать, чтобы не зацикливались слайды */
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){ /* чтобы при клике на "три полоски меню" - меню открывалось */
    $('.menu ul').slideToggle();
  });

});
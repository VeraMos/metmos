$(function() {

     $('.banner-slider').slick({
    	prevArrow: '<button class="prev-left"></button>',
    	nextArrow: '<button class="prev-right"></button>',
    	dots: true
});

  $('button[data-tab]').click(function(){
    var target = $(this).attr('data-tab');
    $('[data-tab]').removeClass('active');
    $('section[data-tab="'+target+'"]').addClass('active');
    $(this).toggleClass('active');
     });

$('.btn-more').click(function(){
	$(this).next('.seo_text_more').slideToggle();
  $(this).hide();
});

$('.categor-partner__button').click(function(){
  $('.categor-partner__hidden-mobile').slideToggle();
  $(this).hide();
});

$('.footer-item-first').click(function() {
  $(this).next('.footer-menu_list').slideToggle();
  $(this).children('.footer-menu-arrow').toggleClass('active');
});

$('.catalog-card__title-wrap').click(function() {
  $(this).next('.catalog-card__list').slideToggle();
  $(this).children('.catalog-menu-arrow').toggleClass('active');
});

$('.leftmenu__filter__ttl').click(function() {
  $(this).toggleClass('active');
  $(this).next('.categor__filter__list').toggleClass('active');
  $(this).children('.leftmenu-arrow').toggleClass('active');
});

$('.leftmenu-mobile__top').click(function() {
  $('.leftmenu__list').slideToggle();
  //$(this).next('.categor__filter__list').toggleClass('active');
  //$(this).children('.leftmenu-arrow').toggleClass('active');
});

$('.categor__tabs__button').click(function() {
  $('.categor__tabs__button').parent("li").addClass('active-top');
  $('.categor__tabs__item').toggleClass('active');
});

$('.header__menu-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('header__menu-toggle--active');
      $('.header__menu-wrapper').toggleClass('active');
      //$('.header__menu-item').toggleClass('header__menu-item--active');
      $('.header_menu-block').toggleClass('active');
      $('.header-block__mobile').toggleClass('active');
      
});

$(function (){
    $('.banner__search-input')
      .focus(function(){
        if($(this).val() == 'privet') {
          $(this).val('');
        } else {
          $('.banner__search-res').slideDown();
        }
        $(this).addClass('blured');
      })
      .blur(function(){
        if($(this).hasClass('blured')){
          $('.banner__search-res').slideUp();
          if($(this).val() == ''){
            $(this).val('');
          }
        }
      })
      .mouseout(function(){
        $(this).addClass('blured');
      })
      .mouseover(function(){
        $(this).removeClass('blured');
      });
  })

$("#menu").mmenu({
      extensions : [ "position-bottom", "listview-50", "fx-listitems-drop", "border-offset" ],
      autoHeight : false,
      navbar: { title: "Меню" }
    });
});

(function($) {
$(function() {

  $('input, select').styler({
  fileBrowse: 'Прикрепить файл',
  filePlaceholder: '&nbsp;',
  singleSelectzIndex: '999',
  onSelectOpened: function() {
    // к открытому селекту добавляется красная обводка
    $(this).css('box-shadow: 0px 15px 31px rgba(0, 0, 0, 0.1);');
  }
});

});
})(jQuery);
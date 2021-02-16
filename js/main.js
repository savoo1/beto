$( ".menuforphone .menus .list" ).click(function() {
  if($(this).hasClass("list_active")){
  	$(this).removeClass("list_active");
  }else{
  	$(".menuforphone .menus .list").removeClass("list_active");
  	$(this).addClass("list_active");
  }
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.menuforphone .menus .list') && !$(target).parents().is('.list')) {
       $(".list_active").removeClass("list_active");
    }
});

$(".sec2 .card_w_droping h3").click(function() {
    if($(this).parent().find(".content_in_card").hasClass("content_in_card_active")){
      $(this).parent().removeClass("activatedcardw");
      $(this).parent().find(".content_in_card").removeClass("content_in_card_active")
    }else{
      $(this).parent().find(".content_in_card").addClass("content_in_card_active")
      $(this).parent().addClass("activatedcardw");
    }
});

$(".sec2 .card_w_droping .boxes2 ul li p").click(function() {
    if($(this).parent().find("ul").hasClass("unactivatedul")){
      $(this).parent().find("ul").removeClass("unactivatedul");
      $(this).removeClass("changearrow");
    }else{
      $(this).parent().find("ul").addClass("unactivatedul");
      $(this).addClass("changearrow");
    }
});

$(".banner_card1 .arrow_green").click(function() {
    if($(this).parent().parent().find(".desc").hasClass("desc_active")){
      $(this).parent().parent().find(".desc").removeClass("desc_active");
    }else{
      $(this).parent().parent().find(".desc").addClass("desc_active");
    }
});
$(".sec2 .para_card .readmore").click(function() {
  if($(".sec2 .para_card").hasClass("para_card_full")){
    $(".sec2 .para_card").removeClass("para_card_full");
  }else{
    $(".sec2 .para_card").addClass("para_card_full");
  }
});
$(".gobacktotop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

$(".ogsvar .cus_card h2").click(function() {
    if($(this).parent().hasClass("cus_card_active")){
      $(this).parent().removeClass("cus_card_active");
    }else{
      $(this).parent().addClass("cus_card_active");
    }
});
$(".changenight a").click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("changenight_active")){
      $(this).parent().removeClass("changenight_active");
      $("body").removeClass("darkmode");
    }else{
      $(this).parent().addClass("changenight_active");
      $("body").addClass("darkmode");
    }
});

// var lastScrollTop = $(".menu").scrollTop();
$(window).scroll(function() {
   var hT = $('.menu').offset().top,
       wS = $(this).scrollTop();
       hofm = $(".before_menu").height() + 1;
   if(wS <= hofm){
       $(".menu").removeClass("menu_fixed");
   }else{
    if (wS >= hT){
        $(".menu").addClass("menu_fixed");
    }
   }
});



$(window).scroll(function(e){
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  var scrollPercent = (scrollTop) / (docHeight - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent*100);

  $(".lineforphone .line").css("max-width", scrollPercentRounded + "%");

  if(scrollTop > 50){
    $(".lineforphone").addClass("lineforphone_active");
  }else{
    $(".lineforphone").removeClass("lineforphone_active");
  }
});


$(window).on('load', function() {
  var widthofline = $(".menu ul .activeli").width();
  var position = $(".menu ul .activeli").position();
  $(".menu .downline").css("max-width", widthofline + "px");
  $(".menu .downline").css("left", position.left + "px");

  $( ".menu ul li" ).mouseover(function() {
    if(!$(this).hasClass("changenight")){
      if(!$(this).hasClass("searchicon")){
        var widthofline = $(this).width();
        var position = $(this).position();
        $(".menu .downline").css("max-width", widthofline + "px");
        $(".menu .downline").css("left", position.left + "px");

      }
    }
  });
  $( ".menu ul" ).mouseleave(function() {
    var widthofline = $(".menu ul .activeli").width();
    var position = $(".menu ul .activeli").position();
    $(".menu .downline").css("max-width", widthofline + "px");
    $(".menu .downline").css("left", position.left + "px");
  });

  $( window ).resize(function() {
    var widthofline = $(".menu ul .activeli").width();
    var position = $(".menu ul .activeli").position();
    $(".menu .downline").css("max-width", widthofline + "px");
    $(".menu .downline").css("left", position.left + "px");
  });
});

$(".menu .searchbox .searchcont input").on("input", function(){
    if($(this).val() == ""){
      $(".menu .searchbox .searchresults").removeClass("searchresults_active");
    }else{
      $(".menu .searchbox .searchresults").addClass("searchresults_active");
    }
});
$(".menu ul .searchicon a").click(function(e) {
    e.preventDefault();
    $(".menu .searchbox").addClass("searchbox_active");
    setTimeout(function(){ $(".menu .searchbox").addClass("searchbox_overflow"); }, 250);
});
$(".menu .searchbox .searchcont .cancse").click(function(e) {
    e.preventDefault();
    $(".menu .searchbox").removeClass("searchbox_active");
    $(".menu .searchbox").removeClass("searchbox_overflow");
});


$(".menuforphone .menus .list .searchbox .searchcont input").on("input", function(){
    if($(this).val() == ""){
      $(".menuforphone .menus .list .searchresults").removeClass("searchresults_active");
    }else{
      $(".menuforphone .menus .list .searchresults").addClass("searchresults_active");
    }
});
$(".menuforphone .menus .list .opens").click(function(e) {
    e.preventDefault();
    $(".menuforphone .menus .list .searchbox").addClass("searchbox_active");
});
$(".menuforphone .menus .list .searchbox .searchcont .cancse").click(function(e) {
    e.preventDefault();
    $(".menuforphone .menus .list .searchbox").removeClass("searchbox_active");
    $(".menuforphone .menus .list .searchresults").removeClass("searchresults_active");
});
$(".menuforphone .menus .list .searchresults .closesr").click(function(e) {
    e.preventDefault();
    $(".menuforphone .menus .list .searchresults").removeClass("searchresults_active");
});
if ($(window).width() < 450) {
   $(".menuforphone .menus .list .searchbox .searchcont input").attr("placeholder", "Search...")
}else{
   $(".menuforphone .menus .list .searchbox .searchcont input").attr("placeholder", "Search for Casinos, Games or Guides...")
}
$( window ).resize(function() {
  if ($(window).width() < 450) {
     $(".menuforphone .menus .list .searchbox .searchcont input").attr("placeholder", "Search...")
  }else{
     $(".menuforphone .menus .list .searchbox .searchcont input").attr("placeholder", "Search for Casinos, Games or Guides...")
  }
});




$('.slider_w3').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 500, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              
          }
      }
  ]
});


$('.slider_w2').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 500, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              
          }
      }
  ]
});
  

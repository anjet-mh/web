       $(".footer_nav > .level_1 > li > a").click(function() {
        //抓取網址列最後面的#部分 然後換頁後自動移到該位置
        $(function () {
          var gethash = location.hash+ "_area";
          $("html, body").animate({scrollTop: $(gethash).offset().top-97 }, {duration: 10,easing: "swing"});
          $(".header_nav  a").removeClass("active");
          $(location.hash).addClass("active");
          location.hash = "";//更改#標籤後方字串
        });
      })
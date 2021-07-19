var get_namedata = $(".page_name").data("namedata")


$(".langu_list li a").click(function () {
  var thisHREF = $(this).attr("href"); //取得a的href
  /*var get_namedata = $(".page_name").data("namedata")//取得.page_name 的 data-namedata的data*/
  
  if (get_namedata == "home") {
    var appHREF = thisHREF;
  } else {
    var appHREF = thisHREF + "/" + get_namedata + ".html";
  }
  $("#" + $(this).attr('id')).attr({ "href": appHREF });
});


//------抓取 各頁 塞在.page_name下的namedata數據 然後在此取得該數據後 再組成 #數據 當變數用
      var nav_link_active = "#" + get_namedata ; //"#" + $(".page_name").data("namedata")
      $(nav_link_active).addClass("active");//找到在header_nav中與nav_link_active變數相同的id 加入 .active




//------下拉選單 區塊 開始 
      $(".menu_btn").click(function () { //點漢堡選單icon               
          $(".header_nav").toggleClass("header_nav_Open_Close");
          if($(".header_nav_Open_Close").length != 0){ //當有.header_nav_Open_Close的時侯才執行
              $(".level_1" ).find( "*" ).removeClass("show");
              $(".level_1 ul").not(".show").slideUp();
          }
      });

      $(".level_1 > li > a").click(function () { //點擊.level_1下的a ()
          $( ".level_1" ).find( "*" ).removeClass("show");
          $(this).next("ul").addClass("show").slideToggle(200);//先在當前(.level_1 > a)的下一個(.next)兄弟層"ul" (.level_2) 加上Class .show 然後再開啟或關閉"ul" (.level_2)
          $(".level_1 ul").not(".show").slideUp(); //關閉在.level_1下全部的ul class中沒有.show 的選單
      });
      $(".level_2 > li > a").click(function () { //點擊.level_2下的a ()
          $( ".level_2" ).find( "*" ).removeClass("show");
          $(this).next("ul").addClass("show").slideToggle(200);//先在當前(.level_2 > a)的下一個(.next)兄弟層"ul" (.level_3) 加上Class .show 然後再開啟或關閉"ul" (.level_3)
          $(".level_1 ul").not(".show").slideUp(); //關閉在.level_1下全部的ul class中只要沒有.show 的選單
      });
//------ 下拉選單 區塊 結束 


//------ nav.html被載入後 隱藏 & 變更 【網站導覽頁】中.main-container 的 【網站導覽】 與 下拉選單 class 
/*      $("#load-nav2 .navbar-top").removeClass("navbar-top")
      //$("#load-nav2 .angle_down").removeClass("angle_down").addClass("angle_down1");
      $("#load-nav2 .level_1").removeClass("level_1").addClass("L1");
      $("#load-nav2 .level_2").removeClass("level_2").addClass("L2");
      $("#load-nav2 .level_3").removeClass("level_3").addClass("L3");
      $(".main-container .sitenav_hide").hide(); //隱藏sitenav_hide的LINK
*/


//------回到頂端按鈕
      $(function () {
        // 按下GoTop按鈕時的事件 
        $('#gotop').click(function () {
          $('html,body').animate({ scrollTop: 0 }, .1);   // 返回到最頂上 
          return false;
        });

        // 偵測卷軸滑動時，往下滑超過200px就讓GoTop按鈕出現 
        $(window).scroll(function () {
          if ($(this).scrollTop() > 200) {
            $('#gotop').fadeIn();
          } else {
            $('#gotop').fadeOut();
          }
        });
      });

//------固定選單
      $('.navbar-top').addClass('navFixed');   // 在.navbar-top 加入.navFixed 產生固定效果 

/**/
//------按下選單後移到該ID位置 並 加上 active CSS
      /*$(".header_nav > .level_1 > li > a").click(function() {
        var scrolltarget = "#" + $(this).attr('id') + "_area";

        $("html, body").animate({scrollTop: $(scrolltarget).offset().top-97 }, {duration: 10,easing: "swing"});        
        $(".header_nav").addClass("header_nav_Open_Close");
        var tagactive = "#" + $(this).attr('id');
        $(".header_nav  a").removeClass("active");
        $(tagactive).addClass("active");
        return false;
      });*/

      $(".header_nav > .level_1 > li > a").click(getID);
      $(".footer_nav > .footer-level_1 > li > a").click(getID);
      
      //(.header_nav .footer_nav 用function) 取得ID 然後換頁後自動移到該位置 
      function getID() {
        var scrolltarget = "#" + $(this).attr('id') + "_area";
        $("html, body").animate({ scrollTop: $(scrolltarget).offset().top-97 }, { duration: 10, easing: "swing" });
        $(".header_nav").addClass("header_nav_Open_Close");
        var tagactive = "#" + $(this).attr('id');
        $(".header_nav  a").removeClass("active");
        $(tagactive).addClass("active");
        location.hash = $(this).attr('id');//更改網址列中#標籤後方字串
        return false;
      }

      //換頁後 抓取網址列最後面的#部分 然後自動移到該位置
       $(function () {
        var gethash = location.hash+ "_area";
        var getscrollTop = $(this).scrollTop();
        $(this).scrollTop(getscrollTop-63);
        $("html, body").animate({scrollTop: $(gethash).offset().top-97 }, {duration: 10,easing: "swing"});
        $(".header_nav  a").removeClass("active");
        $(location.hash).addClass("active");
       }); 

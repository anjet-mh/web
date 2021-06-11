$("#submit").click(function(){

    var strEmail = $("#email").val();
    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;  

    if($("#name").val()==""){ /*如果尚未填寫*/
      alert("請輸入姓名");
      eval("document.form1['name'].focus()");       
    }else if($("#company").val()==""){
      alert("請輸入公司名稱跟職務");
      eval("document.form1['company'].focus()");    
    }else if($("#email").val()==""){
      alert("請輸入E-mail");
      eval("document.form1['email'].focus()");
    }else if(strEmail.search(emailRule)== -1){/*如果Email格式錯誤*/
      alert("請輸入完整的E-mail");
      eval("document.form1['email'].focus()");
    }else if($("#textarea").val()==""){
      alert("請輸入詢問的內容");
      eval("document.form1['textarea'].focus()");   
    }else{
      $(".Sending").show();
      var name = $('#name').val();
      var company = $('#company').val();
      var email = $('#email').val();
      var msg = $('#textarea').val();
      Email.send({
          SecureToken : "2fb0cb33-c0d0-4868-9228-0f622b351d80",
          To : 'service.tw@anjet.com , mhcheng@anjet.com',
          From : email,
          Subject : "來自【聯絡我們】的通知",
          Body : "姓名：" + name + "<br><br>公司名稱跟職務：" + company + "<br><br>E-mail：" + email + "<br><br>詢問內容：" + msg,
      }).then(
        message => alert('詢問的內容 提交完成') & $('#form1')[0].reset()/*送出後清空*/ & $(".Sending").hide(),
      );
    }
})
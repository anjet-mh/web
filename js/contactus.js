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
      alert("請輸入查詢的內容");
      eval("document.form1['textarea'].focus()");   
    }else{
      var name = $('#name').val();
      var company = $('#company').val();
      var email = $('#email').val();
      var msg = $('#textarea').val();
      alert('查詢的內容 傳送中');
      Email.send({
          SecureToken : "2fb0cb33-c0d0-4868-9228-0f622b351d80",
          To : 'service.tw@anjet.com',
          From : email,
          Subject : "來自【聯絡我們】的通知",
          Body : "姓名：" & name & "<br>公司名稱跟職務：" & company & "<br>E-mail：" & email & "<br>詢問內容：" & msg,
      }).then(
        message => alert('查詢的內容 傳送完成') & $('#form1')[0].reset()/*送出後清空*/,
      );

      /*GOOGLE表單用 document.form1.submit();*/
      /*var name = $('#name').val();
      var company = $('#company').val();
      var email = $('#email').val();
      var msg = $('#textarea').val();
      var data = {
          'entry.836309681': name,
          'entry.1412993864': company,
          'entry.609688704': email,
          'entry.1961171879': msg
      };
      $.ajax({
          type: 'POST',
          url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSclKNIM2Oo-DIAAPmlE4Ou33tobAR_KkL_84zpE0tQuKoEixg/formResponse',
          data: data,
          contentType: 'application/json',
          dataType: 'jsonp',*/
          /*complete: function() {alert('查詢的內容傳送完成');
          $('#form1')[0].reset();} 送出後清空*/
      /*});*/
    }
})
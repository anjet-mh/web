$("#submit").click(function(){

    var strEmail = $("#email").val();
    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;  

    if($("#name").val()==""){ /*如果尚未填寫*/
      alert("お名前を入力してください");
      eval("document.form1['name'].focus()");       
    }else if($("#company").val()==""){
      alert("会社名及び所属先を入力してください");
      eval("document.form1['company'].focus()");    
    }else if($("#email").val()==""){
      alert("メールアドレスを入力してください");
      eval("document.form1['email'].focus()");
    }else if(strEmail.search(emailRule)== -1){/*如果Email格式錯誤*/
      alert("正しいメールアドレスを入力してください");
      eval("document.form1['email'].focus()");
    }else if($("#textarea").val()==""){
      alert("お問い合わせ内容を入力してください");
      eval("document.form1['textarea'].focus()");   
    }else{
      /*document.form1.submit();*/
      var name = $('#name').val();
      var company = $('#company').val();
      var email = $('#email').val();
      var msg = $('#textarea').val();
      var data = {
          'entry.836309681': name,
          'entry.1412993864': company,
          'entry.609688704': email,
          'entry.1961171879': msg
      };/**/
      $.ajax({
          type: 'POST',
          url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSclKNIM2Oo-DIAAPmlE4Ou33tobAR_KkL_84zpE0tQuKoEixg/formResponse',
          data: data,
          contentType: 'application/json',
          dataType: 'jsonp',
          complete: function() {alert('お問い合わせ内容が送信されました！');
          $('#form1')[0].reset();} /*送出後清空*/
      });
    }
})


/*
$(function() {
  $('#submit').on('click', function() {
    var name = $('#name').val() || '記入されていません';
    var company = $('#company').val() || '記入されていません';
    var email = $('#email').val() || '記入されていません';
    var msg = $('#textarea').val() || '記入されていません';
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
      dataType: 'jsonp',
      complete: function() {
        alert('お問い合わせ内容が送信されました！');
      }
    });        
  });
});
*/
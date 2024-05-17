$(function () {
  $('.button-more').on('mouseover',function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    },100);
  });

  $('.button-more').on('mouseout',function () {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    },100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });


  // 送信ボタンクリック時の処理
  $('#submit').on('click',function (event) {
    // 送信拒否
    event.preventDefault();

    // 結果をresultに格納
    let result = inputCheck();

    // エラー判定とメッセージ取得
    let error = result.error;
    let message = result.message;

    // エラーありなしで分岐
    if (error == false) {
      // 送信成功メッセージ
      alert('お問い合わせを送信しました。');
    } else {
      // エラーメッセージ
      alert(message);
    }
    
  });

  // フォーカスが外れたらフォームの入力チェック
  $('#name').blur(function () {
    inputCheck();
  });

  $('#furigana').blur(function () {
    inputCheck();
  });

  $('#email').blur(function () {
    inputCheck();
  });

  $('#tel').blur(function () {
    inputCheck();
  });
  
  $('#message').blur(function () {
    inputCheck();
  });

  $('#agree').blur(function () {
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラー結果
    let result;

    // エラー内容
    let message='';

    // エラーなければfalse
    let error = false;

    // お名前チェック
    if ($('#name').val() == ''){
      // エラーあり
      $('#name').css('background-color','#f79999');
      error = true;
      message += 'お名前を入力して下さい。\n';
    } else {
      // エラーなし
      $('#name').css('background-color','#fafafa');
    }

    // フリガナチェック
    if ($('#furigana').val() == '') {
      // エラーあり
      $('#furigana').css('background-color','#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';    
    } else {
      // エラーなし
      $('#furigana').css('background-color','#fafafa');
    }

    // お問い合わせのチェック
    if ($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == ''||
        $('#email').val().indexOf('@') == -1||
        $('#email').val().indexOf('.') == -1) {
      
      // エラーあり
      $('#email').css('background-color','#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      $('#email').css('background-color','#fafafa');
    }


    // チェックボックスが入力されているか
    if ($('#agree').prop('checked') == false) {
      error = true;
      message +='個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }

    // 送信ボタンの切り替え
    if (error == true) {
      $('#submit').attr('src','images/button-submit.png');
    } else {
      $('#submit').attr('src','images/button-submit-blue.png');
    }

    // エラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    return result;
  }
});
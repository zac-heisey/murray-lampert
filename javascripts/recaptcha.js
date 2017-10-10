$('#contact-btn').click(function(){
  var $captcha = $('#recaptcha'),
      response = grecaptcha.getResponse();

  if (response.length === 0) {
    $('.msg-error').text("reCAPTCHA is mandatory");
    if (!$captcha.hasClass("issue")){
      $captcha.addClass( "issue" );
    }
  } else {
    $('.msg-error').text('');
    $captcha.removeClass( "issue" );
    alert( 'reCAPTCHA marked' );
  }
})

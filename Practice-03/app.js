$('.features').hide();
$('.pricings').hide();
$('#home').on('click', function(event){
  $('#home').addClass('active');
   if($('#home').hasClass('active')){
        $('#pricing').removeClass('active');
        $('#features').removeClass('active');
        $('.features').hide();
        $('.pricings').hide();
        $('.tables').show();
    }
   event.preventDefault();
});

$('#pricing').on('click', function(event){
      $('#pricing').addClass('active');
      if($('#pricing').hasClass('active')){
      $('#features').removeClass('active');
      $('#home').removeClass('active');
      $('.features').hide();
      $('.tables').hide();
      $('.pricings').show();
  }
     
      event.preventDefault();
});
  
 
$('#features').on('click', function(event){
   $('#features').addClass('active');
  if($('#features').hasClass('active')){
     $('#home').removeClass('active');
     $('#pricing').removeClass('active');
     $('.tables').hide();
    $('.pricings').hide();
    $('.features').show();
}
  
   event.preventDefault();
});

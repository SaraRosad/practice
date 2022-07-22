
 $(document).on('click','#close', function(){
    $('#book').removeClass('open');
    $('#book').addClass("close");
});
$(document).on('click','#open', function(){
   $('#book').removeClass('close');
   $('#book').addClass("open");
});
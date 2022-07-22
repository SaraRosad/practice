$(document).on('click','#show', function(){
    $('.header').toggleClass("hidden");
    });
  
  $(document).on('click','#close', function(){
      $('.table').toggleClass("close");
    });
  
   $(document).on('click','#open-menu' , function(){
        $('.table').toggleClass("is-active");
    });
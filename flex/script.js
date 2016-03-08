$( document ).ready(function() {
	$('.dropdown').css('display','none');
	$('.nav').css('display','none');
    $("#burger").click(function() {
  			$('header').hide();
  			$('.dropdown').css('display','block');
  			$('.nav').css('display','block');
		});
    $("#exit").click(function() {
  			$('header').show();
  			$('.dropdown').css('display','none');
  			$('.nav').css('display','none');
		});

});
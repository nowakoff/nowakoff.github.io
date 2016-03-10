$( document ).ready(function() {
	$('.dropdownMenu').css('display','none');
	$('.nav').css('display','none');
    $("#burger").click(function(e) {
        e.preventDefault();
  			$('header').hide();
  			$('.dropdownMenu').css('display','block');
  			$('.nav').css('display','block');
		});
    $("#exit").click(function(e) {
        e.preventDefault();
  			$('header').show();
  			$('.dropdownMenu').css('display','none');
  			$('.nav').css('display','none');
		});
    $(function() {
      $( "#datepicker" ).datepicker();
    });

});
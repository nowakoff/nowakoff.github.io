$(document).ready(function(){
	// alert('wwww1');
    $("#ic").click(function(){
        $('#icHide').show();
        $('#acHide').hide();
        $('#deHide').hide();
    });
    $("#ac").click(function(){
        $('#icHide').hide();
        $('#acHide').show();
        $('#deHide').hide();
    });
    $("#de").click(function(){
        $('#icHide').hide();
        $('#acHide').hide();
        $('#deHide').show();
    });
});
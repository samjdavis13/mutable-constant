$(function(){

	// Spoiler Code
	$('a.spoiler').click(function(){
	    var text = $(this).text(); 
	    var content = $(this).attr("content");
	    $(this).text(content).attr("content", text);
	});

});
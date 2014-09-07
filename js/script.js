$(function(){

	// Spoiler Code
	$('a.spoiler').click(function(){
		$text = "<a href=\"\" onclick=\"return false\" class=\"spoiler\" content=\"" + $(this).text() + "\">" + $(this).attr("content") + "</a>"; 
		$(this).replaceWith($text);
	});

});
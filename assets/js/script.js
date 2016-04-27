$(document).ready(function(){
	
	$(".button").click(function(){
		$("#modal-container").hide();
	});
	$(".button2").click(function(){
		$("#modal-container").hide();
	});
	$("#welcomebutton").click(function(){
		$("#modal-container").show();
	});
	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	});
	$("#welcomebutton").click(function() {
 		$("#modal-box").css("background", "#194d19");
	});
// Hover
	$(".menu-item").hover(function(){
    $(this).css("font-weight", "bold");
    }, function(){
    $(this).css("font-weight", "normal");
});
	$("#holiday1").click(function(){
    $("img").attr("width","300");
});
});
$(document).ready(function() {
	resize();
	downscroll = false;
});

window.onresize = function(event) {
	resize();
}

window.onscroll = function(event) {
	if(downscroll)
		scrollUp();
	else
		scrollDown();
}

function resize() {
	$('#content').css({'top':$(window).height()});
	console.log("css changed");
}

function scrollUp() {
	$('#content').css({'transform':'translateY(0%)','transition':'transform 200ms ease-in',
					   'height':'110%'});
	setTimeout(function() {
		downscroll = false;
	},300);
}

function scrollDown() {
    $('#content').css({'transform':'translateY(-100%)','transition':'transform 200ms ease-in'});
    setTimeout(function() {
		$('#content').css({'height':'100%'});;
		downscroll = true;
    },300);
}

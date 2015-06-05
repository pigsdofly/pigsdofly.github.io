$(document).ready(function() {
	resize();
});

window.onresize = function(event) {
	resize();
}

function resize() {
	$('#content').css({'top':$(window).height()});
	console.log("css changed");
}

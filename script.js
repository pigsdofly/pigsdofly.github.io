$(document).ready(function() {
	resize();
});

window.onresize = function(event) {
	resize();
}

window.onscroll = function(event) {
    $('#content').css({'transform':'translateY(-100%)','transition':'transform 200ms ease-in'});
    setTimeout(function() {
    	$('#content').css({'height':'100%'});
    },200);

}

function resize() {
	$('#content').css({'top':$(window).height()});
	console.log("css changed");
}

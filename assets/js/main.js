//= include ../../bower_components/jquery/dist/jquery.js
//= include ../../bower_components/bootstrap-sass/dist/js/bootstrap.js

$(function(){

	//start up the carousel
	$('.carousel').carousel();
	
	//set drop shadow on nav
	function setNavShadow() {
        var opacity = $(document).scrollTop();
        opacity = (opacity > 100 ? 100 : opacity) / 100;
        $('#nav').css('box-shadow', '0 5px 25px rgba(161, 184, 190, ' + opacity + ')');		
	}

	setNavShadow();
	$(window).on('scroll', setNavShadow);


});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52980203-1', 'auto');
ga('send', 'pageview');

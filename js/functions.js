var isMobile = false;
if( navigator.userAgent.match(/Android/i) || 
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) || 
    navigator.userAgent.match(/iPad/i)|| 
    navigator.userAgent.match(/iPod/i) || 
    navigator.userAgent.match(/BlackBerry/i)){
    isMobile = true;
}
/*iOS5 fixed-menu fix*/
var iOS5 = false;
if (navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i)){
    iOS5 = true;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61179338-1', 'auto');
ga('send', 'pageview');

//INIT --------------------------------------------------------------------------------/
$(document).ready(function () {
	
	if (isMobile == true) {
	    $('body').addClass('touch-device');	
	} else {
		$('.page').addClass('desktop');
    }	

    //AUTOSCROLLR -------------------------------------------------------------------------/
    $('a.jumpr').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
      		if (target.length) {
        		$('html,body').animate({scrollTop: target.offset().top}, 1000);

    	        return false;
      		}
    	}
    });
    
    //OWL SLIDER --------------------------------------------------------------------------/
	$("#slide").owlCarousel({
    	autoPlay : 8000,
    	stopOnHover : true,
    	navigation:false,
    	paginationSpeed : 1000,
    	goToFirstSpeed : 2000,
    	singleItem : true,
    	autoHeight : false,
    	transitionStyle: "fade"
  	});

    $('form').on('submit', function(e) {
        e.preventDefault();
    
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (data) {
                $('form').before('<h1>Thank you for your inquiry!<br />We will be in touch shortly.</h1>');
                $('form').hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert($.parseJSON(jqXHR.responseText).name);
            },
            dataType: 'json'
        });
    });
});
$(document).ready( function() {
	var theme = $.cookie('theme');
	
	if (theme == 'light') {
		$('#theme').attr('href','css/lightstyle.css');
	}
	
	$('#changetheme').on('click', function() {
		if ($('#theme').attr('href') == 'css/darkstyle.css') {
			$('#theme').attr('href','css/lightstyle.css');
			$.cookie('theme', 'light', { expires: 30 });
			return false;
		}
		else {
			$('#theme').attr('href','css/darkstyle.css');
			$.cookie('theme', 'dark', { expires: 30 });
			return false;
		}
	});
	
	$('.slotselector, .inner').on('click', 'a', function(e) {
		e.preventDefault();
		
		$('.inner').html(htmlObject[$(this).attr('id')]);
		$('.row').hide();
		
		$('a').removeClass('current');
		$(this).addClass('current');
	});	
	
	$('.inner').on('click', '.modname', function() {
		$(this).nextUntil('.nocollapse').toggle();
	});
	
	$(window).on('scroll', function() {
        if($(this).scrollTop() > 100){
            $('#goTop').stop().animate({
                bottom: '20px'
                }, 500);
        }
        else{
            $('#goTop').stop().animate({
               bottom: '-100px'    
            }, 500);
        }
    });
	
    $('#goTop').on('click', function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#goTop').stop().animate({
               bottom: '-100px'    
           }, 500);
        });
    });
});
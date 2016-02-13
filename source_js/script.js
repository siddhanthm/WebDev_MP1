$(document).ready(function() {
	
	$(window).scroll(function(){
		if($(window).scrollTop() > $(window).height()){
			$("nav").removeClass("normal");
			$("nav").addClass("shrink");
		} else{
			$("nav").addClass("normal");
			$("nav").removeClass("shrink");
		}
	});

	
	$("nav").find("a").on("click", function(e){
		e.preventDefault();
		var id = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(id).offset().top - 50 + 1
		}, "slow");
	});

	$("#Home_a").on("click", function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$("#Home2").offset().top - 50 + 1
		}, "slow");
	});

	$(window).scroll(function(){
		var sections = $(".heading");
		sections.each(function(){
			var top = $(this).offset().top - 50;
			var bottom = (top + $(this).outerHeight() + $(window).height());
			if($(window).scrollTop() >= top && $(window).scrollTop() <= bottom){
				$("nav").find("a").removeClass("active");
				$("nav").find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});

	});

	$('a.modallink').click(function(e){
        e.preventDefault();
   		$('.window').css('opacity', '0').css('top', '70%').css('left', '50%').fadeTo(500, 1); 
        $('#modal').append('<div class="blind" />').find('.blind') .css('opacity', '0') .fadeTo(500, 0.8);
    });

    $('a.close').click(function(e){
        e.preventDefault();
        $('.window').fadeOut(250, function(){ $(this).css('top', '-1000px').css('left', '-1000px'); });
       	$('.blind').fadeOut(250, function(){ $(this).remove();});
    });


	var items = $('.carouselbox li');
	var counter = 0;
	var amount = items.length;
	var current = items[0];
	$(items).addClass("curr");
	$(current).addClass("visible");
	$(".fa-arrow-left").on("click", function(){
		$(current).removeClass("visible");
		if(counter === 0){
	    	counter = items.length-1;
		}else{
			counter = counter - 1;}
			current = items[counter];
			$(current).addClass("visible");
	});
	$(".fa-arrow-right").on("click", function(){
	 	$(current).removeClass("visible");
		if(counter == amount -1){
			counter =0;
		}else{
			counter = counter + 1;
		}
		current = items[counter];
		$(current).addClass("visible");
	});   

});


/*
References 
https://www.christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/
http://www.webdesignerdepot.com/2012/04/techniques-for-creating-modal-windows/
http://stackoverflow.com/questions/4565381/scrolltop-jquery-scrolling-to-div-with-id
*/
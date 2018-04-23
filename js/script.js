(function($, undefined){
    $(function(){

    	//maskedinput
		 $(".maskedinput").mask("+7(999) 999-9999");

		//slick
		 $('.slick-slider').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/prev.png"></button>',
          prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/next.png"></button>',

		});

		//fancybox
		$(".fancybox").fancybox({
		    openEffect :  'elastic',
		    closeEffect : 'elastic',
		});

		// button-top
    	$(window).scroll(function() {

        if($(this).scrollTop() != 0) {
        $('#buttonTop').fadeIn();
        } else {
        $('#buttonTop').fadeOut();
        }
        });
        $('#buttonTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    	});

    	 //mail
	    $("#form1, #form2, #form3").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $("#myModal").modal('hide');
	      $("#thanks").modal('show');
	      $("#form1, #form2, #form3").trigger("reset");

	    });
	    return false;
	    });


    });
})(jQuery);

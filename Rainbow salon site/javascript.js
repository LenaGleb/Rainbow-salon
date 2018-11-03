$("document").ready(function(){
		// Initialize smoothScroll
		$('a').smoothScroll({
			// offset: -60,
			speed: 3000
		});
		
	// Initialize flickity
	// Main carousel 
	$(".main-carousel").flickity({
		draggable: false,
		cellAlign: "left",
		wrapAround: true,
		arrowShape: { 
			x0: 10,
			x1: 60, y1: 50,
			x2: 60, y2: 45,
			x3: 25
			}
		});
	// Reviews carousel
	$(".carousel").flickity({
		draggable: true,
		cellAlign: "left",
		wrapAround: true,
		arrowShape: { 
			x0: 10,
			x1: 60, y1: 50,
			x2: 60, y2: 45,
			x3: 25
			}
		});

	// Blog hide-show buttons
	$( "button.show-more" ).click(function() {
  		$( "div.blog-posts2" ).show( "slow" );
		});
	$( "button.hide" ).click(function() {
  		$( "div.blog-posts2" ).hide( 1000 );
		});
	// Hamburger menu
	$('.hamburger').on('click', function(){
		   		// toggle class show on the menu
		   		$('.menu').toggleClass('show');
		   	});

		$('.exit-responsive').on('click', function(){
		   		// toggle class show on the menu
		   		$('.menu').toggleClass('show');
		   	});
	

		

	});

	
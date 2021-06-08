$(document).ready(function(){

  $('.problems__slider-container').slick({
  	arrows: false,
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 2000,
  });

  $('.plans__slider-container').slick({
  	arrows: false,
	  infinite: false,
	  speed: 300,
	  slidesToScroll: 1,
	  autoplay: true,
  	autoplaySpeed: 2000,
	  // centerMode: true,
	  // variableWidth: true

	  responsive: [
	  {
      breakpoint: 768,
      settings: {
    	  slidesToShow: 1,
			  centerMode: true,
			  variableWidth: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3, 
      }
    },
    {
      breakpoint: 10000,
      settings: {
    	  slidesToShow: 4,
      }
    },
    
  ]

  });

  
  $('.reviews__slider-container').slick({
  	arrows: false,
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 2000,
  });


});


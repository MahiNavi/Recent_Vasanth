function opennav()
        {
			document.getElementById('mega-menu').style.width="20%";
			document.getElementById('mega-menu').style.display="block";
		}
function closenav()
        {
			document.getElementById('mega-menu').style.width="0%";
		}
$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
  });
	 // Custom Button
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
});		
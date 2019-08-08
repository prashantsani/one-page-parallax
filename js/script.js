/*

	
	HTML,CSS,JS Code By Prashant Sani.
	http://www.openstrategy.design/
	https://prashantsani.com

*/

/* ------------
	Feature Detection
------------ */
// Fallback for SVG
if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
  });
}
// Fallback for WEBP
Modernizr.on('webp', function(result) {
  if (result) {
    console.log('Webp Supported');
  } else {
    console.log('Webp NOT Supported');
  }
});

/* ------------
	Plugins
------------ */


(function(w,d){
	function _$(element){
		return d.querySelectorAll(element);
	}

	var changeImage = _$('.change-image'),
			flipSection = _$('.flip-section'),
			customise = _$('.product-features-customise'),
			crop = _$('.product-features-crop');


	changeImage[0].addEventListener('click', function(){
		var value_1 = _$('.family-1')[0].getAttribute('aria-hidden')==='false' ? 'true' : 'false' ;
				value_2 = value_1 === 'true' ? 'false' : 'true';

		_$('.family-1')[0].setAttribute('aria-hidden',value_1);
		_$('.family-2')[0].setAttribute('aria-hidden',value_2);
	});

	flipSection[0].addEventListener('click', function(){
		
	});



	/* ------------
		Form Submit
	------------ */
	// document.getElementById("contactForm").onsubmit = function() {
	// 		//Ajax
	// 		var dataString = {
	// 			"name" :$("#name").val(),
	// 			"email": $("#email").val(),
	// 			"subject": $("#subject").val(),
	// 			"message":$("#message").val()
	// 		}

	// 		$.ajax({
	// 			url: "https://formspree.io/",
	// 			method: "POST",
	// 			data: dataString,
	// 			dataType: "json",
	// 			success: function(data) {
	// 				alert('successfully submitted form!');
	// 				$("#name").val('');
	// 				$("#email").val('');
	// 				$("#subject").val('');
	// 				$("#message").val('');
	// 			},
	// 			error: function(){
	// 				alert('Error!');
	// 			}
	// 		});
	// }
})(window,document);

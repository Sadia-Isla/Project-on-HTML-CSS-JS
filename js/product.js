
//Reference: https://html.form.guide/calculation-forms/simple-html-calculation-form/

//js for Update price instantly based on the selected quantity
function calculateTotal()
{
  let unit_price={
    tunic: 45,
       
  };
  let item_price={}
  
  item_price.tunic = ($("#qty_tunic").val() * unit_price.tunic )
  $("#price_tunic").val(item_price.tunic);
  
      
  
  let total = item_price.tunic ;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

//Reference: https://www.w3schools.com/howto/howto_js_slideshow.asp

// js for image gallery 
			var slideIndex = 1;
			showSlides(slideIndex);

			// Next/previous controls
			function plusSlides(n) {
			  showSlides(slideIndex += n);
			}

			// Thumbnail image controls
			function currentSlide(n) {
			  showSlides(slideIndex = n);
			}

			function showSlides(n) {
			  var i;
			  var slides = document.getElementsByClassName("mySlides");
			  var dots = document.getElementsByClassName("demo");
			  var captionText = document.getElementById("caption");
			  if (n > slides.length) {slideIndex = 1}
			  if (n < 1) {slideIndex = slides.length}
			  for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			  }
			  for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			  }
			  slides[slideIndex-1].style.display = "block";
			  dots[slideIndex-1].className += " active";
			  captionText.innerHTML = dots[slideIndex-1].alt;
			}
		

console.log(total); 


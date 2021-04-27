//https://www.w3schools.com/js/js_array_methods.asp
//https://stackoverflow.com/questions/61832119/filter-price-range-with-drop-down
//https://www.google.com/search?q=summer+womens+tops+&tbm=isch&ved=2ahUKEwiPnPe79q7vAhVGLK0KHYygCVkQ2-cCegQIABAA&oq=summer+womens+tops+&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIECAAQHjIGCAAQBRAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeUL1tWL1tYJ1zaABwAHgAgAHOAogBzgKSAQMzLTGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=Oo5NYI-XJcbYtAWMwabIBQ&bih=578&biw=1280&rlz=1C1CHBF_enCA936CA936

//product inside of an array

var data = [
	{
		"make": "Artista",
		"name": "Chiffon Tops",
		"material": "Chiffon",
		"price": "$1200",
		"rating":"5",
		"image": "http://cdn.shopify.com/s/files/1/0251/9783/8435/products/product-image-957403220_1024x1024.jpg?v=1571722259"
	},
	{
		"make": "Vena",
		"name": "Green Tops",
		"material": "Georget",
		"price": "$1,400",
		"rating":"4",
		"image": "https://ae01.alicdn.com/kf/Hb38bc9e50dc545979f37da5d08e6b909m/Plus-Size-Women-Tops-Floral-Embroidery-Chiffon-Blouse-Shirt-Fashion-Womens-Tops-And-Blouses-2021-Long.jpg_q50.jpg"
	},
	{
		"make": "Hamp",
		"name": "Red Shirt-Casual",
		"material": "100% Cotton",
		"price": "$2,500",
		"rating":"3",
		"image": "https://rukminim1.flixcart.com/image/332/398/kflftzk0/top/b/j/j/l-gr5693-maroon-harpa-original-imafwyuxkvhhupwb.jpeg?q=50"
	},
	{
		"make": "Hamp",
		"name": "Floral Print Tops",
		"material": "Chiffon",
		"price": "$2,100",
		"rating":"4",
		"image": "https://cdn.shopify.com/s/files/1/1812/7849/products/Womens-Tops-and-Blouses-2020-Spring-Casual-Chiffon-Blouse-Floral-Print-Stand-Collar-Long-Sleeve-Plus.jpg_640x640_422e498f-272b-4d08-9ae7-07fad9572546_grande.jpg?v=1593192786"
	},
	{
		"make": "Artisana",
		"name": "Pink Drapped Tops",
		"material": "Georget",
		"price": "$4,000",
		"rating":"5",
		"image": "https://pipiluxury.com/wp-content/uploads/2020/03/2020-Summer-2-Pieces-Set-Women-Tops-Shorts-Loose-Fashion-Casual-Round-Collar-Sleeveless-Solid-Color.jpg"
	},
	{
		"make": "Feminisa",
		"name": "Yellow Full Sleeve Tops",
		"material": "Silk",
		"price": "$5,000",
		"rating":"5",
		"image": "https://cdn.shopify.com/s/files/1/0004/4489/1191/products/Summer-Women-Ruffle-Blouse-Flare-Long-Sleeve-Blouses-Shirt-Casual-Solid-Yellow-Women-Tops-Blusa-Femininas_1024x.jpg?v=1579999110"
	},
	{
		"make": "Armana",
		"name": "Red Tunic",
		"material": "Viscose",
		"price": "$2,500",
		"rating":"4",
		"image": "https://ae01.alicdn.com/kf/HTB1CUFzLVXXXXXYaXXXq6xXFXXXh/womens-tops-fashion-2016-Elegant-Formal-Women-Top-font-b-Blouses-b-font-Cape-Shirts-Casual.jpg"
	}
];


var products = "",
	makes = "",
	names = "",
	materials = "",
	prices = "",
	ratings =" ";

  
for (var i = 0; i < data.length; i++) {
	var make = data[i].make,
		name = data[i].name,
		material = data[i].material,
		price = data[i].price,
		rating =data[i].rating,
		rawPrice = price.replace("$",""),
		rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make +  "' data-name='" + name + "' data-material='" + material + "'  data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Make: " + make + "<br />Name: " + name + "<br />Material: " + material + "<br />Price: " + price +  "<br/>Rating: " +rating + "  </div></div>";
	
	
	//create dropdown of makes
	if (makes.indexOf("<option value='" + make+"'>" + make + "</option>") == -1) {
		makes += "<option value='" + make + "'>" + make + "</option>";
	}
	
	//create dropdown of namess
	if (name.indexOf("<option value='" + name+"'>" + name + "</option>") == -1) {
		names += "<option value='" + name + "'>" + name + "</option>";	
		
	}

	
	//create dropdown of material
	if (material.indexOf("<option value='" + material + "'>" + material + "</option>") == -1) {
		materials += "<option value='" + material + "'>" + material + "</option>";
	}
	
	//create dropdown of prices
   if (prices.indexOf("<option value='" + price + "'>" + price + '</option>') == -1) {
    prices += "<option value='" + price + "'>" + price + '</option>';
   }
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-name").append(names);
$(".filter-material").append(materials);
$('.filter-price').append(prices);



var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
      if (key === 'price') {
  
        var rawPrice = filtersObject[key].replace('$', '').replace(',', '')
        filters += '[data-' + key + "='" + rawPrice + "']"
      } else {
        filters += '[data-' + key + "='" + filtersObject[key] + "']"
      }
    }
	}
	
	if (filters == "") {
		$(".product").show();
	}	
	else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}

});


//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
			name = $(this).data("name").toLowerCase(),
			material = $(this).data("material").toLowerCase();

		if (make.indexOf(query) > -1 || name.indexOf(query) > -1 || material.indexOf(query) > -1) {
			$(this).show();
		}
	});
});


		
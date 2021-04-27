
//https://stackoverflow.com/questions/39605924/searching-and-sorting
///https://codepen.io/rennan/pen/yrjxJe

//product search and sorting inside of an array

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	var imgPath = "https://picsum.photos/600/400?random=";
	$scope.priceFilter = '';
	$scope.ratingFilter = '';
	$scope.dtsinCart = 0;
	$scope.products = [{
			name: "Tunic",
			discount: "50%",
			price: 1500,
			brand: "Fema",
			rating: " ",
			addedToCart: false,
			image: "http://cdn.shopify.com/s/files/1/0251/9783/8435/products/product-image-957403220_1024x1024.jpg?v=1571722259",
			quantity: 0
		},
		{
			name: "Chiffon Tops",
			discount: "10%",
			price: 1900,
			brand: "Armana",
			rating:" ",
			addedToCart: false,
			image: "https://ae01.alicdn.com/kf/Hb38bc9e50dc545979f37da5d08e6b909m/Plus-Size-Women-Tops-Floral-Embroidery-Chiffon-Blouse-Shirt-Fashion-Womens-Tops-And-Blouses-2021-Long.jpg_q50.jpg",
			quantity: 0
		},
		{
			name: "Ladies Shirt ",
			discount: "20%",
			price: 2100,
			brand: "Hamp",
			rating:" ",
			addedToCart: false,
			image:"https://rukminim1.flixcart.com/image/332/398/kflftzk0/top/b/j/j/l-gr5693-maroon-harpa-original-imafwyuxkvhhupwb.jpeg?q=50",
			quantity: 0
		},
		{
			name: "Party Tops",
			discount: "30%",
			price: 4000,
			brand: "Vena",
			rating: " ",
			addedToCart: false,
			image: "https://cdn.shopify.com/s/files/1/1812/7849/products/Womens-Tops-and-Blouses-2020-Spring-Casual-Chiffon-Blouse-Floral-Print-Stand-Collar-Long-Sleeve-Plus.jpg_640x640_422e498f-272b-4d08-9ae7-07fad9572546_grande.jpg?v=1593192786",
			quantity: 0
		},
		{
			name: "Bond Hem Tops",
			discount: "60%",
			price: 3100,
			brand: "Feminisa",
			rating:" ",
			addedToCart: false,
			image: "https://pipiluxury.com/wp-content/uploads/2020/03/2020-Summer-2-Pieces-Set-Women-Tops-Shorts-Loose-Fashion-Casual-Round-Collar-Sleeveless-Solid-Color.jpg",
			quantity: 0
		},
		{
			name: "Drapped Tops",
			discount: "20%",
			price: 2500,
			brand: "Amirjan",
			rating: " ",
			addedToCart: false,
			image: "https://cdn.shopify.com/s/files/1/0004/4489/1191/products/Summer-Women-Ruffle-Blouse-Flare-Long-Sleeve-Blouses-Shirt-Casual-Solid-Yellow-Women-Tops-Blusa-Femininas_1024x.jpg?v=1579999110",
			quantity: 0
		},
		{
			name: "Ladies soft Tunic",
			discount: "20%",
			price: 1200,
			brand: "Armana",
			rating:" ",
			addedToCart: false,
			image: "https://ae01.alicdn.com/kf/HTB1CUFzLVXXXXXYaXXXq6xXFXXXh/womens-tops-fashion-2016-Elegant-Formal-Women-Top-font-b-Blouses-b-font-Cape-Shirts-Casual.jpg",
			quantity: 0
		},

	];
	
	

   
	$scope.addToCart = function () {
		alert('Product Added to Cart successfully')
		return "success";
	}
	
	

	
	//create scope variable options that has 'Low Price to High' and 'High Price to Low' values.
	$scope.options = ['Low Price to High', 'High Price to Low'];

	//add selectPriceFilter function that assign scope priceFilter to true / false based on condition
	$scope.selectPriceFilter = function (priceFilter) {

		if (priceFilter == 'Low Price to High') {
			$scope.priceFilter = false;
		} else if (priceFilter == 'High Price To Low') {
			$scope.priceFilter = true;
		}
	};
})
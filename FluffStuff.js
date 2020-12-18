// JavaScript Document
//Global Variables
//Product Page Editing Fill Title
let localStorageCount = 0;

var addPillow = "";
let cartfill = "";
let subtotal= 0;
let totalcost= "";
let tax ="";

//Product Page Stuff
	//Change Title of Fill
	function fillTitle(){
		var x = document.getElementById("pfill");
		var i = x.selectedIndex;
		document.getElementById("fillinsert").innerHTML = x.options[i].text;
}
	//Change The Price to reflect the selected Quantity
	function pricequantChange(){
		var x = document.getElementById("pquantity");
		var i = x.selectedIndex;
		document.getElementById("pprice").innerHTML = x.options[i].text * 30;
}
//Full Site stuff
//Setting up the array of pillows first as that's gonna be transfered
	let pillowArray = [];
	//Change Cart Quantity # & Info
	//Add Item to Cart
		//Set up Pillow in COnstructor Function! to establish it is a group that new things can be made of it - the capital P = constructor
		function Pillow (shape,color,fill,quantity,price,image,name){
			this.shape = shape;
			this.color = color;
			this.fill = fill;
			this.quantity = quantity;
			this.price = price;
			this.image = image;
			this.name = function(){return this.shape + " in " + this.color + " with " + this.fill + " Filling";};
		}
		//Make it so that a new pillow is created and populated when the submit button is pressed on the product page.
		function addToCart (e){
			let shape = document.getElementById("pshape").innerHTML;
			let color = document.getElementById("pcolor").innerHTML;
			let fill = document.getElementById("pfill").value;
			let price = document.getElementById("pprice").innerHTML;
			let quantity = function(){return this.price/30};
			let image = document.getElementByClassName("mainProductImage").innerHTML;
			let name = function(){return this.shape + " in " + this.color + " with " + this.fill + " Filling";};
			
			new Pillow (shape,color,fill,quantity,price,image,name);
			
			let subtotal = document.getElementById("cartcount").innerHTML += this.quantity;

			window.localStorage.setItem("pillowArray",JSON.stringify(product));
			pillowArray.push(pillow);
	
			console.log(JSON.parse(window.localStorage.getItem("pillowArray",JSON.stringify(product))));
		}
			//functions dependent upon this imput
			function getTotalCost(){
				return document.getElementById("cartcount").innerHTML * 30;
			}

			function 
    //CardTemplate (Pillow.shape, Pillow.color, Pillow.fill, Pillow.quantity, Pillow.price, Pillow.image, Pillow.name);
    
	//Remove Item from Cart

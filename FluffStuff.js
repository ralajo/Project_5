// JavaScript Document
var localStorageCount = 0;
var shape = "";
var color = "";
var fill = "";
var quantity = "";
var price = "";
var image = "";
var addPillow = "";
var cartfill = "";
var subtotal= "";
var totalcost= "";
var tax ="";

function fillTitle(){
	var x = document.getElementById("pfill");
	var i = x.selectedIndex;
	document.getElementById("fillinsert").innerHTML = x.options[i].text;
}

function pricequantChange(){
	var x = document.getElementById("pquantity");
	var i = x.selectedIndex;
	document.getElementById("pprice").innerHTML = x.options[i].text * 30;
}
function Pillows(shape,color,fill,quantity,price,image,name){
	this.shape = shape;
	this.color = color;
	this.fill = fill;
	this.quantity = quantity;
	this.price = price;
	this.image = image;
	this.name = function(){this.shape + "in" + this.color;};
}
function addToCart() {
	shape = document.getElementById("pshape").innerHTML;
	color = document.getElementById("pcolor").innerHTML;
	fill = document.getElementById("fillinsert").innerHTML;
	price = document.getElementById("pprice").innerHTML;
	quantity = this.price/30;
	image = document.getElementById("MHRBig");
	
	addPillow = new Pillows(shape,color,fill,quantity,price,image,name);
	alert(this.quantity + " "+ this.name + " with "+ this.fill + " ADDED TO CART")
	
	window.localStorage.setItem(localStorageCount, JSON.stringify(addPillow));
}

function openCart(){
	for (i = 0; i < lsc; i++) {
		item = JSON.parse(window.localStorage.getItem(i));
		var itemKey = window.localStorage.key(i);
		if (item === null) {
			break;
		} else {
			var quantityCount = document.getElementById("quantityCount");
			quantityCount.innerText = item.quantity;
			document.getElementById("quantityCount").style.visibility = "visible";

			document.getElementById("cartTotalItems").innerHTML += item.quantity
			document.getElementById("cartItems").innerHTML += 
			document.getElementById("cartItemQuantity").innerHTML += item.quantity;
			document.getElementById("cartItemFill").innerHTML += item.fill;
			document.getElementById("cartPriceDetails").innerHTML += item.price;

			updateSubtotal();
			calcTax();
			calcDiscount();
			calcFinalTotal();
		}
	}
}

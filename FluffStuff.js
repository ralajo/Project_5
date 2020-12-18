// JavaScript Document
//Global Variables
//Product Page Editing Fill Title
function fillTitle(){
	var x = document.getElementById("pfill");
	var i = x.selectedIndex;
	return document.getElementById("fillinsert").innerHTML = x.options[i].text;
}

function pricequantChange(){
	var x = document.getElementById("pquantity");
	var i = x.selectedIndex;
	return document.getElementById("pprice").innerHTML = x.options[i].text * 30;
}

let pillowArray = [];

function CardTemplate (parentEl, shape, color, fill, quantity, price, image, name){
	let divContainer = document.createElement("div");
	divContainer.className = "card";
	parentEl.appendChild(divContainer);
	
	let img = document.createElement("img");
	img.src = image;
	img.width = 200;
	divContainer.appendChild(img);
	
	let divTextContainer = document.createElement("div");
	divTextContainer.className = "text";
	divContainer.appendChild(divTextContainer);
	
	let header = document.createElement("h2");
	header.innerHTML = name;
	divTextContainer.appendChild(header);
	
	let quant = document.createElement("p");
	quant.innerHTML = quantity;
	divTextContainer.appendChild(quant);
	
	let pricetag = document.createElement("p");
	pricetag.innerHTML = price;
	divContainer.appendChild(pricetag);
	
	let shapepil = document.createElement("p");
	shapepil.innerHTML = shape;
	divTextContainer.appendChild(shapepil);
	
	let colorpil = document.createElement("p");
	colorpil.innerHTML = color;
	divTextContainer.appendChild(colorpil);
	
	let fillpil = document.createElement("p");
	shapepil.innerHTML = fill;
	divTextContainer.appendChild(fillpil);
	
	return divContainer;
	
	let removebtn = document.createElement('button');
	removebtn.textContent = 'remove!';
	removebtn.onclick = function () {
    const pillow = {
		header: name,
		quant: quantity,
		img: image,
		pricetag: price,
		shapepil: shape,
		colorpil: color,
		fillpil: fill,
    }
    pillowArray.push(pillow);
    const json = window.localStorage.setItem("pillowArray",JSON.stringify(pillow));
  };
  divContainer.appendChild(removebtn);

  return divContainer;
}

  // new function to load dogs from localStorage - walk through this in exercise
function onLoad() {
  const myPillows = localStorage.getItem("pillowArray");
  if(myPillows === null) {
    return;
  }
  else {
    const cartItems = JSON.parse(myPillows);
    // End of Part 2
    // CardTemplate(divDoggoContainer, savedDogs.header, savedDogs.body, savedDogs.imgUrl);
    // End of Part 3
    cartItems.forEach((pillow) => {
      CardTemplate (divDoggoContainer, pillow.header, pillow.quant, pillow.img, pillow.shapepil, pillow.colorpil, pillow.fillpil, pillow.pricetag);
      pillowArray.push(pillow);
    });
  return;
  }
}

function createnewitem(containerEl) {
	let shape = document.getElementById("pshape").innerHTML;
	let color = document.getElementById("pcolor").innerHTML;
	let fill = document.getElementById("pfill").value;
	let price = document.getElementById("pprice").innerHTML;
	let quantity = function(){return this.price/30};
	let image=document.getElementByClassName("mainProductImage").innerHTML;
	let name = function(){return this.shape + " in " + this.color + " with " + this.fill + " Filling";};
    CardTemplate(containerEl, shape, fill, price, quantity, image, color, name)
    }

let aCreateRandom = document.getElementById("a-create-random");
const divDoggoContainer = document.getElementById("div-doggos");
aCreateRandom.onsubmit = function (e) {
  e.preventDefault();
   createnewitem(divDoggoContainer);
};
// JavaScript Document
/*var localStorageCount = 0;
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
*/

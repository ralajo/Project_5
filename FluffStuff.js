// JavaScript Document
//Global Variables
//Product Page Editing Fill Title

let localStorage = 0;	
let pillowArray = [];
//Product Page Stuff

	//Change Title of Fill
function filltitle(){
		let x = document.getElementById("pfill");
		let i = x.selectedIndex;
		return document.getElementById("fillinsert").innerHTML = x.options[i].text;
}
	//Change The Price to reflect the selected Quantity
function pricequantchange(){
		var x = document.getElementById("pquantity");
		var i = x.selectedIndex;
		return document.getElementById("pprice").innerHTML = x.options[i].text * 30;
}
//Full Site stuff
function cardTemplate (parentEl, shape, color, fill, quantity, price, image, name){
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
	
// remove pillow based on doggo excersize format with splice instead of push and removeItem instead of saveItem!!
	let removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove!';
		removeBtn.onclick = function (){
		const pillow = {
		header: name,
		quant: quantity,
		pricetag: price,
		colorpil: color,
		fillpil: fill,
		shapepil: shape,
		img: image
		}
		pillowArray.splice(pillow);
		const json = JSON.stringify(pillowArray);
		localStorage.removeItem("myPillows", json);
		};
	divContainer.appendChild(removeBtn);
	return divContainer;

  }
//Setting up the array of pillows first as that's gonna be transfered
	//Change Cart Quantity # & Info
	//Add Item to Cart
		//Set up Pillow in COnstructor Function! to establish it is a group that new things can be made of it - the capital P = constructor
		/*const Pillow (shape, color, fill, quantity, price, image, name){
			this.shape : shape,
			this.color : color,
			this.fill : fill,
			this.quantity : quantity,
			this.price : price,
			this.image : image,
			this.name : function(){return this.shape + " in " + this.color + " with " + this.fill + " Filling";}
		} get selected item fom fromtend then set local storage and do get drau*/
		//Make it so that a new pillow is created and populated when the submit button is pressed on the product page.

class Pillow{
constructor(shape, color, fill, quantity, price, image ){
			this.shape = shape; 
			this.color = color;
			this.fill = fill;
			this.quantity = quantity;
			this.price = price;
			this.image = image;
	}
		getPillowName(){
			return this.shape + " in " + this.color + " with " + this.fill + " filling";
	}
}


function addToCart(){
			let shape = document.getElementById("pshape").innerHTML;
			let color = document.getElementById("pcolor").innerHTML;
			let fill = document.getElementById("fillinsert").innerHTML;
			let quantity = document.getElementById("pquantity").value;
			let price = document.getElementById("pprice").innerHTML;
			let image = document.getElementById("MHRBig").src;
		
			let fish = new Pillow(shape, color, fill, quantity, price, image);
			console.log(JSON.stringify(fish));
			fish.name = fish.getPillowName();
			console.log(JSON.stringify(fish));
			pillowArray.push(fish);
			
			
			window.localStorage.setItem("pillowArray",JSON.stringify(pillowArray));
	console.log(pillowArray);
	console.log(fish);

		}
			//functions dependent upon this imput
			function getTotalCost(){
			var x = this.quantity;
			var y = document.getElementById("cartcount").innerHTML
			document.getElementById("cartcount").innerHTML= x * y * 30;
				
			}

    //CardTemplate (Pillow.shape, Pillow.color, Pillow.fill, Pillow.quantity, Pillow.price, Pillow.image, Pillow.name);
    
	//Remove Item from Cart



  // new function to load dogs from localStorage - walk through this in exercise
function onLoad() {
	console.log("hi i made it to the cart")
  let cartitems = window.localStorage.getItem("pillowArray");
  if( pillowArray === null) {
    return;
  }
  else {
  cartitems = JSON.parse(cartitems);
    cartitems.forEach(fish => {
      let card = cardTemplate (fish.header, fish.quant, fish.img, fish.shapepil, fish.colorpil, fish.fillpil, fish.pricetag);
      //pillowArray.push(f);
	console.log(card);
    });
  return;
  }
}

/*function addToCart() 
		let shape = document.getElementById("pshape").innerHTML;
		let color = document.getElementById("pcolor").innerHTML;
		let fill = document.getElementById("pfill").value;
		let price = document.getElementById("pprice").innerHTML;
		let quantity = function(){return this.price/30};
		let image = document.getElementByClassName("mainProductImage").innerHTML;
		let name = function(){return this.shape + " in " + this.color + " with " + this.fill + " Filling";};	
		
		let product = new Pillow (this.shape,color,fill,quantity,price,image,name);

		window.localStorage.setItem("pillowArray",JSON.stringify(Pillow));
		pillowArray.push(pillow);
		return JSON.parse(window.localStorage.getItem("pillowArray",JSON.stringify(Pillow)));
	
	
    CardTemplate (Pillow.shape, Pillow.color, Pillow.fill, Pillow.quantity, Pillow.price, Pillow.image, Pillow.name);
    
}
let aCreateRandom = document.getElementById("a-create-random");
const divDoggoContainer = document.getElementById("div-doggos");
aCreateRandom.onsubmit = function (e) {
  e.preventDefault();
   createnewitem(divDoggoContainer);
};
*/
/*
function addToCart(){
	let shape = document.getElementById("pshape").innerHTML;
	let color = document.getElementById("pcolor").innerHTML;
	let fill = document.getElementById("pfill").value;
	let price = document.getElementById("pprice").innerHTML;
	let quantity = function(){return this.price/30};
	let image=document.getElementByClassName("mainProductImage").innerHTML;
	new Pillow (shape,color,fill,quantity,price,image,name);
	
	window.localStorage.setItem("pillowArray",JSON.stringify(Pillow));
	return JSON.parse(window.localStorage.getItem("pillowArray",JSON.stringify(Pillow)));
    CardTemplate (parentEl, shape, color, fill, quantity, price, image, name);
    }
	*/

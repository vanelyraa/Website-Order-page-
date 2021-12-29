//map the prices for drop down in Array
var pizzas_prices = new Array();
	pizzas_prices["large"]=5.00;
	pizzas_prices["extra"]=7.00;
	pizzas_prices["super"]=17.00;

//This function finds the filling price based on the drop down selection
function getPizzasPrice()
{
	var pizzaPriceSize=0;
    //Get a reference to the form
	var theForm = document.forms["pizzaform"];
    //Get a reference to the select id
	var selectedSize = theForm.elements["pizzas"];
     
    //set Price equal to value user chose
	pizzaPriceSize = pizzas_prices[selectedSize.value];
	 if(selectedSize.value=="super"){
		alert('Super supersize alert, unhealthy option....');
	}
    //finally we return var
	return pizzaPriceSize;
}

function getQuantity()
{
	var howmany= 0
 //Assume form with id	
	var theForm = document.forms["pizzaform"];
 //Get a reference to the TextBox
	var quantity = theForm.elements["quantity"];
	//If the textbox is not blank
	if(quantity.value!=""){
		howmany = parseInt(quantity.value);
	}
	return howmany;
}

function getDiscount()
{
	//Assume form with id	
	var theForm = document.forms["pizzaform"];
 //Get a reference to the TextBox
	var discount = theForm.elements["coupon"];
	//If the textbox is not blank
	if(coupon.value=="extracheese"){
		percent = 0.9;
	}else
	{
		percent = 1;
	}
	return percent;
}

function calculateTotal(){
//Here we get the total price by calling our function
//Each function returns a number so by calling them we add the values they return together
	var pizzapricett = (getPizzasPrice() * getQuantity()) * getDiscount();

//display the result
	var divobj = document.getElementById("totalPrice");
	divobj.style.display="block"
	divobj.innerHTML = "Total Order Amount &euro; " + pizzapricett;
}

function hideTotal()
{
	var divobj = document.getElementById("totalPrice");
	divobj.style.display="none";
}


//defino variables y arrays
var añadir = false;
var nombreArticuloCarro = new Array();
var precioCarro = new Array();
var unidadesCarro = new Array();
var calculoTotalPrecio = new Array();
var acabadoDeAñadir = false;
var sumita = 0.0;

//por si quiero poner algo nada mas cargar la web
window.onload = function(){

}

//oculto y muestro las cajas para pagar cuando es pertinente
window.onload = function ocultaPagos(){
	document.getElementById("pagoTarjeta").style.display = "none";
	document.getElementById("pagoEfectivo").style.display = "none";
	document.getElementById("nombreArt").focus();
}

//funcion que quita el atributo disabled a imprimir cuando se clica checkbox, mediante remove y set attribute
function activarBoton (){
var checkbox = document.getElementById("acepto");
	var botonImprimir = document.getElementById("imprimir");
	if (checkbox.checked==true){
		botonImprimir.removeAttribute('disabled');
	}else if (checkbox.checked == false){
		botonImprimir.setAttribute("disabled", "disabled");
	}

}

//uso arrays y loops para dar todos los articulos añadidos al carrito y su precio. Sobreescribo el value en html
function añadirCarrito(){
	var i = 0;
	var contador = 0;
	var botonAñadir = document.getElementById("añadir");
	var a;

//error si se intenta añadir algo con los huecos vacios
if (document.getElementById("nombreArt").value == "" && document.getElementById("precioArt").value == 0){
	document.getElementById("error3").innerHTML = "Error. Rellena el nombre y precio.";
	document.getElementById("error1").innerHTML = "";
	document.getElementById("error2").innerHTML = "";
}else if (document.getElementById("nombreArt").value == ""){
	document.getElementById("error1").innerHTML = "Error. Rellena el nombre de artículo.";
	document.getElementById("error2").innerHTML = "";
	document.getElementById("error3").innerHTML = "";
}else if (document.getElementById("precioArt").value == 0){
	document.getElementById("error2").innerHTML = "Error. Rellena el precio de artículo.";
	document.getElementById("error1").innerHTML = "";
	document.getElementById("error3").innerHTML = "";
}else{
	document.getElementById("error1").innerHTML = "";
	document.getElementById("error2").innerHTML = "";
	document.getElementById("error3").innerHTML = "";
}

//error si en el precio se pone NaN
if (isNaN(document.getElementById("precioArt").value)){
	document.getElementById("error2").innerHTML = "Error. El precio no es un número";
}else{
	document.getElementById("error2").innerHTML = "";
}

//añado a cada array el valor que se introduzca en las cajas de texto
	a = document.getElementById("nombreArt").value;
	newLength = nombreArticuloCarro.push(a);
	//sobrescribo el value para poner todos los articulos escritos
	document.getElementById("artCarrito").value = nombreArticuloCarro; 
	
	//meto en un array la multiplicacion de unidades
	var precioArticulo = 0;
	var unidadesArticulo = 0;
	var multiplArts = 0;
	var finalBill = 0;
	var sumaCalculoTotal = 0;
	var numeroArticulosIntroducidos = 0;

	precioArticulo = document.getElementById("precioArt").value;
	unidadesArticulo = document.getElementById("unidades").value;
	multiplArts = parseFloat(precioArticulo) * parseFloat(unidadesArticulo);
	calculoTotalPrecio.push(multiplArts);
	numeroArticulosIntroducidos = calculoTotalPrecio.length;
	console.log(calculoTotalPrecio);
	
//sumo los resultados de multiplicar unidades por precio para sacar el coste total. NO FUNCIONA CON DECIMALES a la hora de sumar el total
	for (let n = 0; n < calculoTotalPrecio.length; n++){
		sumita = sumita + calculoTotalPrecio[n];
		}

	document.getElementById("precioCarrito").value = sumita;
	document.getElementById("nombreArt").value = ""; 
	document.getElementById("precioArt").value = ""; 
	document.getElementById("unidades").value = 1; 
	document.getElementById("nombreArt").focus();

}
  
//mostrar los pagos y calcular el precio total del carrito
function mostrarPago(){
	if (document.getElementById("formaPago").value == "tarjeta"){
		document.getElementById("pagoTarjeta").style.display = "block";
		document.getElementById("pagoEfectivo").style.display = "none";
	}else if(document.getElementById("formaPago").value == "efectivo"){
		document.getElementById("pagoEfectivo").style.display = "block";
		document.getElementById("pagoTarjeta").style.display = "none";
		document.getElementById("importeEfectivo").value = sumita;
	}else{
		document.getElementById("pagoTarjeta").style.display = "none";
		document.getElementById("pagoEfectivo").style.display = "none";
	}

}

function resetea(){
	document.getElementById("nombreArt").focus();
}

function print(){
	let comoPagaste;
	if (document.getElementById("formaPago").value == "tarjeta"){
		comoPagaste = "es con tarjeta."
	}else if(document.getElementById("formaPago").value == "efectivo"){
		comoPagaste = "es en efectivo."
	}else{
		comoPagaste = "no ha sido indicada. Por favor, introduce una forma de pago válida."
	}
	alert("Vas a comprar los siguientes productos: " + nombreArticuloCarro + " por el precio de " + sumita + "€. Tu forma de pago " + comoPagaste);
}


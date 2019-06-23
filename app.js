


var a;

var b;

var operacion;



function Calculadora(){
//capturar botones/elementos del DOM
  var resultado = document.getElementById("display");
  var on = document.getElementById("on");
  var signo = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var dividido = document.getElementById("dividido");
  var multiplica = document.getElementById("por");
  var resta = document.getElementById("menos");
  var suma = document.getElementById("mas");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");



//Eventos

uno.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +1;
} else{ display.innerHTML=1}
}
}

dos.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +2;
} else{ display.innerHTML=2}
}
}

tres.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +3;
} else{ display.innerHTML=3}
}
}//SI EL CONTENIDO EN EL DISPLAY ES DE LARGO MENOR A 8 Y SI EL CONTENIDO EN DISPLAY ES DISNTINTO DE CERO, SE VA A IMPRIMIR EL CONTENIDO DEL DISPLAY ACTUAL MAS EL NUMERO PRESIONADO, SI NO (ES DECIR SE PRESIONA UN CERO), SOLO EL NUMERO PRESIONADO

cuatro.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +4;
} else{ display.innerHTML=4}
}
}

cinco.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +5;
} else{ display.innerHTML=5}
}
}

seis.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +6;
} else{ display.innerHTML=6}
}
}

siete.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +7;
} else{ display.innerHTML=7}
}
}

ocho.onclick=function(){
if(display.innerHTML.length<=8) {
if(display.innerHTML !=="0") {display.innerHTML = display.innerHTML +8;
} else{ display.innerHTML=8}
}
}


nueve.onclick = function() {
if (display.textContent.length <= 8) {
if (display.textContent !== "0") {
display.innerHTML = display.innerHTML + 9;
} else {
display.innerHTML = 9
}
}
}

cero.onclick = function() {
if (display.textContent.length <= 8) {
if (display.textContent !== "0") {
display.innerHTML = display.innerHTML + 0;
} else {
display.innerHTML = 0
}
}
}



//operaciones

suma.onclick = function(){
  a=display.innerHTML;//el operando a se va a guardar como contenido html en el display
  operacion= "+";
   limpiar();}

 resta.onclick = function(){
 a=display.innerHTML;//el operando a se va a guardar como contenido html en el display
 operacion= "-";
  limpiar();}

 dividido.onclick = function(){
  a=display.innerHTML;//el operando a se va a guardar como contenido html en el display
  operacion= "/";
   limpiar();}
 multiplica.onclick = function(){
     a=display.innerHTML;//el operando a se va a guardar como contenido html en el display
     operacion= "*";
    limpiar();}

on.onclick= function(){
  resetear();
}

igual.onclick=function(){

  b= display.innerHTML;
  resolver();//llama a la funcion de resolver la operacion

}


//funciones


function  limpiar(){
  display.innerHTML= " ";
}

function resetear(){

  limpiar();
  a=0;
  b=0;
  operacion= "";
  display.innerHTML=0;
}

function resolver(){
  var res= 0;

  switch (operacion) {
    case "+":
    res= parseFloat(a)+ parseFloat(b)

      break;
      case "-":
      res= parseFloat(a)- parseFloat(b)

        break;
        case "*":
        res= parseFloat(a)* parseFloat(b)

          break;
          case "/":
          res= parseFloat(a)/ parseFloat(b)

            break;


  }

  resetear();
  display.innerHTML=res;

}
}

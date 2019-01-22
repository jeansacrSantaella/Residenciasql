function otro() {
var newlabel1 =document.createElement("label");
	newlabel1.id = "label1";
	newlabel1.innerHTML= " Número de Personas ";
var newInput1 = document.createElement("input");
	newInput1.id = "input1";
	newInput1.size =3;
	newInput1.pattern ="[0-9]{1,3}"
	newInput1.value =0;
var newlabel2 =document.createElement("label");
	newlabel2.innerHTML = " Habitaciones Disponibles ";
	newlabel1.id = "label2";
var newInput2 = document.createElement("input");
	newInput2.id = "input2";
	newInput2.size =3;
	newInput2.value =0;
	newInput2.pattern ="[0-9]{1,3}"
var newBr = document.createElement("br");
	newBr.id = "salto";
var newBr2 = document.createElement("br");
	newBr2.id = "salto2";


var respuesta = document.getElementById("otro");
	respuesta.appendChild(newlabel1);
	respuesta.appendChild(newInput1);
	respuesta.appendChild(newlabel2);
	respuesta.appendChild(newInput2);
	respuesta.appendChild(newBr);
	respuesta.appendChild(newBr2);

}

function registrado() {
      var nombre = document.getElementById("nombre").value;
      var telefono = document.getElementById("telefono").value;
      var correo = document.getElementById("correo").value;
      var contacto = document.getElementById("contacto").value;

      if (nombre === '' || telefono === '' || correo === '' || contacto==='') {
        alert("Ingrese los datos correspondientes.");
      }else
      {
      	
        alert("Quedo registrado correctamente!!!");
     	document.getElementById("nombre").value="";
      	document.getElementById("telefono").value="";
      	document.getElementById("correo").value="";
      	document.getElementById("contacto").value="";
      	document.getElementById("sencilla").value=0;
      	document.getElementById("doble").value=0;
      	document.getElementById("triple").value=0;
      	document.getElementById("cuadruplas").value=0;
      	document.getElementById("numPersonas").value=0;
      	document.getElementById("numDisponible").value=0;
      	document.getElementById("input1").value=0;
      	document.getElementById("input2").value=0;
      }
      
    }

  function descontar() {
var sencilla = document.getElementById("Sencilla").innerHTML;
var doble=document.getElementById("Doble").innerHTML;
var triple=document.getElementById("Triple").innerHTML;
var otro=document.getElementById("Cuadrupla").innerHTML;
var seleccion=document.getElementById("menu").value;
var input=document.getElementById("disponible").value;
var resta=0;
if(seleccion ==1 ){
  if(sencilla>=1){
  resta=0;
  resta=sencilla-input;
  sencilla=resta;
  document.getElementById("Sencilla").innerHTML=(sencilla);
  }
  else{
    document.getElementById("Sencilla").innerHTML=("agotado");
  }
}
else{
  resta=0;
  if(seleccion==2){
    if(doble>1){
     resta=doble-input;
     doble=resta;
      document.getElementById("Doble").innerHTML=(doble);
     }
     else{
     document.getElementById("Doble").innerHTML=("agotado");
     }
  }
}
resta=0;
if(seleccion==3){
  if(triple>=1){
    resta=triple-input;
    triple=resta;
    document.getElementById("Triple").innerHTML=(triple);
    }
   else{
   document.getElementById("Triple").innerHTML=("agotado")
   }  
}
resta=0;
if(seleccion==4){
  if(otro>=1){
  resta=otro-input;
  otro=resta;
  document.getElementById("Cuadrupla").innerHTML=(otro);
  }
  else {
    document.getElementById("Cuadrupla").innerHTML=("agotado")
       }
}

}



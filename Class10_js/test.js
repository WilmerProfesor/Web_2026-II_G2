console.log("Esto es código JS desde un archivo enlazado")
console.error("Esto se pinta como un error");
console.warn("Esto se pinta como un warning");

// alert("esto es una salida")
// let x= prompt("Esta es una entrada");

var x= 5;  // DEPRECADO ******* NO USAR *******
console.log(x+4);

let y= 5;
console.log(typeof(y));
y="Hola mundo";
console.log(typeof(y));

let z=4;
let z1=4.6;
let z2="Esto es un string";
let z3=true;
let z4=()=>{return 0;};
let z5=[2,true,6,[3,2],"Hola"];
let z6={nombre:"Wilmer", edad:37, sexo:true};



console.log(typeof(z));
console.log(typeof(z1));
console.log(typeof(z2));
console.log(typeof(z3));
console.log(typeof(z4));
console.log(typeof(z5));
console.log(typeof(z6));

/*
OPERADORES RELACIONALES

>
<
>=
<=
==
!=
===
!==

*/ 

let m=5;
let n="5";

if(m===n){
    console.log("Iguales");
}else{
    console.log("Diferentes");    
}

z5.push(34);
console.log(z5);



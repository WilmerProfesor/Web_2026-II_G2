
const x= 5;
// x[0]=6;
// Esto causará un error porque no se puede reasignar una variable constante
console.log(x);

const x2= [1,2,3,4,5]; // objeto constante pero mutable
x2[0]=6; // Esto es válido, ya que estamos modificando el contenido del array, no reasignando la variable
x2.push(7); // Esto también es válido
console.log(x2);

if(true){
    const x3= 10; //ámbito de la variable o scope
    console.log(x3);
}
//console.log(x3); // Esto causará un error porque x3 está fuera del alcance

// if (condition) {
    
// } else {
    
// }

switch (x) {
    case 1:
        console.log("Es uno");
        break;
    case 2:
        console.log("Es dos");
        break;
    default:
        console.log("No es ni uno ni dos");
        break;
}

let variable=false;
for (let i = 0; i < 10 ; i++) {
    if(i==5){
        break; // rompe el ciclo
    }
    // variable=prompt("Desea continuar? (true/false)");
    console.log(i);
}
console.log("----------------");

for (let i = 0; i < 10; i++) {
    if(i==5){
        continue; // salta a la siguiente iteración
    }
    console.log(i);
}

let i=0;
while (i<5) {
    console.log(i);
    i++;
}

console.log("----------------FOR");

const array3= [1,"dos",3.1,true,{nombre:"wilmer", edad:37}, [7,6,5,4,3]];;

for(let item of array3){
    console.log(typeof(item));
}
console.log("TAMAÑO DEL ARRAY: "+array3.length);
console.log("insertar por cola: "+array3.push(8));
console.log("insertar por cabeza: "+array3.unshift(0));
console.log(array3);
console.log("eliminar por cola: "+array3.pop());
console.log("eliminar por cabeza: "+array3.shift());
console.log(array3.splice(1,3));
console.log(array3);
console.log("Con - de separador: "+array3.join("-*-"));

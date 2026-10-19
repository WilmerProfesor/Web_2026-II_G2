// Function declaration
function suma(a, b) {
    return a+b;
}
let variable= suma(5, 3);
let variable2= suma;
console.log(typeof(variable));
console.log(typeof(variable2(5,4)));

// Function expression o anonymous function
const x3= function (a, b) {
    return a-b;
}
console.log(x3(5, 3));

// Arrow function
const x4= (a, b) => { return a*b; }
console.log(x4(5, 3));

const x5= (a, b) => a/b;
console.log(x5(5, 3));

const x6= a => a**2;
console.log(x6(5));

const x7= () => 5;
console.log(x7());

// Objetos

const persona= {nombre:"Homero", edad:37, sexo:true, direccion:{calle:"Av. Siempre Viva", numero:123}};
console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);
console.log(persona.direccion.calle);

persona.nombre="Marge"; // Modificar un valor
console.log(persona);

persona.esposo="Homero"; // Agregar un nuevo valor porque no existía
console.log(persona);

class Persona{
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar(){
        console.log("Hola soy "+this.nombre);
    }
}

const persona1= new Persona("Wilmer", 37, true);
console.log(persona1);
persona1.saludar();

class persona2{
    constructor(objeto){
        const {nombre, edad, sexo}= objeto;
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar(){
        console.log("Hola soy "+this.nombre);
    }

    verSexo(){
        if(!this.sexo){
            console.log("Desconocido");
            return;
        }
        if(this.sexo){
            console.log("Soy hombre");
        }else{
            console.log("Soy mujer");
        }
    }
}
const objetoPersona = { nombre: "Marge", edad: 36 };
const p = new persona2(objetoPersona);
console.log(p);
p.saludar();
p.verSexo();

const funcion1= function(a, b){
    return a+b;
}

const funcion2= (a, b) => a-b;
console.log(funcion2(funcion1(5, 3), 4));

const m= [1,2,3,4,5];
console.log("Original-> ",m);
const m2= m.map((item)=> item*2); // Devuelve un nuevo array con los elementos modificados, en este caso [2,4,6,8,10]
console.log(m2);

const m3= m.filter((item)=> item%2==0); // Devuelve un nuevo array con los elementos que cumplen la condición, en este caso [2,4]
console.log(m3);

const m4= m.reduce((acumulador, item)=> acumulador+item, 0); // Devuelve la suma de todos los elementos del array, en este caso 15
console.log(m4);

const m5= m.find((item)=> item>3); // Devuelve el primer elemento que cumpla la condición, en este caso 4
console.log(m5);

const m6= m.some((item)=> item>3); // Devuelve true si al menos un elemento cumple la condición
console.log(m6);

const m7= m.every((item)=> item>0); // Devuelve true si todos los elementos cumplen la condición
console.log(m7);

const m8= m.includes(3); // Devuelve true si el elemento está en el array
console.log(m8);

const m9= m.indexOf(3); // Devuelve el índice del elemento en el array, en este caso 2
console.log(m9);

const m10= m.join("-"); // Devuelve un string con los elementos del array separados por el separador indicado, en este caso "1-2-3-4-5"
console.log(m10);

const m11= m.slice(1, 4); // Devuelve un nuevo array con los elementos desde el índice 1 hasta el índice 4 (sin incluirlo), en este caso [2,3,4]
console.log(m11);

const m12= m.splice(1, 2); // Elimina 2 elementos desde el índice 1 y devuelve un nuevo array con los elementos eliminados, en este caso [2,3]
console.log(m12);
console.log(m);

const m13= m.concat([6,7,8]); // Devuelve un nuevo array con los elementos del array original y los elementos del array pasado como parámetro, en este caso [1,4,5,6,7,8]
console.log(m13);

const m14= [...m, 6, 7, 8]; // Devuelve un nuevo array con los elementos del array original y los elementos pasados como parámetros, en este caso [1,4,5,6,7,8]
console.log(m14);

const m15= m.sort((a, b)=> a-b); // Devuelve un nuevo array con los elementos ordenados de menor a mayor, en este caso [1,4,5]
console.log(m15);

const m16= m.sort((a, b)=> b-a); // Devuelve un nuevo array con los elementos ordenados de mayor a menor, en este caso [5,4,1]
console.log(m16);

const m17= m.reverse(); // Devuelve un nuevo array con los elementos en orden inverso, en este caso [5,4,1]
console.log(m17);
function greet(){
    console.log('Hello')
}
greet(); //Invocamos la funcion

//Funciones con parametros

function logGreeting (fn){
    fn();
}
logGreeting(greet);

//Funcion con exprecion

let greetMe = function(){
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);
//En esta funcion, se pasa como parametro


console.log('Separador de normal a refactor')

// Funciones anteriores pero realizadas con redactor, el cual nos ayuda a un codigo mas limpio
//Las dos formas de refactorizar greet
let greet1 = () =>{
    console.log('Hello');
}
greet1();

let greet2 = () => console.log('Hello');
greet2();

//Las dos formas de refactorizar logGretting;
let logGreeting1 = (fn1) =>{
    fn1();
}
logGreeting1(greet1);


let logGreeting2 = (fn2) => fn2();
logGreeting2(greet2);

//Las dos formas de refactorizar greetMe
let greetMe1 = () =>{
    console.log('Hello from the function expression');
}

greetMe1();
logGreeting1(greetMe1);

let greetMe2 = () => console.log('Hello from the function expression');

greetMe2();
logGreeting2(greetMe2);

//La refactorizacion del codigo nos ayuda a ver de una manera mas simple cada funcion lo cual ayuda a identificarlas de una mejor manera y comprenderla mas rapido.
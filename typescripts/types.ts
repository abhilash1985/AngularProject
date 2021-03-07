let num1:number;
let num2:number;

num1 = 100;
num2 = 200;

console.log(num1 + num2);

let notSure: any = 4;    //defined as any
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);

let stillNotSure;    //No Type specifued. infered as any
stillNotSure = 5;
stillNotSure = "may be a strng instead"
stillNotSure = false;

console.log(stillNotSure);

// Arrays
var cities: string[] = ['Delhi', 'New York', 'London'];

console.log(cities);

var cities2: Array<string> =['Delhi', 'Punjab', 'Bangalore'];

console.log(cities2);

// Function arguments & Return Types
function add(x: number, y: number): number {
  return x + y;
}

var value:any = add(10, 12);
console.log(value);

// Anonymous Objects
var student: { id: number; name: string; };
student = { id: 10, name: 'Name' }

console.log(student);

// Union types
var id: string|number

// Declaring a variable
var msg: string = "Hello World";

// Syntax:

// let  [Indentifier] : [type-annotation]  = value ;
// var  [Indentifier] : [type-annotation]  = value ;
// const [Indentifier] : [type-annotation]  = value ;

var msg2: string = "Hello World"
var num: number = 1000;

console.log(msg2);
console.log(num);

// var message: string
// var num: number

// console.log(message);    // will print undefined as no value is assigned
// console.log(num);

// message="Hello World"
// num=1000;

// console.log(message);
// console.log(num);

// https://www.tektutorialshub.com/typescript/typescript-variable/



// https://www.tektutorialshub.com/typescript/identifiers-keywords-in-typescript/
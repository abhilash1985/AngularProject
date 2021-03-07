var num1;
var num2;
num1 = 100;
num2 = 200;
console.log(num1 + num2);
var notSure = 4; //defined as any
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
var stillNotSure; //No Type specifued. infered as any
stillNotSure = 5;
stillNotSure = "may be a strng instead";
stillNotSure = false;
console.log(stillNotSure);
// Arrays
var cities = ['Delhi', 'New York', 'London'];
console.log(cities);
var cities2 = ['Delhi', 'Punjab', 'Bangalore'];
console.log(cities2);
// Function arguments & Return Types
function add(x, y) {
    return x + y;
}
var value = add(10, 12);
console.log(value);
// Anonymous Objects
var student;
student = { id: 10, name: 'Name' };
console.log(student);
// Union types
var id;
// Declaring a variable
var msg = "Hello World";
// Syntax:
// let  [Indentifier] : [type-annotation]  = value ;
// var  [Indentifier] : [type-annotation]  = value ;
// const [Indentifier] : [type-annotation]  = value ;
var msg2 = "Hello World";
var num = 1000;
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

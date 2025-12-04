/* console.log("Implicit conversion:")
console.log("String + number is converted to string")
console.log("1"+2); // converted to string
console.log("10"-2); //converted to number
console.log(true-1)
console.log("Explicit conversion:")
console.log(Number("123"));
console.log(Number("abc"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hi"));
console.log("== automatic type copnversion:")
console.log(5=="5") // true
console.log(null==undefined)
console.log(0==false)
console.log(""==false)
console.log("=== actually checks the value:")
console.log(5==="5") // false
console.log(null===undefined)
console.log(0===false)
console.log(""===false)
console.log("if block")
if([]){
    console.log("statement will be executed.")
}
console.log("-------------------------------------------------------------------------------------")
let age=25; // redeclare can't be done
age=30;//reassign the value will be allowed
console.log(age);
console.log("-------------------------------------------------------------------------------------")
var age1=25; // redeclare allowed
var age1=30;//reassign allowed
age1=56;
console.log(age1);
console.log("-------------------------------------------------------------------------------------")
const age3=54;//both reassign and redeclare will not be allowed
console.log(age3);
console.log("-------------------------------------------------------------------------------------"); 

console.log("hoisting will occur in var "); 
let z;
console.log(z);
z=5; 

//var is a function scope variable and but let and const is a block scope variable
// 1.normal function example
example();
function example(){
    if(1){
        var count =10; //if we use var it can be used anywhere inside the function but let and const will show error
    }
    console.log(count);
} 

// functioon expression
//2.anonymous function
const anonymousexpress= function(){
    console.log("Hello, I'm Ragavi from anonymous function.");
}
anonymousexpress();
//3.named function
const express= function named(){
    console.log("Hello, I'm Ragavi from named function.");
}
express(); 

//4.callback function
//a function is passed as a argument to another function.
//used for asynchronous operations..
function process(callback){
  console.log("processing...");
  callback();
}

function done(){
    console.log("Task Completed!");
}

process(done); 

//5.higher order function
//receiveing the argument(callback function)
function process(callback){ //higher order function.
  console.log("processing...");
  callback();
}

function done(){
    console.log("Task Completed!");
} 

//6.Arrow function
//a shorter,more concide way to write a function
const greetArrow=(name) =>{
    return "hi "+name;
}
console.log(greetArrow("Ragavi"));

const add=(a,b)=>a+b;
console.log(add(5,6));

const square = x =>x*x;
console.log(square(4)); 

//arrays -> in js arrays stores non homogeneous data 

const fruits = ['apple', 'banana'];

const newlength = fruits.push('orange'); // add to the end
console.log(fruits);
console.log(newlength);

fruits.unshift('Avacado'); // add in front
console.log(fruits);

const poppedele = fruits.pop(); // remove last element
console.log(poppedele);
console.log(fruits)
fruits.shift();
console.log(fruits); 

//slice - extract the particular portion of the array...original array should not be affected
const fruits1 = ['apple', 'banana','kiwi','orange','grape'];
let sliced=fruits1.slice(1,3);
console.log(sliced);

console.log(fruits1);

let lasttwo=fruits1.slice(-2);
console.log(lasttwo);
console.log(fruits1); 

let f=["apple","banana","orange"];
console.log(f.includes("banana"));
console.log(f.includes("grape")); 


let numbers =[1.4,7,12,15];

let found =numbers.find(num => num >10);
console.log(found);

let nums=[2,3,4,5,6,7];
let found1 =nums.find(n => n %2 ===0);
console.log(found1); 

let prices = [50, 120, 300, 20];

let updatedPrices = prices.map(price => price + 100);

console.log(updatedPrices);

let persons = ["Kumar", "Vijay", "Sasi"];

persons = persons.map(name => "Mr " + name);

console.log(persons); */

let numbers =[1.4,7,12,15];

let found =numbers.filter(num => num >10);
console.log(found);
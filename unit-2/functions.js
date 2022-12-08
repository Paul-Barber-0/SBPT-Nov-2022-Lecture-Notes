/* 
! Fucntions
    - block of code that performs a particular task.
    - simplified programs that run a task when invoked.

    Two Main Types:
        - Declaration
        - Expression
*/

//  Declaration
/* 
    Structure:

        1    2
    function hi() {
        ... code block
    }

    1. Keyword
    2. Name of the function and parenthesis for the parameter(s)

    ! Gets hoisted
*/

function hi() {
    console.log('hi');
}

// Expression
/* 
    Structure:

        1
    let hey = function hi() {
        code block ...
    }

    1. The variable "hey" is now representative of the function hi()
    ! Does NOT get hoisted
*/

let hello = function hey() {
    //console.log('hey');
    return 'hey';
}

// hi();  // invoking our function hi()
// hello(); // Expression variable name is required to run function
// hey(); // doesn't run

// console.log(hello);
// console.log(hello());

// Create a function that, when invoked, lists out the numbers 1-10

function count10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// count10();


// Given the array, create a function that lists out the values individually
let arr = ['This', 'is', 'really', 'cool'];

function log(array) {
    for (i of array) {
        console.log(i);
    }
}

// log(arr);

//! Parameters
/* 
    Structure:

    function fncName(parameter) {
        console.log(`Hi, ${parameter}`);
    }

    fnc("Paul");

    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the paramter given to the function.
    3. This is where we can define what that parameter's value will be.
*/

function order(ticket, total) {
    console.log(`I exchanged my ticket for a ${ticket} It cost ${total} dollars.`);
}

order('cheese pizza', 10);
order('soup', 3);
order('salad', 5);

// ! Return
/* 
    Structure:

    let hi = function() {
          1
        return "hi";
    }
            2       3
    let greeting = hi()

    console.log(greeting);

    1. keyword: return - return our data out of our function.
    2. New variable to hold the returned value.
    3. When called, the function becomes the value of the return.
*/

function fName() {
    return 'Steve';
}

let myName = fName();
console.log(myName);

let volume = function(l, w, h) {
    let total = l * w * h;
    return total;
}

let recOne = volume(3,5,2);
let recTwo = volume(7,2,5);

console.log("Rec One:", recOne);
console.log("Rec Two:", recTwo);


function coffeeMaker(filter) {
    return `A full pot of ${filter}!`;
}

let mon = coffeeMaker('coffee');
let tues = coffeeMaker('tea');
let wed = coffeeMaker('green tea');
let sat = coffeeMaker('soup');

console.log(mon);
console.log(tues);
console.log(wed);
console.log(sat);

mon = 'new value in monday';
console.log(mon);

//! Arrow Functions
/* 
    Structure:
        1       2
    let hi = () => {
        console.log('hi');
    }

    1. We need to set the arrow function to a variable
    2. We use the "fat arrow" to signify it's a function.

    - introduced in ES6. The are basically a more concise way to write function expressions - NOT declarations.

    ! Do NOT get hoisted!

    Two different styles:
        - Concise Body
        - Block Body
*/

// Concise Body
let goodbye = () => console.log('goodbye'); // has return built in by default
goodbye();

let total = () => 2+2;
let isFour = total();
console.log(isFour);

// Block Body
let apples = qty => {
    return `There are ${qty} apples.`;
}

let appleCount = apples(4);
console.log(appleCount);

//? same function above as concise body
let apples2 = qty => `There are ${qty} apples.`;
let newAppleCount = apples2(isFour);
console.log(newAppleCount);

//? Multiple params
let calc = (x,y) => x + y;
console.log(calc(3,4));

// IIFE 
/* 
    - Immediately Invoked Function Expression
    - Helps allocating space in memory for anonymous functions
    - Fires our function as soon as it is read
*/

(function(){
    console.log('IIFE fired')
})();
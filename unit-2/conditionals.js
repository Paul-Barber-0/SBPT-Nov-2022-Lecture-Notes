/* 
!   Conditionals
    - Evaluates an expression and responds if it is true
    - Falsy
        - false
        - 0
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

let isOn = true;

if(isOn == true) {
    console.log('The light is on!');
}
/* 
    if(expression evaluated) {
        ... code that runs if expression is true.
    }
*/

if(isOn) {
    console.log('The light is on, yay!');
}

let myName = "Paul";
let newString = `My name is ${myName}`;
console.log(newString);

isOn = false;

if(isOn == false) {
    console.log('The light is off');
}

let weather = 65;

if(weather < 70) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!')
}

// And, Or, Not

let rain = false;

if(weather < 70 && rain) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!');
}

if(weather > 70 || rain) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!');
}

if(!rain) {
    console.log('Seems to be a clear day');
}

let grade = 88;

if(grade > 75) {
    console.log('Passing');
} else if(grade >= 69) {
    console.log('Please see the teacher');
} else {
    console.log('Failing');
}

//! Switch
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of our code block
        - default
            - run if no cases match

    Structure

    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;        
    }
*/

let officeCharacter = "Pam";

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    case "Pam":
        console.log("Yup");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let num = -5;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;
}

//! Ternary
/* 
    Always a If/Else condition at a minimum.

    Structure:

    expression ? true : false;
*/

let expression = false;

if(expression) {
    console.log('Runs True');
} else {
    console.log('Runs False');
}

expression ? console.log('Runs True') : console.log('Runs False');

let newNum = 6;
num > 0 ? console.log('yes') : console.log('no');

// as an if/else
if(newNum > 0) {
    console.log('yes');
} else {
    console.log('no')
}

//* Else/If
if(newNum == 0) {
    console.log('Hello');
} else if(newNum < 0) {
    console.log('Hi');
} else {
    console.log('goodbye');
}

(newNum == 0) ? 
    console.log('Hello') : 
    (newNum < 0) ?
    console.log('gi') :
    console.log('goodbye again');

let numOne = 1;
let numTwo = 2;

let value = ((numOne + numTwo) > 1) ? (numOne + numTwo) : 0;

console.log(value);
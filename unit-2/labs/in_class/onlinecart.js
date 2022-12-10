/* 
! Challenge
Provided are two arrays of item expenses held within an "online cart". 

- Create a variable that represents sales tax. This will need to hold a number. *can be sales tax in your area or a made-up value.

- Create a variable that will hold the total of this online cart.

- Create a function that accepts an array as a parameter.
- generate a subtotal of all the items provided through the array.
- Update your total variable with the subtotal and sales tax.

- Invoke your function by passing in the individual arrays provided.

- Using string interpolation, console log "Total: [cart total]"
        - hint: https://www.w3schools.com/jsref/jsref_tofixed.asp
*/

const firstCart = [
    4.50, 3.25, 14.99, 25.99, 42.99 // subtotal $91.72
];
const secondCart = [
    1.99, 13.50, 22.99, 129.00 // subtotal $167.48
];

let salesTax = 0.075; // Vermont sales tax (6%)

function ringUp (cartArray) {
    let subtotal = 0;

    for(cost of cartArray) { // Sum up the cost of each item in the cart
        subtotal += cost;
    }

    let tax = subtotal * salesTax; // Calculate sales tax
    let total = subtotal + tax; // Add sales tax to total

    total = total.toFixed(2); // Round total to the nearest cent
    total = '$' + total; // Format total in dollars
    return total;
}

console.log(`Total: ${ringUp(firstCart)}`);

console.log(`Total: ${ringUp(secondCart)}`);
/* 
    - use a loop, conditional, and console.log() to print all the numbers from 1 to 30.

    - Numbers evenly divisible by 3, print "Fizz" instead of the number.

    - Number evenly divisible by 5, not 3, print "Buzz" instead of the number.

    - Numbers that are evenly divisible by BOTH 3 and 5, print "Fizz Buzz" instead of the number.

    - Any number that is not divisible by either, print the number.
*/

for(let num = 1; num <= 30; num++) {
    (num % 3 === 0 && num % 5 == 0) ?
    msg = "Fizz Buzz" :
    (num % 3 === 0) ?
    msg = "Fizz" :
    (num % 5 === 0) ?
    msg = "Buzz" :
    msg = num;

    console.log(msg);
}
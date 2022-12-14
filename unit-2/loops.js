/* 
    FOR
        Takes in 3 parameters
            - inital expression
            - condition
            - incremental expression
        
        Structure
        
        for (inital expression; condition; increment expression) {
            ... code block
        }
*/

for(i = 0; i < 10; i++) {
    console.log(i);
}

console.log('out of loop');

for(i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Challenge: using a for loop, count from 10 to 0, going down by 1

for(i = 10; i >= 0; i -= 1) console.log(i); // if using a straight return, don't need curly brackets.

let firstName = 'Winebrenner';

for(let i = 0; i < firstName.length; i++) {
    console.log(firstName[i], i);
}

let sum = 0;

for(let i = 0; i <= 50; i++) {
    console.log(i);
    sum += i;
}

console.log(sum);

//! For In

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

console.log(student["name"]); // pulls out the value of "name" from the object.

for(item in student) {
    console.log(item, student[item]);
    console.log(item); // notes each key in the object.
    console.log(student[item]); // notes the value of each key.
}

let catArray = [
    'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'
];

for(cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}

//! For Of
// for(item of student) {
//     console.log(item);
// }

/* for(cat of catArray) {
    console.log('FOR OF: ', cat);
} */

for(cat of catArray) {
    if(cat === 'tabby') {
        console.log(cat);
    } else {
        console.log("not tabby");
    }
}
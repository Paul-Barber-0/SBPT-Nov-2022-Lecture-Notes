//! Reverse Challenge
/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 5 is now in 0, 4 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/


let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

function reverseArray(input) {    
    if(!(typeof input === 'object' && input instanceof Array)) {
        return 'Not an Array';
    }
    input.reverse();
    return input;
}


//! ForEach() Challenge
/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies (4 qty)
    - Use .forEach() to list your movies
    - Add another movie at the end
        - Use .forEach() to list your movies
    - And replace one of your existing movies with another one.
        - Use .forEach() to list your movies
*/

let movies = [
    'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith'
];

console.log('\n');
movies.forEach(movie => console.log(movie));

console.log('\n');
movies.push('Attack of the Clones');
movies.forEach(movie => console.log(movie));

console.log('\n');
movies.splice(-2, 2, "Doesn't exist");
movies.forEach(movie => console.log(movie));
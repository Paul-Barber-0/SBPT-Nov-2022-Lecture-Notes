//! Promise
/* 
    3 States:
        - Pending
        - Fulfilled
        - Rejected

    Is an object that may produce a singular value in the future.
    - Always returns an object

    Takes in two parameters
        - Resolve
        - Reject

        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

*/

//* Mock internet send
// function getData() {
    
//     setTimeout(() => {
//         return "some data"
//     }, 3000)
// }

// let data = getData(); // the value comes "late" - 3 seconds
// console.log('Data:', data); // We get an undefined because the information is delayed when it is compiled.

//* Callback - functions that get exectuted after the end of a process.
/* function getData(cb) {
    
    setTimeout(() => {
        cb("some Data from CB");
    }, 3000);
}

getData(data => console.log(data));
console.log("Hello World"); */

/* 
* A promise is an object that may produce a singular value in the future.
*/

function returnData() {

    return new Promise((reslove, reject) =>{

        setTimeout(() => {

            if(true) {
                reslove('some data from Promise');
            } else {
                reject('This is a rejection')
            }

        }, 3000);
        // });
    })
}

console.log(returnData());

/* 
! Resolvers
    - When returned, the returnedData func. will return a promise of a given string.

        - Chained with a resolver
            - Keywords
                - .then()
                    If success
                - .catch()
                    If error
            - Takes in a callback function
            - Only put the semicolon (;) after the last resolver
            
            promiseResults.then().then().then().then().then().catch();
*/

// returnData() //returns Promise
//     .then(data => console.log('From Responds', data))
//     .catch(function(err) {
//         console.error(err);
//     })

/* 
*   The Process
        - Creating a new Promise
            - resolve / reject are parameters of a callback function
        - setTimeout is acting our "waiting" for a resource.
        - resolve() or reject() said promise.
        When returned, returns a Promise - not a string
        - use of resolvers (.then() / .catch()) with callbacks to extropolate the info from that promise.
*/
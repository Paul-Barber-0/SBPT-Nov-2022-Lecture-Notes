let conditions = ['sunny', 'snow', 'humid','sunny', 'snow', 'humid', 'sunny', 'snow', 'humid', 'rain','sunny', 'snow', 'humid', 'windy'];
let number = 0;
let weather = 'sunny';

do {
    //code block that runs as long as long as the while expression returns true
    // exception: will run at least once.
    
    if(conditions[number] === "rain") {
        // number = 20;
        number++;
        // break;
        continue; // can help us to "skip" a postion.
    }
    console.log(conditions[number], number);
    number++;
    
} while (number < conditions.length);

// console.log(number);
// code continues